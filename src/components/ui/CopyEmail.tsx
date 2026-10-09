import { useState } from 'react';

/** Shows the email as selectable text with a copy button. */
export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState('Copy');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setLabel('Copied!');
    } catch {
      setLabel('Select & copy');
    }
    window.setTimeout(() => setLabel('Copy'), 1600);
  };

  return (
    <div className="email-row">
      <span>Say hi:</span>
      <code>{email}</code>
      <button className="copy-btn" type="button" onClick={copy}>
        {label}
      </button>
    </div>
  );
}
