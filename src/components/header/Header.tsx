import { IconButton } from "@mui/material";
import { IHeader } from "./interfaces";
import { AppBar, ToolbarContainer } from "./styles";
import SettingMenu from "./SettingMenu";

const Header = ({ open, handleDrawOpen }: IHeader): React.ReactElement => {
  return (
    <AppBar position="fixed" open={open}>
      <ToolbarContainer open={open}>
        <IconButton />
        <SettingMenu />
      </ToolbarContainer>
    </AppBar>
  );
};
export default Header;
