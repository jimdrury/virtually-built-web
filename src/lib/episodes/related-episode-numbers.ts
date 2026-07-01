export const getRelatedEpisodeNumbers = (
  episodeNumber: number,
  maxRelated = 4,
): number[] => {
  const lower = [episodeNumber - 2, episodeNumber - 1].filter(
    (number) => number >= 1,
  );
  const higher = [episodeNumber + 1, episodeNumber + 2];
  const numbers = [...lower, ...higher].filter(
    (number) => number !== episodeNumber,
  );

  if (numbers.length >= maxRelated) {
    return numbers.slice(0, maxRelated);
  }

  const needed = maxRelated - numbers.length;
  const padFromLower: number[] = [];
  let cursor = episodeNumber - 3;

  while (padFromLower.length < needed && cursor >= 1) {
    if (!numbers.includes(cursor) && cursor !== episodeNumber) {
      padFromLower.unshift(cursor);
    }

    cursor -= 1;
  }

  const combined = [...padFromLower, ...numbers];

  if (combined.length >= maxRelated) {
    return combined.slice(-maxRelated);
  }

  const stillNeeded = maxRelated - combined.length;
  const padFromHigher: number[] = [];
  cursor = episodeNumber + 3;

  while (padFromHigher.length < stillNeeded) {
    if (!combined.includes(cursor) && cursor !== episodeNumber) {
      padFromHigher.push(cursor);
    }

    cursor += 1;
  }

  return [...combined, ...padFromHigher].slice(0, maxRelated);
};
