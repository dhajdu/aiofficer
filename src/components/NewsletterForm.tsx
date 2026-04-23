'use client';

import { useState } from 'react';

type Props = {
  source?: string;
  placeholder?: string;
  buttonLabel?: string;
};

export default function NewsletterForm({
  source = 'caiocoach_newsletter',
  placeholder = 'you@company.com',
  buttonLabel = 'Subscribe →',
}: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ok' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong');
      }
      setStatus('ok');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  if (status === 'ok') {
    return (
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--fg)',
          padding: '14px 0',
        }}
      >
        ✓ Subscribed. Check your inbox.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}
    >
      <label htmlFor={`nl-email-${source}`} style={{ position: 'absolute', left: -9999 }}>
        Email address
      </label>
      <input
        id={`nl-email-${source}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        style={{
          background: 'transparent',
          border: '1px solid var(--border-strong)',
          color: 'var(--fg)',
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          padding: '14px 16px',
          minWidth: 240,
          borderRadius: 0,
          outline: 'none',
        }}
      />
      <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : buttonLabel}
      </button>
      {status === 'error' && (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#ff8aa5',
            width: '100%',
          }}
        >
          {errorMsg}
        </span>
      )}
    </form>
  );
}
