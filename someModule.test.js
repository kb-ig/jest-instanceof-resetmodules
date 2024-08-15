const SomeClass = require('./SomeClass');

test('resetModules, instanceof', () => {
    const before = require('./someModule');
	const thing = new SomeClass();
	expect(before.isSomeClass(thing)).toBe(true);

	jest.resetModules();

	const after = require('./someModule');
	expect(after.isSomeClass(thing)).toBe(true);
})