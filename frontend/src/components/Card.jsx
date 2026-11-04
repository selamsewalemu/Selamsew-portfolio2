/**
 * Reusable Card primitive.
 * Props: children, className, hover (bool)
 */
export function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`glass-card rounded-2xl ${hover ? 'transition-all duration-300 hover:border-indigo-500/30' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Card;
