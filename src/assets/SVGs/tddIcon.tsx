import React from "react";

interface TddIconProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const TddIcon: React.FC<TddIconProps> = ({
  size = 32,
  color = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Círculo principal (ciclo) */}
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke={color}
        strokeWidth="3"
        strokeDasharray="6 6"
      />

      {/* 3 pontos do ciclo */}
      <circle cx="32" cy="10" r="4" fill={color} />
      <circle cx="52" cy="42" r="4" fill={color} />
      <circle cx="12" cy="42" r="4" fill={color} />

      {/* Check central */}
      <path
        d="M26 32l4 4 8-10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
