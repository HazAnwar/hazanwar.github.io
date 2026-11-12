import React from 'react';
import ExternalLink from './ExternalLink';
import { LINKS, PROFILE } from '../data/profile';

export default function Contact() {
  return (
    <section className='section section-alt' id='contact'>
      <div className='container'>
        <div className='card contact-card'>
          <p className='eyebrow'>Contact</p>
          <h2 className='section-title'>Let's talk</h2>
          <p className='section-intro'>I'm always happy to hear about engineering roles, contract work and interesting products. The quickest way to reach me is by email or LinkedIn.</p>
          <div className='hero-actions'>
            <a href={`mailto:${PROFILE.email}`} className='btn btn-primary'>
              Email me
            </a>
            <ExternalLink href={LINKS.linkedin} className='btn btn-outline'>
              Connect on LinkedIn
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
