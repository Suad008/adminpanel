import { useState } from "react";
import { IUseSettingsMenu } from "../interfaces";

const useSettingsMenu = (): IUseSettingsMenu => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };
  return { anchorEl, handleClick, handleClose };
};
export default useSettingsMenu;
