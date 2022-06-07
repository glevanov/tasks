import { expect } from 'chai';

import { deleteByIndex } from '../helpers';

describe('deleteByIndex', () => {
	it('deletes item at specified index', () => {
		expect(deleteByIndex([1, 2, 3], 0)).to.eql([2, 3]);
		expect(deleteByIndex([1, 2, 3], 1)).to.eql([1, 3]);
		expect(deleteByIndex([1, 2, 3], 2)).to.eql([1, 2]);
		expect(deleteByIndex(['apple', 'orange', 'milk', 'cheese'], 2)).to.eql(['apple', 'orange', 'cheese']);
	});
});
