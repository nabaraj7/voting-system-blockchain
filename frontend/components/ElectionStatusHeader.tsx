"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ElectionStatusHeaderProps {
  status: string;
}

export default function ElectionStatusHeader({
  status,
}: ElectionStatusHeaderProps) {
  const pathname = usePathname();

  return (
    <div className="text-center mb-8">
      <h2 className="text-sm text-gray-400 mb-2">Current Election Status</h2>
      <p className="mb-4 font-medium text-white">{status}</p>

      <div className="flex justify-center gap-6">
        <Link
          href="/voter-application"
          className={`px-4 py-2 rounded transition-colors ${
            pathname === "/voter-application"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Apply as a Voter
        </Link>

        <Link
          href="/candidate-application"
          className={`px-4 py-2 rounded transition-colors ${
            pathname === "/candidate-application"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Apply as a Candidate
        </Link>
      </div>
    </div>
  );
}