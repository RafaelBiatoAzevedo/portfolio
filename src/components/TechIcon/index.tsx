import type { FC } from "react";
import type { IconType } from "react-icons";
import { IconItem, Tooltip } from "./styles";

export interface ITechIcon {
  name: string;
  icon: IconType | FC;
  scale: number;
}

export const TechIcon: FC<ITechIcon> = ({ name, icon: Icon, scale }) => {
  return (
    <IconItem>
      <Icon style={{ transform: `scale(${scale})` }} />
      <Tooltip>{name}</Tooltip>
    </IconItem>
  );
};
