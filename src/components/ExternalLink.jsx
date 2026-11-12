import React from 'react';

/** A link that opens in a new tab. */
export default function ExternalLink({ children, ...props }) {
  return (
    <a target='_blank' rel='noopener noreferrer' {...props}>
      {children}
    </a>
  );
}
