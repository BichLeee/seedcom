function Section({ title, children }) {
  return (
    <>
      <div className="section-title">{title}</div>
      <div className="section-content">{children}</div>
    </>
  );
}

export default Section;
