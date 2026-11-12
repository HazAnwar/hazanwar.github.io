import React, { useEffect, useRef } from 'react';
import ExternalLink from './ExternalLink';
import { IconEmail, IconGitHub, IconLinkedIn, IconStackOverflow } from './Icons';
import { LINKS, PROFILE } from '../data/profile';

const SOCIAL = [
  { href: LINKS.github, label: 'GitHub', Icon: IconGitHub },
  { href: LINKS.linkedin, label: 'LinkedIn', Icon: IconLinkedIn },
  { href: LINKS.stackoverflow, label: 'Stack Overflow', Icon: IconStackOverflow },
];

/** Moves the hero's spotlight to follow the mouse. Skipped on touch screens and when reduced motion is on. */
function useSpotlight(ref) {
  useEffect(() => {
    const el = ref.current;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || !fine || calm) return;

    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
        el.classList.add('is-lit');
      });
    };
    const onLeave = () => el.classList.remove('is-lit');

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [ref]);
}

export default function Hero() {
  const ref = useRef(null);
  useSpotlight(ref);

  return (
    <header className='hero' id='top' ref={ref}>
      <div className='hero-bg' aria-hidden='true'>
        <span className='hero-aurora hero-aurora-1'></span>
        <span className='hero-aurora hero-aurora-2'></span>
        <span className='hero-aurora hero-aurora-3'></span>
        <span className='hero-grid'></span>
        <span className='hero-spotlight'></span>
      </div>

      <div className='hero-content'>
        <div className='hero-avatar-ring'>
          <img src={PROFILE.avatar} alt={PROFILE.name} className='hero-avatar' />
        </div>
        <h1>{PROFILE.name}</h1>
        <p className='hero-title'>{PROFILE.title}</p>
        <p className='hero-intro'>{PROFILE.intro}</p>
        <div className='hero-actions'>
          <a href='#projects' className='btn btn-primary'>
            See my work
          </a>
          <a href='#contact' className='btn btn-outline'>
            Get in touch
          </a>
        </div>
        <div className='social-links'>
          {SOCIAL.map(({ href, label, Icon }) => (
            <ExternalLink key={label} href={href} className='social-link' aria-label={label}>
              <Icon />
            </ExternalLink>
          ))}
          <a href={`mailto:${PROFILE.email}`} className='social-link' aria-label='Email'>
            <IconEmail />
          </a>
        </div>
      </div>
    </header>
  );
}
