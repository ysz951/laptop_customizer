import React from 'react';
import ReactDOM from 'react-dom';
import SummaryTotal from './SummaryTotal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SummaryTotal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
