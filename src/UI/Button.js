const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      type={`${type ? type : "button"}`}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
