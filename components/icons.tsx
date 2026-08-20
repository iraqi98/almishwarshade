export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 0 1 6.9 12.6l-.2.3.6 3-3.1-.8-.3.2A8.2 8.2 0 1 1 12 3.8Zm-3.4 4c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.3s1 2.6 1.2 2.8c.1.2 2 3 4.8 4.2 2.4 1 2.9.8 3.4.7.5 0 1.6-.6 1.8-1.2.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3l-2-1c-.3-.1-.5-.1-.6.1l-.9 1c-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.1-.6l-1-2.2c-.1-.3-.3-.3-.5-.3H8.6Z" />
    </svg>
  );
}
