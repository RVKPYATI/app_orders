export function Button({ title = "", style = "", children, onClick }) {
  return (
    <button
      className={`btn ${style}`}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
}
