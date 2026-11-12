import React from 'react';
import Section from './Section';
import SkillTags from './SkillTags';
import { STACK } from '../data/stack';

export default function Stack() {
  return (
    <Section
      id='stack'
      eyebrow='Tech stack'
      title='What I build with'
      intro='Web, mobile and DevOps are where I spend most of my time, and I automate as much as I can along the way. I also build games, and the backend and cloud services behind my apps.'
    >
      <div className='stack-grid'>
        {STACK.map((group) => (
          <article key={group.title} className='card stack-card'>
            <h3>{group.title}</h3>
            <p>{group.desc}</p>
            <SkillTags items={group.items} small />
          </article>
        ))}
      </div>
    </Section>
  );
}
