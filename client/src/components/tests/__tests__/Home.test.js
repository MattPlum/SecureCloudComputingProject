import {render,screen,cleanup} from '@testing-library/react'
import Home from '../../Home'
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders Home without crashing', () => {
    const div = document.createElement('div');
    
    ReactDom.render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>, 
    div);
  
    ReactDom.unmountComponentAtNode(div);
  });