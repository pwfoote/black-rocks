import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
      render();
    })
  
    it('matches snapshot DOM node structure', () => {
      const { asFragment } = render();
  
      expect(asFragment()).toMatchSnapshot();
    });
  })