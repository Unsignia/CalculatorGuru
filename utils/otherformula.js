export function salary(missing, sal, days, hours, hourly) {
  if (missing == "sal") {
    return (52 * days * hours * hourly).toLocaleString("en-US", {
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
  }
}
