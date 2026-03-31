export const getDaysInMonth = (year, month) => {
    const days = [];
  
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
  
    const startDay = firstDay.getDay();
    const totalDays = lastDay.getDate();
  
    const prevMonthLastDay = new Date(year, month, 0).getDate();
  
    for (let i = startDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        currentMonth: false,
      });
    }
  
    for (let date = 1; date <= totalDays; date++) {
      days.push({
        date: new Date(year, month, date),
        currentMonth: true,
      });
    }
  
    while (days.length % 7 !== 0) {
      const nextDate = days.length - (startDay + totalDays) + 1;
      days.push({
        date: new Date(year, month + 1, nextDate),
        currentMonth: false,
      });
    }
  
    return days;
  };
  
  export const formatDateKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}-${month}-${day}`;
  };
  
  export const isSameDate = (date1, date2) => {
    return (
      date1?.getFullYear() === date2?.getFullYear() &&
      date1?.getMonth() === date2?.getMonth() &&
      date1?.getDate() === date2?.getDate()
    );
  };
  
  export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];