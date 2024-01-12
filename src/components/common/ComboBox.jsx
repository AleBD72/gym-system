const ComboBox = ({
  label,
  options,
  selectedOption,
  onSelect,
  className = "",
  name,
  placeholder,
  setFieldValue,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-white font-poppins text-sm font-medium mb-2">
        {label}
      </label>
      <select
        value={selectedOption}
        onChange={(e) => {
          onSelect(e.target.value);
          setFieldValue(name, e.target.value); // Agrega esta línea para mantener sincronizados los estados
        }}
        name={name}
        placeholder={placeholder}
        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-secondaryCol bg-transparent leading-tight focus:outline-none focus:shadow-outline font-poppins"
      >
        {placeholder && (
          <option disabled value="">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
