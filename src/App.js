import React from 'react';
import profile from './profile-pic.jpg';
import data from './data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="display-flex">
        <div className="m-auto p-2 width-fit">
          <div className="display-flex width-fit m-hor">
            <img
              src={profile}
              className="profile-picture p-2"
              alt="Profile Picture"
            />
            <a className="m-vert p-2">
              <h1>{data.name}</h1>
              <h3>{data.title}</h3>
            </a>
          </div>
          <hr />
          {data.header.intro.map((item, _) => (
            <p className="p-1" key={_}>
              {item}
            </p>
          ))}
          <hr />
          <div className="display-flex space-around">
            {data.header.links.github ? (
              <a href={data.header.links.github}>
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
            ) : null}
            {data.header.links.linkedin ? (
              <a href={data.header.links.linkedin}>
                <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
              </a>
            ) : null}
            {data.header.links.cv ? (
              <a href={data.header.links.cv}>
                <FontAwesomeIcon icon={faFile} size="3x" />
              </a>
            ) : null}
            {data.header.links.email ? (
              <a href={data.header.links.email}>
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </a>
            ) : null}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
