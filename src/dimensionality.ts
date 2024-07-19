import { conversions, Dimension, DIMENSIONS } from "./conversions";

export type Dimensionality = {
    [key in Dimension]?: number;
}

export const dimensionalAliases: Record<string, Dimensionality> = {
  speed: {distance: 1, time: -1},
  velocity: {distance: 1, time: -1},
  volume: {distance: 3},
  area: {distance: 2},
  density: {mass: 1, distance: -3},
  force: {mass: 1, distance: 1, time: -2},
  acceleration: {distance: 1, time: -2},
  pressure: {force: 1, distance: -2},
  work: {force: 1, distance: 1},
  energy: {force: 1, distance: 1},
  power: {work: 1, time: -1},
}

export const getDimensionality = (unit: string): Dimensionality => {
  const matchingConversion = conversions.find(c => {
    return c.units.includes(unit);
  });
  
  if (matchingConversion){
    return {[matchingConversion.dimension]: 1};
  } else if (dimensionalAliases[unit]){
    return dimensionalAliases[unit];
  }

  const perRegex = /(.+) per (.+)/;
  const perMatch = unit.match(perRegex);
  if (perMatch){
    const [_, numerator, denominator] = perMatch;
    const numeratorDimensionality = getDimensionality(numerator);
    const denominatorDimensionality = getDimensionality(denominator);
    const result: Dimensionality = {};
    for (const dimension of DIMENSIONS){
      if (numeratorDimensionality[dimension] || denominatorDimensionality[dimension]){
        result[dimension] = (numeratorDimensionality[dimension] || 0) - (denominatorDimensionality[dimension] || 0);
      }
    }
    return result;
  }

  // test for fractions
  const fractionRegex = /(.+)\/(.+)/;
  const fractionMatch = unit.match(fractionRegex);
  if (fractionMatch){
    const [_, numerator, denominator] = fractionMatch;
    const numeratorDimensionality = getDimensionality(numerator);
    const denominatorDimensionality = getDimensionality(denominator);
    const result: Dimensionality = {};
    for (const dimension of DIMENSIONS){
      result[dimension] = (numeratorDimensionality[dimension] || 0) - (denominatorDimensionality[dimension] || 0);
    }
    return result;
  }

  return undefined;
}