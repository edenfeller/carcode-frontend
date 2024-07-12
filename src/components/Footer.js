import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div
      className={`fixed bottom-0 w-screen h-14 m-0 flex justify-center items-center  bg-primary text-secondary-100 dark:bg-black dark:text-secondary-100`}
    >
      <p>© קארקוד</p>
    </div>
  );
};

export default Footer;
