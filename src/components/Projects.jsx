import React from 'react';
import ExternalLink from './ExternalLink';
import Section from './Section';
import SkillTags from './SkillTags';
import { LINKS } from '../data/profile';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  return (
    <Section
      id='projects'
      eyebrow='Projects'
      title="Some of the things I've built"
      intro={
        <>
          Side projects I've built outside my day job and released through <ExternalLink href={LINKS.haztech}>HazTech Services</ExternalLink>. I design, build and ship each one end to end:
          architecture, code, CI/CD, store releases and support.
        </>
      }
    >
      <div className='projects-grid'>
        {PROJECTS.map((p) => (
          <article key={p.name} className='card project'>
            <div className='project-head'>
              <img src={p.icon} alt={`${p.name} icon`} className='project-icon' loading='lazy' />
              <div>
                <h3>{p.name}</h3>
                <p className='project-kind'>{p.kind}</p>
              </div>
            </div>
            <p className='project-desc'>{p.desc}</p>
            <ul className='bullets'>
              {p.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <SkillTags items={p.stack} small />
            <ExternalLink href={p.url} className='btn btn-outline btn-small'>
              View {p.name} ↗
            </ExternalLink>
          </article>
        ))}
      </div>
    </Section>
  );
}
