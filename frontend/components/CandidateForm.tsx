"use client";

import { useState } from "react";
import Link from "next/link";
import SealMark from "@/components/SealMark";

export default function CandidateForm() {
  const [formData, setFormData] = useState({
    voterId: "",
    partyName: "",
    symbol: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: replace with actual contract call, e.g.
    // const success = await registerCandidate(formData.voterId, formData.partyName, formData.symbol);

    console.log("Submitting candidate application:", formData);
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <div
      className="rounded-lg border"
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
    >
      <div className="px-8 py-6 border-b" style={{ borderColor: "var(--border)" }}>
        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--blue)" }}>
          Section 2
        </p>
        <h2 className="font-display font-bold text-xl mt-1" style={{ color: "var(--text)" }}>
          Candidate Application
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
          Requires a verified Voter ID issued after voter registration.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
              Voter ID <span style={{ color: "var(--muted)" }}>(provided by ECN)</span>
            </label>
            <input
              type="text"
              name="voterId"
              value={formData.voterId}
              onChange={handleChange}
              required
              placeholder="Enter your Voter ID hash"
              className="w-full px-4 py-3 rounded-md border text-sm font-mono focus:outline-none focus:ring-2"
              style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)" }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
              Party Name
            </label>
            <input
              type="text"
              name="partyName"
              value={formData.partyName}
              onChange={handleChange}
              required
              placeholder="Enter your party name"
              className="w-full px-4 py-3 rounded-md border text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)" }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
              Symbol
            </label>
            <input
              type="text"
              name="symbol"
              value={formData.symbol}
              onChange={handleChange}
              required
              placeholder="Enter your party symbol"
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
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      ) : (
        <div className="px-8 py-10 flex flex-col items-center text-center">
          <SealMark size={56}  />

          <p className="mt-4 verified-badge">✓ Application Received</p>

          <p className="text-sm mt-6" style={{ color: "var(--muted)" }}>
            Party
          </p>
          <p className="font-display font-bold text-lg mt-1" style={{ color: "var(--text)" }}>
            {formData.partyName} — {formData.symbol}
          </p>

          <Link
            href="/home"
            className="mt-6 px-5 py-2 rounded-md text-sm font-semibold border transition-colors"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            Exit
          </Link>
        </div>
      )}
    </div>
  );
}