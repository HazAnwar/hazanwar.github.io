import React from 'react';
import Section from './Section';
import SkillTags from './SkillTags';
import { EXPERIENCE } from '../data/experience';

export default function Experience() {
  return (
    <Section className='section-alt' id='experience' eyebrow='Experience' title="Where I've worked">
      <ol className='timeline'>
        {EXPERIENCE.map((job) => (
          <li key={`${job.company}-${job.role}`} className='timeline-item'>
            <div className='timeline-head'>
              <h3>
                {job.role} <span className='timeline-company'>· {job.company}</span>
              </h3>
              <p className='timeline-period'>{job.period}</p>
            </div>
            {job.summary && <p className='timeline-summary'>{job.summary}</p>}
            <ul className='bullets'>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {job.tags.length > 0 && <SkillTags items={job.tags} small />}
          </li>
        ))}
      </ol>
    </Section>
  );
}
