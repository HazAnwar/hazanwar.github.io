import React from 'react';

/** A row of pill tags. */
export default function SkillTags({ items, small = false }) {
  return (
    <ul className={`tags${small ? ' tags-small' : ''}`}>
      {items.map((item) => (
        <li key={item} className='tag'>
          {item}
        </li>
      ))}
    </ul>
  );
}
