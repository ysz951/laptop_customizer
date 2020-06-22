import React from 'react';
import ReactDOM from 'react-dom';
import MainList from './MainList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
