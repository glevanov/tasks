import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { render, screen } from '@testing-library/react';

import { BaseButton } from './base-button';

describe('BaseButton', () => {
	it('should render correct tag', () => {
		render(<BaseButton>Text</BaseButton>);
		const element = screen.getByTestId('base-button');
		expect(element.tagName).to.equal('BUTTON');
	});
});
