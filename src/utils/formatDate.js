export const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Define day names and month names in Indonesian
  const dayNames = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Extract day, month, and year
  const day = date.getDay();
  const dateNumber = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  // Format the date string
  const formattedDate = `${dayNames[day]}, ${dateNumber} ${monthNames[month]} ${year}`;

  return formattedDate;
};
