import { useState } from "react";
import { Scale, X } from "lucide-react";
import InputField from "./InputField";
import { JOB_FORM_FIELDS, INITIAL_FORM_STATE } from "../utils/formConfig";
import { useContext } from "react";
import { FormContext } from "../utils/formContext";

const JobForm = ({ onSubmit }) => {
  const { showForm, setShowForm } = useContext(FormContext);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (id) => (e) => {
    setFormData((prev) => ({ ...prev, [id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <div
      onClick={(e) => {
        e.target === e.currentTarget && setShowForm(false);
      }}
      className={`fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 ${showForm ? "scale-100 opacity-100 blur-none" : "scale-80 opacity-0 blur-2xl"}`}
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
