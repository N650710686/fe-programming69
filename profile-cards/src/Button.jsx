function Button({ children, variant = 'primary', onClick }) {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition duration-200";
  
  const variants = {
    primary: "bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
    ghost: "text-slate-600 bg-slate-200 hover:bg-slate-300"
  };

  return (
    <button className={`${baseStyle} ${variants[variant] || variants.primary}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;