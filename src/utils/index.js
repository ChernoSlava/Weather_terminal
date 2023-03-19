export const capitalizeFirstLetter = (str) => {
  if (!str) return ''

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const today = new Date().toLocaleString('en-EN', { 
  weekday: 'short', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
});

export const getPresure = (gpas) => {
  return Math.round(gpas / 1.333);
}

export function sun(data, timezone) {
  return new Date(
    (data * 1000) + (new Date().getTimezoneOffset() * 60 * 1000) + (timezone * 1000)
  ).toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
}
