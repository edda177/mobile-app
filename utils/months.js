import { useState } from "react";

export const months = (number) => {
  let month = "";
  switch (number) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "Mars";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
    default:
      month = number;
      break;
  }
  return month;
};

export const dates = (number) => {
  if (number.startsWith(0)) {
    return number.substring(1);
  } else {
    return number;
  }
};
