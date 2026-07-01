export type TranscriptEntry = {
  start: number;
  speaker: string;
  text: string;
};

export const formatTimestamp = (seconds: number): string => {
  const total = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(total / 60);
  const remainingSeconds = total % 60;

  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
};

export const findActiveParagraphIndex = (
  transcript: TranscriptEntry[],
  currentTime: number,
): number => {
  if (transcript.length === 0) {
    return -1;
  }

  let activeIndex = 0;

  for (let index = 0; index < transcript.length; index += 1) {
    const entry = transcript[index];

    if (entry && entry.start <= currentTime) {
      activeIndex = index;
    } else {
      break;
    }
  }

  return activeIndex;
};
