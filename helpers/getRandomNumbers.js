// Set of unique random numbers
export const getRandomNumbers = (amountOfRandomNumbers, maxNumber) => {
  const randomNumbers = new Set();

  while (randomNumbers.size !== amountOfRandomNumbers)
    randomNumbers.add(Math.floor(Math.random() * maxNumber));

  return randomNumbers;
};
