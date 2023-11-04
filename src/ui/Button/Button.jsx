export function Button({
  title = "",
  style = "",
  children,
  onClick,
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      className={`btn ${style}`}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
}
