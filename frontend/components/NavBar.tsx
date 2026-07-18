import Link from "next/link";
import SealMark from "./SealMark";

export default function NavBar() {
  return (
    <div className="w-full" style={{ background: "var(--navy)" }}>
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/home" className="flex items-center gap-3">
          <SealMark size={32} />
          <div>
            <p className="font-display text-white text-base font-bold leading-tight">
              Election Commission
            </p>
            <p className="text-xs" style={{ color: "#A8BEDD" }}>
              Blockchain Voting System
            </p>
          </div>
        </Link>
        {/* Connect Wallet button will slot in here later */}
      </div>
    </div>
  );
}