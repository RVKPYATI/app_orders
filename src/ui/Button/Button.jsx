export function Button({ title = "", style = "", children }) {
  return (
    <button className={`btn ${style}`}>
      {title}
      {children}
    </button>
  );
}
