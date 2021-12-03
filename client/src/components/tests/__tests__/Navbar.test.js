import {render,screen,cleanup} from '@testing-library/react'
import Navbar from '../../google-drive/Navbar'
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders Navbar without crashing', () => {
  const div = document.createElement('div');
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>, 
  div);
  ReactDom.unmountComponentAtNode(div);
  });