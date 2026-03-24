const INPUT_STYLES =
  "w-full rounded-sm border bg-zinc-900 p-1.5 text-sm text-zinc-300 transition-all duration-200 focus:ring-1 focus:outline-none";
const LABEL_STYLES = "mb-2 block text-sm text-zinc-400";

const InputField = ({ field, value, onChange, error }) => {
  const { id, label, type, placeholder, options, required } = field;

  const inputStyles =
    INPUT_STYLES +
    (error
      ? " border-red-500 focus:ring-red-500"
      : " border-zinc-700 focus:ring-teal-500") +
    (type === "textarea" ? " h-28 resize-none" : "");

  return (
    <div className="w-62.5">
      <label htmlFor={id} className={LABEL_STYLES}>
        {label}
        {required && <span className="ml-1 text-red-400">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          className={inputStyles}
          value={value}
          onChange={onChange}
        />
      ) : type === "select" ? (
        <select
          id={id}
          className={inputStyles}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={inputStyles}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default InputField;
