export function Button({
  title = "",
  style = "",
  children,
  onClick,
  disabled,
}) {
  return (
    <button
      className={`${style}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
      {children}
    </button>
  );
}
