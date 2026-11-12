import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/** Renders the whole page to HTML at build time, so crawlers and link previews get the content without JavaScript. */
export function render() {
  return renderToString(<App />);
}
