import React from 'react';
import ReactDOM from 'react-dom';
import SummaryOptionList from './SummaryOptionList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SummaryOptionList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
