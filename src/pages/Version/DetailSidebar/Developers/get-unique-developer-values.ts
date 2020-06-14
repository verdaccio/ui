import { Developer } from '../../../types/packageMeta';

function getUniqueDeveloperValues(developers?: Array<Developer>): undefined | Array<Developer> {
  if (!developers) return;
  return developers.reduce(
    (accumulator: Array<Developer>, current: Developer) =>
      accumulator.some(developer => developer.email === current.email) ? accumulator : [...accumulator, current],
    []
  );
}

export default getUniqueDeveloperValues;
