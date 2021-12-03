import {render,screen,cleanup} from '@testing-library/react'
import App from '../../App'
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders App without crashing', () => {
    const div = document.createElement('div');
    
    const result = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>, 
    div);
    ReactDom.unmountComponentAtNode(div);
  });