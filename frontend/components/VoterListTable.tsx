"use client";

import { useState } from "react";

interface Voter {
  sn: number;
  name: string;
  walletAddress: string;
}

// Placeholder data — replace with data fetched from your contract later
const mockVoters: Voter[] = [
  { sn: 1, name: "Ram Sharma", walletAddress: "0xAbc123...4567" },
  { sn: 2, name: "Sita Thapa", walletAddress: "0xDef456...8901" },
  { sn: 3, name: "Hari Gurung", walletAddress: "0xGhi789...2345" },
];

export default function VoterListTable() {
  const [search, setSearch] = useState("");

  const filteredVoters = mockVoters.filter((voter) =>
    voter.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto">
      {/* Search bar */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
          className="flex-1 px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors">
          Search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-left">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-sm text-gray-400">S/N</th>
              <th className="px-4 py-3 text-sm text-gray-400">Name</th>
              <th className="px-4 py-3 text-sm text-gray-400">
                Public Address
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredVoters.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-6 text-center text-gray-500 text-sm"
                >
                  No voters found
                </td>
              </tr>
            ) : (
              filteredVoters.map((voter) => (
                <tr
                  key={voter.sn}
                  className="border-t border-gray-700 hover:bg-gray-900"
                >
                  <td className="px-4 py-3 text-gray-300">{voter.sn}</td>
                  <td className="px-4 py-3 text-gray-300">{voter.name}</td>
                  <td className="px-4 py-3 text-gray-300 font-mono text-sm">
                    {voter.walletAddress}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 text-center mt-3">
        Search by name — who registered needs to be verifiable
      </p>
    </div>
  );
}