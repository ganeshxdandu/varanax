const INPUT_STYLES =
  "w-full rounded-sm border border-zinc-700 bg-zinc-900 p-1.5 text-sm text-zinc-300 transition-all duration-200 focus:ring-1 focus:ring-teal-500 focus:outline-none";
const LABEL_STYLES = "mb-2 block text-sm text-zinc-400";

const InputField = ({ field, value, onChange }) => {
  const { id, label, type, placeholder, options } = field;

  return (
    <div className="w-62.5">
      <label htmlFor={id} className={LABEL_STYLES}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          className={INPUT_STYLES + " h-28 resize-none"}
          value={value}
          onChange={onChange}
        />
      ) : type === "select" ? (
        <select
          id={id}
          className={INPUT_STYLES}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>Select an option</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={INPUT_STYLES}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputField;