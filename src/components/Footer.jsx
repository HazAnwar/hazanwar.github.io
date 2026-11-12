import React from 'react';
import ExternalLink from './ExternalLink';
import { LINKS, PROFILE } from '../data/profile';
import { PROJECTS } from '../data/projects';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <p>
          &copy; {new Date().getFullYear()} {PROFILE.name}
        </p>
        <nav aria-label='Footer links'>
          <ExternalLink href={LINKS.github}>GitHub</ExternalLink>
          <ExternalLink href={LINKS.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={LINKS.kofi}>Support</ExternalLink>
          <a href={LINKS.haztech}>HazTech Services</a>
          {PROJECTS.map((p) => (
            <a key={p.name} href={p.url}>
              {p.name}
            </a>
          ))}
          <a href={`mailto:${PROFILE.email}`}>Contact</a>
        </nav>
      </div>
    </footer>
  );
}
