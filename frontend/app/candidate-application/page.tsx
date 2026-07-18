import ElectionStatusHeader from "@/components/ElectionStatusHeader";
import CandidateForm from "@/components/CandidateForm";

export default function CandidateApplicationPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <ElectionStatusHeader status="Candidate Registration Open" />
      <CandidateForm />
    </main>
  );
}