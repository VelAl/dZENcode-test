export type T_DateString = `${string},${string},${string},${string}`;

export const getFormatedDate = () => {
  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format (false for 24-hour, true for 12-hour)
  };

  const formatted = new Intl.DateTimeFormat("en-US", options).format(date);

  return formatted as T_DateString;
};
