import React from "react";
import { Moon, Sun, User, Search, Info } from "lucide-react";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="fixed left-0 w-screen h-14 m-0 flex flex-row bg-primary text-secondary-100 dark:text-secondary-100 dark:bg-black justify-between shadow-lg">
      <div className="flex flex row">
        <HeaderIcon icon={<Info size="28" />} />
      </div>
      <div className="flex flex row">
        <HeaderIcon
          icon={
            <button onClick={toggleDarkMode}>
              {isDarkMode ? <Moon size="28" /> : <Sun size="28" />}{" "}
            </button>
          }
        />
        <HeaderIcon icon={<User size="28" />} />
      </div>
    </div>
  );
};

const HeaderIcon = ({ icon }) => {
  return <div className="header-icon">{icon}</div>;
};

export default Header;
