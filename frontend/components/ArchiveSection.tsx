interface Election {
  id: string;
  title: string;
  date: string;
  status: "past" | "upcoming";
}

// Placeholder data — replace with data fetched from your contract later
const elections: Election[] = [
  {
    id: "1",
    title: "General Election 2025",
    date: "2025-11-10",
    status: "past",
  },
  {
    id: "2",
    title: "General Election 2027",
    date: "2027-03-05",
    status: "upcoming",
  },
];

export default function ArchiveSection() {
  const pastElections = elections.filter((e) => e.status === "past");
  const upcomingElections = elections.filter((e) => e.status === "upcoming");

  return (
    <div className="mt-10 text-center">
      <h3 className="text-lg font-semibold mb-4 text-white">
        Past & Future Elections
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div>
          <h4 className="text-sm text-gray-400 mb-2">Past Elections</h4>
          {pastElections.length === 0 ? (
            <p className="text-gray-500 text-sm">No past elections</p>
          ) : (
            <ul className="space-y-1">
              {pastElections.map((election) => (
                <li key={election.id} className="text-gray-300 text-sm">
                  {election.title} — {election.date}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h4 className="text-sm text-gray-400 mb-2">Upcoming Elections</h4>
          {upcomingElections.length === 0 ? (
            <p className="text-gray-500 text-sm">No upcoming elections</p>
          ) : (
            <ul className="space-y-1">
              {upcomingElections.map((election) => (
                <li key={election.id} className="text-gray-300 text-sm">
                  {election.title} — {election.date}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}