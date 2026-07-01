export const parsePage = (value?: string) => {
  const parsed = Number(value ?? "1");

  if (!Number.isInteger(parsed) || parsed < 1) {
    return 1;
  }

  return parsed;
};
