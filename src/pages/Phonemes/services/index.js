import * as matrix from './matrix'

export const matrixLength = (image) => matrix[image].length

export const randomPositionIndex = (positions, image) => {
  const number = Math.floor(Math.random() * matrixLength(image));
  if (positions.indexOf(number) !== -1) return randomPositionIndex(positions, image);
  return number
};

export const getLeftFromMatrix = (positions, image) => matrix[image][positions][1];
export const getTopFromMatrix = (positions, image) => matrix[image][positions][0];
