import { h, render, Component } from 'preact';
import 'whatwg-fetch';

import App from './components/App.js';

const target = document.getElementById('feed');

render((
    <App />
), document.body , target );