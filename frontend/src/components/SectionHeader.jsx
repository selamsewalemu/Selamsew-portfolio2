/**
 * Reusable SectionHeader primitive.
 * Props: badge, title, subtitle, centered (bool)
 */
export function SectionHeader({ badge, title, subtitle, centered = false }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`.trim()}>
      {badge && <span className="section-badge">{badge}</span>}
      {title && <h2 className="section-title gradient-text">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
