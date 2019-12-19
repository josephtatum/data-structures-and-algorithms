const { validator } = require('./multi-bracket-validation');

describe('Valdiator', () => {

  it('sbould be able to return true if the brackets are all closed', () => {
    expect(validator('[{}]')).toEqual(true);
  });

  it('sbould be able to return true if the brackets are all closed', () => {
    expect(validator('[{]')).toEqual(false);
  });
});
