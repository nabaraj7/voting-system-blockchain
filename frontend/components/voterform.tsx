"use client";

import { useState } from "react";
import SealMark from "@/components/SealMark";
import Link from "next/link";
// Generates a deterministic-looking unique hash from the applicant's data.
// TODO: Replace this with the actual hash/Voter ID returned by your smart contract.
async function generateVoterId(input: string): Promise<string> {
  const data = new TextEncoder().encode(input + Date.now());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return "0x" + hashHex.slice(0, 40); // trimmed to look like a wallet-style hash
}

export default function VoterForm() {
  const [formData, setFormData] = useState({
    name: "",
    walletAddress: "",
    citizenshipNumber: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [voterId, setVoterId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: replace with actual contract call, e.g.
    // const id = await registerVoter(formData.name, formData.walletAddress, formData.citizenshipNumber);

    const id = await generateVoterId(
      formData.name + formData.walletAddress + formData.citizenshipNumber
    );

    setVoterId(id);
    setSubmitting(false);
  };

  const handleCopy = async () => {
    if (!voterId) return;
    await navigator.clipboard.writeText(voterId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="rounded-lg border"
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
    >
      <div className="px-8 py-6 border-b" style={{ borderColor: "var(--border)" }}>
        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--blue)" }}>
          Section 1
        </p>
        <h2 className="font-display font-bold text-xl mt-1" style={{ color: "var(--text)" }}>
          Voter Application
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
          Fill in your details below to register as a voter.
        </p>
      </div>

      {!voterId ? (
        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-md border text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)" }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
              Public Wallet Address
            </label>
            <input
              type="text"
              name="walletAddress"
              value={formData.walletAddress}
              onChange={handleChange}
              required
              placeholder="0x..."
              className="w-full px-4 py-3 rounded-md border text-sm font-mono focus:outline-none focus:ring-2"
              style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)" }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
              Citizenship Number
            </label>
            <input
              type="text"
              name="citizenshipNumber"
              value={formData.citizenshipNumber}
              onChange={handleChange}
              required
              placeholder="Enter citizenship number"
              className="w-full px-4 py-3 rounded-md border text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)" }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 rounded-md text-sm font-semibold text-white transition-colors disabled:opacity-60"
            style={{ background: "var(--blue)" }}
          >
            {submitting ? "Verifying..." : "Submit Application"}
          </button>
        </form>
      ) : (
        <div className="px-8 py-10 flex flex-col items-center text-center">
          <SealMark size={56} />

          <p className="mt-4 verified-badge">✓ KYC Verified</p>

          <p className="text-sm mt-6" style={{ color: "var(--muted)" }}>
            Your unique Voter ID
          </p>
          <p
            className="font-mono text-lg mt-2 px-4 py-3 rounded-md border break-all"
            style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)" }}
          >
            {voterId}
          </p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleCopy}
              className="px-5 py-2 rounded-md text-sm font-semibold text-white transition-colors"
              style={{ background: "var(--blue)" }}
            >
              {copied ? "Copied!" : "Copy Voter ID"}
            </button>

            <Link
              href="/home"
              className="px-5 py-2 rounded-md text-sm font-semibold border transition-colors"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              Exit
            </Link>
          </div>

          <p className="text-xs mt-6 max-w-xs" style={{ color: "var(--muted)" }}>
            Save this ID — you'll need it to apply as a candidate.
          </p>
        </div>
      )}
    </div>
  );
}