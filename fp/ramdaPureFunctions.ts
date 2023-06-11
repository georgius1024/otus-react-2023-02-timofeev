import {
  compose,
  sortBy,
  sortWith,
  descend,
  prop,
  map,
  toPairs,
  join,
  prepend, 
  split,
  fromPairs
  //...
} from "ramda";

// Задание 1
export type Team = { name: string; score: number };

const firstName = compose(prop('name'), prop(0))
const sortByScore = sortWith([descend(prop('score'))])

export const getTopName = compose(firstName, sortByScore);

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;
export const createQs = compose(join(''), prepend('?'), join('&'), map(join('=')), toPairs);

// // Задание 3
export const parseQs = compose(fromPairs, map(split('=')), split('&'), prop(1), split('?'))

