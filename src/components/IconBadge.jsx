import { getIconGradient } from '../data/iconStyles';

const sizes = {
  sm: 'h-9 w-9 rounded-xl',
  md: 'h-12 w-12 rounded-2xl',
  lg: 'h-14 w-14 rounded-2xl',
};

export default function IconBadge({ tone, size = 'md', className = '', children }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center bg-gradient-to-tr text-white shadow-md ${sizes[size]} ${getIconGradient(tone)} ${className}`}>
      {children}
    </span>
  );
}
