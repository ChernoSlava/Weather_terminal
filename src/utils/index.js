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
