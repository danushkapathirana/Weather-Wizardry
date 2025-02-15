//  select day or night time icon
export function getDayOrNightIcon(iconName: string, dateTime: string): string {
  const hours = new Date(dateTime).getHours();
  const isDayTime = hours >= 6 && hours < 18; //consider day time is 6.00 AM to 6.00 PM
  return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n");
}
