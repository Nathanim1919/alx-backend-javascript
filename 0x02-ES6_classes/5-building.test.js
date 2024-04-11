import Building from './5-building';

describe('Building', () => {
  let building;

  beforeEach(() => {
    building = new Building(1000);
  });

  it('should have a sqft property', () => {
    expect(building.sqft).toBe(1000);
  });

  it('should throw an error when calling evacuationWarningMessage', () => {
    expect(() => building.evacuationWarningMessage()).toThrowError(
      'Class extending Building must override evacuationWarningMessage'
    );
  });
});