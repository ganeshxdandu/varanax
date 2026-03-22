import JobsTable from "./RecentJobs";

const RecentApplications = () => {
  return (
    <div>
      <h3 className="title mb-5 text-2xl font-bold tracking-tighter text-zinc-200">
        Recent Applications
      </h3>

      <JobsTable />
    </div>
  );
};
export default RecentApplications;
