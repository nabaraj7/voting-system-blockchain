"use client";

import Link from "next/link";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import SealMark from "./SealMark";

function ConnectWalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <button
        onClick={() => disconnect()}
        className="rounded-md border px-4 py-2 font-mono text-sm font-medium text-white transition-colors"
        style={{ borderColor: "var(--blue)" }}
      >
        {address.slice(0, 6)}...{address.slice(-4)}
      </button>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      disabled={isPending}
      className="rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors disabled:opacity-60"
      style={{ background: "var(--blue)" }}
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}

export function NavBar() {
  return (
    <header
      className="flex items-center justify-between gap-4 border-b px-5 py-4 md:px-8"
      style={{ borderColor: "var(--border)", background: "var(--navy)" }}
    >
      <Link href="/home" className="flex min-w-0 items-center gap-3">
        <SealMark size={32} />
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "#A8BEDD" }}>
            Election Commission
          </p>
          <h1 className="truncate font-display text-xl font-bold tracking-tight text-white md:text-2xl">
            Blockchain Voting System
          </h1>
        </div>
      </Link>

      <ConnectWalletButton />
    </header>
  );
}

export default NavBar;