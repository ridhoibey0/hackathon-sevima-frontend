export const formatTime = (serverTime) => {
  const [time, period] = serverTime.split(" ");

  let [hours, minutes] = time.split(":");
  hours = parseInt(hours, 10);
  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes} WIB`;
  return formattedTime;
};
