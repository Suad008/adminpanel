import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { IMenu } from "./interfaces";
import { DrawerHeader } from "components/header/styles";
import { KeyboardArrowLeftIcon } from "assets/icons";
import { Button, Drawer } from "./styles";
import { menuItems } from "assets/constants/MenuItems";
import { colors } from "assets/constants/colors";

const Menu = ({ open, handleDrawerClose }: IMenu): React.ReactElement => {
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        Logo
        <Button onClick={handleDrawerClose}>
          <KeyboardArrowLeftIcon />
        </Button>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              href={item.link}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: colors.white[900],
                }}
              ></ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }}
              ></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export default Menu;
