/**
 * Reusable SectionHeader primitive.
 * Props: badge, title, subtitle, centered (bool), showUnderline (bool, default true)
 */
export function SectionHeader({ badge, title, subtitle, centered = false, showUnderline = true }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`.trim()}>
      {badge && <span className="section-badge">{badge}</span>}
      {title && (
        <>
          <h2 className="section-title gradient-text">{title}</h2>
          {showUnderline && <span className="section-title-underline" aria-hidden="true" />}
        </>
      )}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
