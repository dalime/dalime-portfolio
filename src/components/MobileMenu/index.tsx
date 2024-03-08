import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

// Components
import CustomMenuItem from "../HeaderMenu/CustomMenuItem";

interface CustomItemProps {
  text: string;
  route: string;
  handleClose(): void;
}

function CustomItem({
  text,
  route,
  handleClose,
}: CustomItemProps): JSX.Element {
  const navigate = useNavigate();

  /**
   * Navigate to route and close the menu
   */
  const handleClick = (): void => {
    navigate(route);
    handleClose();
  };

  return (
    <MenuItem onClick={handleClick}>
      <CustomMenuItem text={text} route={route} />
    </MenuItem>
  );
}

function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /**
   * Opens the menu
   * @param event React.MouseEvent<HTMLButtonElement>
   */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Close the menu
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div data-testid="mobile-menu">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
      >
        <MenuOutlined />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <CustomItem text="Home" route="/" handleClose={handleClose} />
        <CustomItem text="About" route="/about" handleClose={handleClose} />
        <CustomItem
          text="Portfolio"
          route="/portfolio"
          handleClose={handleClose}
        />
        {/* <CustomItem text="Blog" route="/blog" handleClose={handleClose} /> */}
      </Menu>
    </div>
  );
}

export default MobileMenu;
