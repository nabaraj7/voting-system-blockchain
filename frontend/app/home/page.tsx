import Link from "next/link";
import ElectionStatusHeader from "@/components/ElectionStatusHeader";
import ArchiveSection from "@/components/ArchiveSection";

export default function HomePage() {
  const electionInfo = {
    date: "2026-08-15",
    time: "09:00 AM - 05:00 PM",
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <ElectionStatusHeader status="Election Open for Registration" />

      <div className="text-center mb-6">
        <p className="text-gray-300">
          Election Info: {electionInfo.date} — {electionInfo.time}
        </p>
      </div>

      <div className="text-center mb-10">
        <Link
          href="/voter-list"
          className="underline text-blue-400 hover:text-blue-300"
        >
          Voter List → click to open new page
        </Link>
      </div>

      <ArchiveSection />
    </main>
  );
}