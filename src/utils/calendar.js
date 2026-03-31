export const getDaysInMonth = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
  
    const days = [];
    const startDay = firstDay.getDay();
  
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
  
    // Actual dates
    for (let date = 1; date <= lastDay.getDate(); date++) {
      days.push(new Date(year, month, date));
    }
  
    return days;
  };
  
  export const formatDateKey = (date) => {
    return date.toISOString().split("T")[0];
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