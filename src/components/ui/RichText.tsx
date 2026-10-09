import type { Rich } from '../../types';

/** Renders text where some parts are links. */
export function RichText({ parts }: { parts: Rich }) {
  return (
    <>
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          <span key={i}>{part}</span>
        ) : (
          <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">
            {part.text}
          </a>
        ),
      )}
    </>
  );
}
