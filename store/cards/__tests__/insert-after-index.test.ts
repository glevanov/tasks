import { expect } from 'chai';

import { insertAfterIndex } from '../helpers';

describe('insertAfterIndex', () => {
	it('inserts item after specified index', () => {
		expect(insertAfterIndex([1, 2, 3], 0, 10)).to.eql([1, 10, 2, 3]);
		expect(insertAfterIndex([1, 2, 3], 1, 10)).to.eql([1, 2, 10, 3]);
		expect(insertAfterIndex([1, 2, 3], 2, 10)).to.eql([1, 2, 3, 10]);
		expect(insertAfterIndex(['apple', 'orange', 'milk', 'cheese'], 1, 'coffee')).to.eql(['apple', 'orange', 'coffee', 'milk', 'cheese']);
	});
});
