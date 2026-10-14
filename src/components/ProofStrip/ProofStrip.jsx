import { Icon } from '../Icon/Icon';

const PROOF_ICONS = ['clients', 'cloud', 'layers'];

export function ProofStrip({ items }) {
  return (
    <div className="proof-strip">
      <dl className="shell proof-grid">
        {items.map((item, index) => (
          <div key={item.title}>
            <dt>
              <Icon name={PROOF_ICONS[index]} />
              {item.title}
            </dt>
            <dd>{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
