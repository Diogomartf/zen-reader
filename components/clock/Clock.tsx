"use client";

import React, { useState, useEffect } from "react";

export function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // This function will be called once when the component mounts
    // and then every second to update the current time.
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Format the time as a string (HH:MM:SS)
  const formattedTime = currentTime.toLocaleTimeString();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = daysOfWeek[currentTime.getDay()];
  const dayOfMonth = currentTime.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[currentTime.getMonth()];

  // Format the date as "Wed 20 Sep" and time as "HH:MM"
  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthName}`;

  return (
    <div className="text-right">
      <p className="text-2xl font-bold">{formattedTime}</p>
      <p>{formattedDate}</p>
    </div>
  );
}
