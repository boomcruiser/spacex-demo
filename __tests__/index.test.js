import React from 'react';
import 'isomorphic-fetch';
import { render } from '@testing-library/react';
import App from '../pages/index';

test('renders Page Heading', () => {
	const { getByText } = render(<App />);
	const heading = getByText('SpacEx Launch Programs');
	expect(heading).toBeInTheDocument();
});
test('renders sidebar', () => {
	const { container, debug } = render(<App />);
	const result = container.querySelector('aside');
	debug(container);
	expect(result).toBeInTheDocument();
});
test('renders footer', () => {
	const { getByText } = render(<App />);
	const footer = getByText('Created By: Abhineet Kaushal');
	expect(footer).toBeInTheDocument();
});
