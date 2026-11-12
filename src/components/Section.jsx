import React from 'react';

/** A full-width page section: an optional small eyebrow above the heading, then an optional intro line. */
export default function Section({ id, className = '', eyebrow, title, intro, children }) {
  return (
    <section className={`section ${className}`.trim()} id={id}>
      <div className='container'>
        {eyebrow && <p className='eyebrow'>{eyebrow}</p>}
        <h2 className='section-title'>{title}</h2>
        {intro && <p className='section-intro'>{intro}</p>}
        {children}
      </div>
    </section>
  );
}
