import type { HobbyIcon } from '../../types';

const stroke = { stroke: 'var(--ink)', strokeWidth: 2.5, strokeLinejoin: 'round' as const };

const icons: Record<HobbyIcon, JSX.Element> = {
  coffee: (
    <>
      <path d="M14 26h30v14a12 12 0 0 1-12 12h-6a12 12 0 0 1-12-12z" fill="var(--berry)" {...stroke} />
      <path d="M44 30h4a6 6 0 0 1 0 12h-5" fill="none" {...stroke} />
      <path d="M22 10c-3 4 3 6 0 10M30 8c-3 4 3 6 0 10M38 10c-3 4 3 6 0 10" fill="none" stroke="var(--muted)" strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  bag: (
    <>
      <path d="M12 22h40l-3 32H15z" fill="var(--sun)" {...stroke} />
      <path d="M24 26v-8a8 8 0 0 1 16 0v8" fill="none" {...stroke} strokeLinecap="round" />
      <circle cx="32" cy="38" r="4" fill="var(--berry)" />
    </>
  ),
  steps: (
    <>
      <g fill="var(--sea)" stroke="var(--ink)" strokeWidth="2">
        <ellipse cx="22" cy="44" rx="6" ry="9" />
        <ellipse cx="42" cy="22" rx="6" ry="9" />
      </g>
      <g fill="var(--ink)">
        <circle cx="17" cy="32" r="2" /><circle cx="22" cy="30.5" r="2" /><circle cx="27" cy="32" r="2" />
        <circle cx="37" cy="10" r="2" /><circle cx="42" cy="8.5" r="2" /><circle cx="47" cy="10" r="2" />
      </g>
    </>
  ),
  waves: (
    <>
      <circle cx="44" cy="20" r="9" fill="var(--sun)" stroke="var(--ink)" strokeWidth="2.2" />
      <path d="M4 40c6-6 12-6 18 0s12 6 18 0 12-6 18 0" fill="none" stroke="var(--sea)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M4 52c6-6 12-6 18 0s12 6 18 0 12-6 18 0" fill="none" stroke="var(--sea)" strokeWidth="3.5" strokeLinecap="round" />
    </>
  ),
  cat: (
    <>
      <path d="M14 30l-2-18 12 10M50 30l2-18-12 10" fill="var(--berry-soft)" stroke="var(--ink)" strokeWidth="2.4" strokeLinejoin="round" />
      <ellipse cx="32" cy="36" rx="20" ry="18" fill="var(--card)" {...stroke} />
      <circle cx="25" cy="34" r="2.6" fill="var(--ink)" />
      <circle cx="39" cy="34" r="2.6" fill="var(--ink)" />
      <path d="M30 40h4l-2 2.5z" fill="var(--berry)" />
      <path d="M32 42.5c0 3-4 3-5 1M32 42.5c0 3 4 3 5 1M10 38h9M10 43l9-2M54 38h-9M54 43l-9-2" fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
};

export function HobbyIconSvg({ name }: { name: HobbyIcon }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}
