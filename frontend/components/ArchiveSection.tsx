interface Election {
  id: string;
  title: string;
  date: string;
  status: "past" | "upcoming";
}

const elections: Election[] = [
  { id: "1", title: "General Election 2025", date: "2025-11-10", status: "past" },
  { id: "2", title: "General Election 2027", date: "2027-03-05", status: "upcoming" },
];

export default function ArchiveSection() {
  const past = elections.filter((e) => e.status === "past");
  const upcoming = elections.filter((e) => e.status === "upcoming");

  return (
    <div
      className="rounded-lg border"
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
    >
      <div className="px-8 py-6 border-b" style={{ borderColor: "var(--border)" }}>
        <p className="text-xs font-semibold uppercase tracking-wide text-center" style={{ color: "var(--blue)" }}>
          Archive
        </p>
        <h2 className="font-display font-bold text-xl mt-1 text-center" style={{ color: "var(--text)" }}>
          Past &amp; Upcoming Elections
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: "var(--border)" }}>
        <div className="px-8 py-6">
          <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--muted)" }}>Past</h3>
          {past.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--muted)" }}>No past elections</p>
          ) : (
            <ul className="space-y-2">
              {past.map((e) => (
                <li key={e.id} className="text-sm flex justify-between" style={{ color: "var(--text)" }}>
                  <span>{e.title}</span>
                  <span className="font-mono" style={{ color: "var(--muted)" }}>{e.date}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-8 py-6">
          <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--muted)" }}>Upcoming</h3>
          {upcoming.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--muted)" }}>No upcoming elections</p>
          ) : (
            <ul className="space-y-2">
              {upcoming.map((e) => (
                <li key={e.id} className="text-sm flex justify-between" style={{ color: "var(--text)" }}>
                  <span>{e.title}</span>
                  <span className="font-mono" style={{ color: "var(--muted)" }}>{e.date}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}