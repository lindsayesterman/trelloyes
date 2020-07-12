import React from 'react';
import ReactDOM from 'react-dom';
import List from './list.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});