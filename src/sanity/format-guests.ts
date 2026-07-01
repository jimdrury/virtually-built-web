type GuestNameSource = {
  name?: string | null;
} | null;

export const formatGuestNames = (
  guests: GuestNameSource[] | null | undefined,
): string => {
  const names = (guests ?? [])
    .map((guest) => guest?.name)
    .filter((name): name is string => Boolean(name));

  if (names.length === 0) {
    return "";
  }

  if (names.length === 1) {
    return names[0];
  }

  if (names.length === 2) {
    return `${names[0]} and ${names[1]}`;
  }

  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
};

export const formatGuestCredit = (
  guests: GuestNameSource[] | null | undefined,
): string => {
  const names = formatGuestNames(guests);

  if (!names) {
    return "";
  }

  return `With ${names}`;
};
