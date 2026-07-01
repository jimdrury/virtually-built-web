export const getShowNotesExcerpt = (
  text: string | null | undefined,
): string => {
  if (typeof text !== "string") {
    return "";
  }

  const trimmed = text.trim();

  if (!trimmed) {
    return "";
  }

  return trimmed.split(/\n\n+/)[0]?.trim() ?? "";
};
