import React from "react";

const RemainingDays = ({ subscriptionType, subscribedOn }) => {
  const subscriptionDuration = {
    Basic: 3, // 3 months
    Intermediate: 6, // 6 months
    Pro: 12, // 12 months
  };

  const calculateRemainingTime = (subscribedOn, type) => {
    const start = new Date(subscribedOn);
    const end = new Date(start);
    end.setMonth(start.getMonth() + subscriptionDuration[type]);

    const now = new Date();
    const remainingTime = end - now;

    const remainingDays = Math.max(
      0,
      Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    );
    const remainingMonths = Math.max(0, Math.floor(remainingDays / 30));

    return { remainingDays, remainingMonths };
  };

  const { remainingDays, remainingMonths } = calculateRemainingTime(
    subscribedOn,
    subscriptionType.split(" ")[0]
  );

  // Calculate the circumference for the circular progress bar
  const radiusDays = 50; // Radius for days circle
  const radiusMonths = 60; // Radius for months circle
  const circumferenceDays = 2 * Math.PI * radiusDays;
  const circumferenceMonths = 2 * Math.PI * radiusMonths;

  const daysProgress = (remainingDays / 30) * circumferenceDays;
  const monthsProgress = (remainingMonths / 12) * circumferenceMonths;

  return (
    <div className="relative inline-flex items-center justify-center w-40 h-40">
      <svg className="absolute top-0 left-0 w-full h-full">
        {/* Conditionally render the appropriate circle */}
        {remainingDays > 30 ? (
          <>
            <circle
              className="text-orange-500"
              strokeWidth="16" // Increased width
              strokeDasharray={circumferenceMonths}
              strokeDashoffset={circumferenceMonths - monthsProgress}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radiusMonths}
              cx="50%"
              cy="50%"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="24"
              fill="orange"
              className="font-bold"
            >
              {remainingMonths}m
            </text>
          </>
        ) : (
          <>
            <circle
              className="text-orange-500"
              strokeWidth="16" // Increased width
              strokeDasharray={circumferenceDays}
              strokeDashoffset={circumferenceDays - daysProgress}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radiusDays}
              cx="50%"
              cy="50%"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="24"
              fill="orange"
              className="font-bold"
            >
              {remainingDays}d
            </text>
          </>
        )}
      </svg>
    </div>
  );
};

export default RemainingDays;
