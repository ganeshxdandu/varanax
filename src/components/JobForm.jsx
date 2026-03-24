import { useState } from "react";
import { Scale, X } from "lucide-react";
import InputField from "./InputField";
import { JOB_FORM_FIELDS, INITIAL_FORM_STATE } from "../utils/formConfig";
import { useContext } from "react";
import { FormContext } from "../utils/formContext";

const JobForm = ({ onSubmit }) => {
  const { showForm, setShowForm } = useContext(FormContext);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  //   console.log(errors);

  const validate = () => {
    const newErrors = {};
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (!formData.roleType) newErrors.roleType = "Role type is required";
    if (!formData.status) newErrors.status = "Status is required";
    return newErrors;
  };

  const handleChange = (id) => (e) => {
    setFormData((prev) => ({ ...prev, [id]: e.target.value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
  };

  return (
    <div
      onClick={(e) => {
        console.log(e.target, e.currentTarget);
        e.target === e.currentTarget && setShowForm(false);
      }}
      className={`fixed flex min-h-screen w-full items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 ${showForm ? "top-0 left-0 scale-100 opacity-100 blur-none" : "-top-full left-0 scale-80 opacity-0 blur-2xl"}`}
    >
      <form
        onSubmit={handleSubmit}
        className={`rounded-lg border border-zinc-700 bg-zinc-800`}
      >
        <div className="flex items-center justify-between rounded-t-lg bg-[#37373E] px-6 py-5">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
            Add Job
          </h3>
          <X
            className="cursor-pointer text-zinc-400"
            size={24}
            strokeWidth={1}
            onClick={() => setShowForm(false)}
          />
        </div>

        <div className="grid grid-cols-2 items-start gap-x-6 gap-y-6 p-6">
          {JOB_FORM_FIELDS.map((field) => (
            <InputField
              key={field.id}
              field={field}
              value={formData[field.id]}
              onChange={handleChange(field.id)}
              error={errors[field.id]}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-6 px-6 pb-6">
          <button
            type="submit"
            className="cursor-pointer rounded-sm bg-teal-600 py-3 text-base font-medium text-teal-50 transition-colors duration-200 hover:bg-teal-700"
          >
            Add Job
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="cursor-pointer rounded-sm bg-teal-600/10 py-3 text-base font-medium text-teal-500 transition-colors duration-200 hover:bg-teal-500/5"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
