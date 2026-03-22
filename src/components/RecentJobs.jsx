const statusStyles = {
  Applied: "bg-zinc-700/50 text-zinc-400 border border-zinc-600",
  Interview: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  "Under Review":
    "bg-violet-500/15 text-violet-400 border border-violet-500/30",
  Rejected: "bg-red-500/15 text-red-400 border border-red-500/30",
  Offered: "bg-green-500/15 text-green-400 border border-green-500/30",
};

const StatusChip = ({ status }) => (
  <span
    className={`rounded-full px-3 py-1 text-[12px] font-medium ${statusStyles[status]}`}
  >
    {status}
  </span>
);

const columns = ["Company", "Role", "Role Type", "Status", "Date Applied"];

const jobs = [
  {
    company: "Amazon",
    role: "Frontend Developer",
    roleType: "Internship",
    status: "Applied",
    dateApplied: "10 Mar 2026",
  },
  {
    company: "Google",
    role: "SDE I",
    roleType: "Fulltime",
    status: "Applied",
    dateApplied: "14 May 2026",
  },
  {
    company: "TCS",
    role: "SDE Intern",
    roleType: "Internship",
    status: "Interview",
    dateApplied: "23 Apr 2025",
  },
  {
    company: "Cognizant",
    role: "Full stack Developer",
    roleType: "Contract",
    status: "Under Review",
    dateApplied: "21 Sep 2025",
  },
  {
    company: "Goldman Sachs",
    role: "Backend Developer",
    roleType: "Fulltime",
    status: "Rejected",
    dateApplied: "16 Oct 2026",
  },
];

const JobsTable = () => {
  return (
    <div className="mb-8 w-full overflow-hidden rounded-xl border border-zinc-700/50">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-zinc-800/80">
            {columns.map((col, idx) => (
              <th
                key={col}
                className={`border-zinc-700/50 px-6 py-4 text-left text-[13px] font-medium text-zinc-400 ${idx !== columns.length - 1 ? "border-r" : ""}`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, i) => (
            <tr
              key={i}
              className="border-t border-zinc-700/50 bg-zinc-900 transition-colors duration-150 hover:bg-zinc-800/50"
            >
              <td className="text-body border-r border-zinc-700/50 px-6 py-4 text-zinc-200">
                {job.company}
              </td>
              <td className="text-body border-r border-zinc-700/50 px-6 py-4 text-zinc-300">
                {job.role}
              </td>
              <td className="text-body border-r border-zinc-700/50 px-6 py-4 text-zinc-300">
                {job.roleType}
              </td>
              <td className="border-r border-zinc-700/50 px-6 py-4">
                <StatusChip status={job.status} />
              </td>
              <td className="text-body px-6 py-4 text-zinc-300">
                {job.dateApplied}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsTable;
