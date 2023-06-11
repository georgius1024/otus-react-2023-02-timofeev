// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  return [...teams].sort((a, b) => b.score - a.score).at(0).name
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  return `?${Object.entries(qsObj).map(([key, value]) => `${key}=${value}`).join('&')}`
};

// Задание 3
export const parseQs = (qs: string): QsObj => {
  return qs.split('?').at(1).split('&').reduce((obj, pair) => {
    const [key, value] = pair.split('=')
    return {...obj, [key]: value}
  }, {})
};