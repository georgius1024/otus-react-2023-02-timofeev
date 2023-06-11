// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeamFirst = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  const { league } = originalTeam;
  const name = "New York Badgers";
  const roster = 25;
  return { name, league, roster };
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (
  originalArray: SomeArray
): SomeArray => {
  const [, , ...rest] = originalArray;
  return ["two", ...rest, 5];
};

// Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeamLast = (originalTeam: Team): Team => {
  const {    name, captain  } = originalTeam
  return {    name, captain: {...captain, age: 28}  }
}