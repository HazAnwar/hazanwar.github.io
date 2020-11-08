import React, { useRef } from 'react';
import profile from './profile-pic.jpg';
import data from './data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithubAlt,
  faLinkedinIn,
  faRedditAlien,
  faStackOverflow,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header>
        <div className="m-auto p-header width-fit">
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
          <h5>Find me online</h5>
          <div className="display-flex space-around">
            {data.header.links.github ? (
              <a
                href={data.header.links.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithubAlt} size="3x" />
              </a>
            ) : null}
            {data.header.links.linkedin ? (
              <a href={data.header.links.linkedin}>
                <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
              </a>
            ) : null}
            {data.header.links.stackoverflow ? (
              <a
                href={data.header.links.stackoverflow}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faStackOverflow} size="3x" />
              </a>
            ) : null}
            {data.header.links.reddit ? (
              <a
                href={data.header.links.reddit}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faRedditAlien} size="3x" />
              </a>
            ) : null}
            {data.header.links.twitter ? (
              <a
                href={data.header.links.twitter}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} size="3x" />
              </a>
            ) : null}
            {data.header.links.email ? (
              <a
                href={data.header.links.email}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </a>
            ) : null}
          </div>
        </div>
      </header>
      {/* <main>Experience</main> */}
      <footer ref={useRef('footer')}>
        <a>{data.footer.message}</a>
      </footer>
    </div>
  );
}

export default App;
