import React from 'react';
import Section from './Section';
import { ABOUT, EDUCATION, HIGHLIGHTS } from '../data/profile';

export default function About() {
  return (
    <Section className='section-alt' id='about' eyebrow='About' title='Building products end to end'>
      <div className='about-grid'>
        <div className='about-text'>
          {ABOUT.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className='card about-card'>
          <h3 className='card-label'>At a glance</h3>
          <dl className='highlights'>
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className='highlight'>
                <dt>{h.value}</dt>
                <dd>{h.label}</dd>
              </div>
            ))}
          </dl>
          <h3 className='card-label'>Education</h3>
          <p className='edu-degree'>{EDUCATION.degree}</p>
          <p className='edu-school'>
            {EDUCATION.school} · {EDUCATION.period}
          </p>
        </aside>
      </div>
    </Section>
  );
}
