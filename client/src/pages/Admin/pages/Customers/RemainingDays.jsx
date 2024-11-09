import React from "react";
import Moment from "moment";

const RemainingDays = ({ subscription = {date: "00/00/0000", duration: 0, name: ""} }) => {
  const { date: subscribedOn, duration } = subscription;

  const calculateRemainingTime = (subscribedOn, duration) => {
    const start = Moment(subscribedOn, "DD/MM/YYYY"); // Parsing the date in dd/mm/yyyy format
    const end = start.clone().add(duration, "months");
    const now = Moment();

    const remainingMonths = end.diff(now, "months", true); // Fractional months
    now.add(Math.floor(remainingMonths), "months"); // Add full months to current date
    const remainingDays = end.diff(now, "days"); // Calculate remaining days

    return { remainingDays, remainingMonths };
  };

  const { remainingDays, remainingMonths } = calculateRemainingTime(
    subscribedOn,
    duration
  );

  // Calculate the circumference for the circular progress bars
  const radiusDays = 60; // Radius for days circle
  const radiusMonths = 75; // Radius for months circle
  const circumferenceDays = 2 * Math.PI * radiusDays;
  const circumferenceMonths = 2 * Math.PI * radiusMonths;

  const daysProgress = (remainingDays / 30) * circumferenceDays || 0;
  const monthsProgress = (remainingMonths / 12) * circumferenceMonths || 0;

  return (
    <div className="relative flex flex-col items-center justify-center w-64 h-64 p-4">
      <svg className="w-full h-full">
        {/* Background Circle */}
        <circle
          className="text-gray-300"
          strokeWidth="12" // Thicker stroke for visibility
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radiusMonths}
          cx="50%"
          cy="50%"
        />
        {/* Circle for months */}
        <circle
          className="text-blue-500"
          strokeWidth="12" // Thicker stroke for visibility
          strokeDasharray={circumferenceMonths}
          strokeDashoffset={circumferenceMonths - monthsProgress}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radiusMonths}
          cx="50%"
          cy="50%"
        />
        {/* Background Circle for days */}
        <circle
          className="text-gray-300"
          strokeWidth="12" // Thicker stroke for visibility
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radiusDays}
          cx="50%"
          cy="50%"
        />
        {/* Circle for days */}
        <circle
          className="text-orange-500"
          strokeWidth="12" // Thicker stroke for visibility
          strokeDasharray={circumferenceDays}
          strokeDashoffset={circumferenceDays - daysProgress}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radiusDays}
          cx="50%"
          cy="50%"
        />
      </svg>
      {/* Text for remaining time */}
      <div className="absolute flex flex-col items-center justify-center w-full h-full">
        <span className="text-xl font-semibold text-blue-500">
          {Math.floor(remainingMonths) || 0}m
        </span>
        <span className="text-lg font-medium text-orange-500">
          {Math.max(remainingDays, 0) || 0}d
        </span>
      </div>
    </div>
  );
};

export default RemainingDays;
