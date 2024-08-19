export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const day = padZero(date.getDate()) + '/' + padZero(date.getMonth()) + '/' + padZero(date.getFullYear());
  return [`${hours}:${minutes}`, day];
}

function padZero(number){
  return number.toString().padStart(2, "0");
}