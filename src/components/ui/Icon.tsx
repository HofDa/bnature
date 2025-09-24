import { type LucideIcon } from 'lucide-react';

export default function Icon({
  as: As,
  size = 20,
  className = '',
  strokeWidth = 1.8,
}: {
  as: LucideIcon;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <As
      aria-hidden="true"
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}
