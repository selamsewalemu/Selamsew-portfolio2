/**
 * Reusable Button primitive.
 * Props: variant ('primary'|'secondary'|'outline'|'ghost'), size ('sm'|'md'|'lg'),
 *        children, className, ...rest
 */
export function Button({ variant = 'primary', size = 'md', children, className = '', ...rest }) {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';

  const variantStyles = {
    primary: { background: 'var(--accent-gradient)', color: '#fff' },
    secondary: {},
    outline: {},
    ghost: {},
  };

  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  }[variant] || 'btn-primary';

  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${className}`.trim()}
      style={variant === 'primary' ? variantStyles.primary : undefined}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
