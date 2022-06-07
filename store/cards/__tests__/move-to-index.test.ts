import { expect } from 'chai';

import { moveToAfterIndex } from '../helpers';

const arr = [
	{ id: '1' },
	{ id: '2' },
	{ id: '3' },
];

describe('insertAfterIndex', () => {
	it('inserts item after specified index', () => {
		expect(moveToAfterIndex(arr, 2, { id: '1' })).to.eql([
			{ id: '2' },
			{ id: '3' },
			{ id: '1' },
		]);
		expect(moveToAfterIndex(arr, 2, { id: '2' })).to.eql([
			{ id: '1' },
			{ id: '3' },
			{ id: '2' },
		]);
		expect(moveToAfterIndex(arr, 0, { id: '3' })).to.eql([
			{ id: '1' },
			{ id: '3' },
			{ id: '2' },
		]);
	});
});
