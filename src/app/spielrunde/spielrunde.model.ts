/*
export interface SpielRunde {
  datum: string;
  umschreibung: string;
  typ: string;
  spiele: [{
    datum: string,
    gruppe: string,
    stadion: string,
    ort: string,
    team1: string,
    team2: string,
    scoreTeam1: number,
    scoreTeam2: number
  }];
} */

export interface SpielRunde {
  datum: string;
  umschreibung: string;
  typ: string;
  spiele: [any];
}
