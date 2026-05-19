import React from "react";

interface ScheduleLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function ScheduleLogo({ className = "", variant = "dark" }: ScheduleLogoProps) {
  const color = variant === "light" ? "#ffffff" : "#0a0a0a";
  return (
    <svg
      width="120"
      height="32"
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Calendar icon mark */}
      <rect x="1" y="3" width="22" height="26" rx="3" stroke={color} strokeWidth="2" fill="none"/>
      <line x1="1" y1="10" x2="23" y2="10" stroke={color} strokeWidth="2"/>
      <line x1="7" y1="1" x2="7" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="17" y1="1" x2="17" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <rect x="5" y="14" width="4" height="4" rx="1" fill={color}/>
      <rect x="11" y="14" width="4" height="4" rx="1" fill={color}/>
      <rect x="5" y="20" width="4" height="4" rx="1" fill={color}/>
      {/* Wordmark */}
      <text
        x="30"
        y="22"
        fontFamily="'Georgia', serif"
        fontSize="16"
        fontWeight="600"
        fill={color}
        letterSpacing="-0.3"
      >
        Schedule
      </text>
    </svg>
  );
}
