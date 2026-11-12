import React, { useState } from 'react';
import ExternalLink from './ExternalLink';
import { IconGitHub, IconLinkedIn, IconMoon, IconSun } from './Icons';
import { LINKS, PROFILE } from '../data/profile';
import { useTheme } from '../hooks';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const SOCIAL = [
  { href: LINKS.linkedin, label: 'LinkedIn', Icon: IconLinkedIn },
  { href: LINKS.github, label: 'GitHub', Icon: IconGitHub },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [, toggleTheme] = useTheme();

  // Scroll to the top without putting a hash in the URL, so a refresh also opens at the top.
  const toTop = (e) => {
    e.preventDefault();
    setOpen(false);
    history.replaceState(null, '', location.pathname + location.search);
    window.scrollTo({ top: 0 });
  };

  return (
    <nav className='nav'>
      <a href='/' className='nav-brand' onClick={toTop}>
        {PROFILE.name}
      </a>
      <div className={`nav-links${open ? ' open' : ''}`} id='navLinks'>
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>
            {s.label}
          </a>
        ))}
      </div>
      <div className='nav-actions'>
        {SOCIAL.map(({ href, label, Icon }) => (
          <ExternalLink key={label} href={href} className='icon-btn' aria-label={label}>
            <Icon />
          </ExternalLink>
        ))}
        <button className='icon-btn theme-toggle' aria-label='Toggle colour theme' onClick={toggleTheme}>
          <IconMoon className='icon-moon' />
          <IconSun className='icon-sun' />
        </button>
        <button className='nav-hamburger' aria-label='Toggle navigation' aria-expanded={open} aria-controls='navLinks' onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
