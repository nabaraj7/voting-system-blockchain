"use client";

import { useState } from "react";

export default function VoterForm() {
  const [formData, setFormData] = useState({
    name: "",
    walletAddress: "",
    citizenshipNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: replace with actual contract call, e.g.
    // const voterId = await registerVoter(formData);

    console.log("Submitting voter application:", formData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4 text-center">
        Voter Application
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Public Wallet Address
          </label>
          <input
            type="text"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="0x..."
          />
          {/* Later: replace this input with a "Connect Wallet" button that auto-fills this */}
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Citizenship Number
          </label>
          <input
            type="text"
            name="citizenshipNumber"
            value={formData.citizenshipNumber}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter citizenship number"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
        >
          Submit Application
        </button>

        {submitted && (
          <p className="text-green-400 text-sm text-center mt-2">
            Application submitted! Awaiting KYC verification...
          </p>
        )}
      </form>
    </div>
  );
}