import React from "react";

interface KanbanIconProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const KanbanIcon: React.FC<KanbanIconProps> = ({
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
      <rect
        x="6"
        y="10"
        width="52"
        height="44"
        rx="6"
        stroke={color}
        strokeWidth="3"
      />

      <rect
        x="14"
        y="18"
        width="8"
        height="28"
        rx="2"
        fill={color}
        opacity="0.9"
      />

      <rect
        x="28"
        y="18"
        width="8"
        height="20"
        rx="2"
        fill={color}
        opacity="0.7"
      />

      <rect
        x="42"
        y="18"
        width="8"
        height="32"
        rx="2"
        fill={color}
        opacity="0.5"
      />
    </svg>
  );
};
