import React from 'react';
import ReactDOM from 'react-dom';
import SummaryOption from './SummaryOption';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SummaryOption />, div);
  ReactDOM.unmountComponentAtNode(div);
});
