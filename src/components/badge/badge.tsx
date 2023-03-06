import './badge.css';

interface BadgeProps {
  backgroundcolor: 'blue';
  count: number;
}

export function Badge({ backgroundcolor, count }: BadgeProps) {
  return (
    <div className={`badge ${backgroundcolor}`}>
      <p>{count}</p>
    </div>
  );
}
