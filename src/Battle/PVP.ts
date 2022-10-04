import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    const x = true;
    while (x) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
      if (this._player1.lifePoints === -1 || this._player2.lifePoints === -1) {
        break;
      }
    }
    return this._player1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;

// eu tirei a ideia do if com break dentro do while depois de ler isso >>> https://www.cpp.edu/~elab/ECE114/Break%20Statement%20&%20Do%20While%20Loop.html