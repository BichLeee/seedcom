function Section({ title, children }) {
  return (
    <>
      <b className="section-title">{title}</b>
      <div className="section-content">{children}</div>
    </>
  );
}

export default Section;
