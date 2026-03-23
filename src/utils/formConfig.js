export const JOB_FORM_FIELDS = [
  { id: "company", label: "Company", type: "text", placeholder: "Amazon" },
  { id: "role", label: "Role", type: "text", placeholder: "Software Engineer" },
  {
    id: "roleType",
    label: "Role Type",
    type: "select",
    options: ["Fulltime", "Internship", "Contract"],
  },
  {
    id: "status",
    label: "Status",
    type: "select",
    options: ["Applied", "Under Review", "Interview", "Rejected", "Accepted"],
  },
  { id: "jobURL", label: "Job URL", type: "text", placeholder: "https://example.com/job" },
  { id: "notes", label: "Notes", type: "textarea", placeholder: "Add any notes..." },
];

export const INITIAL_FORM_STATE = {
  company: "",
  role: "",
  roleType: "",
  status: "",
  jobURL: "",
  notes: "",
};