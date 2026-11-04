/**
 * Reusable Badge/pill primitive.
 * Props: children, color ('indigo'|'cyan'|'emerald'|'purple'|'amber'), className
 */
const colorMap = {
  indigo: {
    background: 'rgba(99, 102, 241, 0.15)',
    color: '#6366f1',
    border: '1px solid rgba(99, 102, 241, 0.3)',
  },
  cyan: {
    background: 'rgba(6, 182, 212, 0.15)',
    color: '#06b6d4',
    border: '1px solid rgba(6, 182, 212, 0.3)',
  },
  emerald: {
    background: 'rgba(16, 185, 129, 0.15)',
    color: '#10b981',
    border: '1px solid rgba(16, 185, 129, 0.3)',
  },
  purple: {
    background: 'rgba(139, 92, 246, 0.15)',
    color: '#8b5cf6',
    border: '1px solid rgba(139, 92, 246, 0.3)',
  },
  amber: {
    background: 'rgba(245, 158, 11, 0.15)',
    color: '#f59e0b',
    border: '1px solid rgba(245, 158, 11, 0.3)',
  },
};

export function Badge({ children, color = 'indigo', className = '' }) {
  const styles = colorMap[color] || colorMap.indigo;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${className}`.trim()}
      style={{
        background: styles.background,
        color: styles.color,
        border: styles.border,
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
