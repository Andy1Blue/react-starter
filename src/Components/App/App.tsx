import * as React from 'react';
import './App.scss';

export interface Props {
  appName: string;
  appLang: string;
}

export const App = (props: Props) => (
  <div>
    <h1>Welcome to {props.appName}!</h1>
    <h2>We love {props.appLang}!</h2>
    <p className="app-version">App version: {process.env.APP_VER}</p>
  </div>
);
