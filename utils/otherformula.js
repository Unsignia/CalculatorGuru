export function salary(missing, sal, days, hours, hourly) {
  if (missing == "sal") {
    return (52 * days * hours * hourly).toFixed(2).toLocaleString("en-US");
  }
}
