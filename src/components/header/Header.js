import React from "react";
import PropTypes from "prop-types";
import { FaPlus, FaAffiliatetheme, FaList } from "react-icons/fa";

//-- Stylesheet
import "./header.scss";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="app__header" data-testid="header">
      <nav>
        <div className="logo">
          <FaList />
          {/* <img src="/images/logo.png" alt="Todoist" /> */}
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
              >
                <FaPlus />
              </button>
            </li>
            <li className="settings_themeSwitcher">
              <button
                data-testid="theme-switcher-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
              >
                <FaAffiliatetheme />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Header;
