const TextArea = ({ label, value, onChange, name, placeholder, className = '' }) => {
    return (
      <div className={`mb-1 ${className}`}>
        <label className="block text-white font-poppins text-sm font-medium mb-2">{label}</label>
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-white bg-transparent leading-none focus:outline-none focus:shadow-outline font-poppins resize-none h-32"
        />
      </div>
    );
  };
  
  export default TextArea;