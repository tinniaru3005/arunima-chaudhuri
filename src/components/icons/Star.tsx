export function Star({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="var(--sun)"
        stroke="var(--ink)"
        strokeWidth="1.4"
        strokeLinejoin="round"
        d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z"
      />
    </svg>
  );
}
