import {render,screen,cleanup} from '@testing-library/react'
import Login from '../Login'
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders Login without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>, 
    div);
    ReactDom.unmountComponentAtNode(div);

  });