// TESTING THE MODEL LAYER (DATABASE)

// bringing in the DB is considered
// if you do not provide the .js, node will scan through to look for the extension
// no big difference
const db = require('../data/dbConfig.js');

const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
  describe('insert method', () => {
    // start with cleanup on local scope
    // this will clear the DB after each test
    // this ensures each test
    afterEach(async () => {
      await db('hobbits').truncate();
    });

    it('should insert the provided hobbit', async () => {
      // this will return hobbit from the db, without truncate it continuously populates on test
      const hobbit = await Hobbits.insert({ name: 'Sam' });

      expect(hobbit.name).toBe('Sam');
    });

    it('should insert the provided hobbits', async () => {
      let hobbit = await Hobbits.insert({ name: 'Sam' });
      expect(hobbit.name).toBe('Sam');

      hobbit = await Hobbits.insert({ name: 'Gaffer' });
      expect(hobbit.name).toBe('Gaffer');
    });
  });

  afterEach(async () => {
    await db('hobbits').truncate();
  });

  it('should insert the provides hobbits into DB', async () => {
    await Hobbits.insert({ name: 'Sam' });
    await Hobbits.insert({ name: 'Gaffer' });

    const hobbits = await db('hobbits');
    // this will fail without cleanup. DB will add above test
    expect(hobbits).toHaveLength(2);
  });

  it('should delete selected hobbit', async () => {
    // insert one
    // check that it's there
    // delete it
    // check that it's not there
  });
});
