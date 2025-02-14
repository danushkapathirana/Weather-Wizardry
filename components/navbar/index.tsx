import Search from "./search";

import classes from "./Navbar.module.css";
import GpsIcon from "../icons/navbar-icons/gps-icon";
import MapPinIcon from "../icons/navbar-icons/pin-icon";
import LogoIcon from "../icons/logo-icon";

interface NavbarProps {
  onSearchValueSubmit: (value: string | null) => void;
  onSelectCurrentLocation: () => void;
  location: string;
}

export default function Navbar({
  onSearchValueSubmit,
  onSelectCurrentLocation,
  location,
}: NavbarProps) {
  const searchValueHandler = (value: string | null) => {
    onSearchValueSubmit(value);
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.nav_container}>
        <div className={classes.logo}>
          <LogoIcon width="200px" height="40px" />
        </div>
        <div className={classes.search_container}>
          <div className={classes.search_container__gps}>
            <div onClick={onSelectCurrentLocation}>
              <GpsIcon width="24px" height="24px" color="#90a4ae" />
            </div>
            <div className={classes.search_container__location}>
              <MapPinIcon width="24px" height="24px" color="#90a4ae" />
              <p>{location}</p>
            </div>
          </div>
          <Search onFormSubmit={(value) => searchValueHandler(value)} />
        </div>
      </div>
    </nav>
  );
}
