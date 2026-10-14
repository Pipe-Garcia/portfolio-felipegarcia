export function WorkApproach({ content }) {
  return (
    <section id="approach" className="section approach-section">
      <div className="shell">
        <div className="section-heading">
          <p className="section-eyebrow">{content.label}</p>
          <h2>{content.title}</h2>
        </div>
        <ol className="build-steps">
          {content.steps.map(([title, description], index) => (
            <li key={title}>
              <span className="step-number" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="approach-closing">{content.closing}</p>
      </div>
    </section>
  );
}
