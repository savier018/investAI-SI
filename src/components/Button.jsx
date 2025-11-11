const baseStyles =
  "inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

const Button = ({ children, className = "", ...props }) => {
  const composedClassName = `${baseStyles} ${className}`.trim();

  return (
    <button className={composedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
