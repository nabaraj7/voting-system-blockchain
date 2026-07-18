import ElectionStatusHeader from "@/components/ElectionStatusHeader";
import VoterForm from "@/components/voterform";

export default function VoterApplicationPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <ElectionStatusHeader status="Voter Registration Open" />
      <VoterForm />
    </main>
  );
}