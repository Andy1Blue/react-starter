import * as React from 'react';
import './App.scss';

export interface Props {
  appName: string;
}

export const App = (props: Props) => (
  <div className="app">
    <h1 className="app__title">Hello &#128075;</h1>
    <h2 className="app__subtitle">It's your {props.appName}!</h2>
    <p className="app__version app__version--red">App version: {process.env.APP_VER}</p>
    <p>
      <a
        className="github-button"
        href="https://github.com/Andy1Blue/react-star"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star Andy1Blue/react-star on GitHub"
      >
        Star
      </a>
    </p>
  </div>
);
