// test/pages/index.test.js

import React from 'react';
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from '../test-utils';
//import '@testing-library/jest-dom';
import Home from '../../pages/index';

describe('HomePage', () => {
  it('should render', () => {
    render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
