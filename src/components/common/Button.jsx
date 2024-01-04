/* código de Botón reutilizable */

const Button = ({ onClick, label, type = 'button', styles = '', disabled = false}) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled}
      className={`px-3 py-1 bg-white font-poppins font-medium text-[18px] text-principalCol text-opacity-75 tracking-widest outline-none ${styles} rounded-[10px]`}
    >
      {label}
    </button>
  )
}

export default Button