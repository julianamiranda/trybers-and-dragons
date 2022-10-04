import Race from './Races';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private readonly LIFE_POINTS = 80;
  private static _instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instanceCounter += 1;
    this._maxLifePoints = this.LIFE_POINTS;
  }

  static createdRacesInstances(): number {
    return this._instanceCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;