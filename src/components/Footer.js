import React from "react";
export default function Footer() {
  return (
    <footer className="mx-auto flex sm:flex-nowrap  flex justify-center bg-gray-100 text-black dark:bg-gray-800 dark:text-white">
      <p>Copyright © 2021 Orel Malki All rights reserved.</p>
      <span className="ml-2 hover:text-yellow-300">
        <a href="https://www.facebook.com/orel.malki.5" target="_blank">
          <i className="fa fa-facebook-official"></i>
        </a>
      </span>
      <span className="ml-2 hover:text-yellow-300">
        <a href="https://www.instagram.com/malkiorel/" target="_blank">
          <i className="fa fa-instagram"></i>
        </a>
      </span>
      <span className="ml-2 ml-3 hover:text-yellow-300">
        <a href="https://twitter.com/JeTix_LOL" target="_blank">
          <i className="fa fa-twitter"></i>
        </a>
      </span>
      <span className="ml-2 hover:text-yellow-300">
        <a
          href="https://github.com/jetix2"
          target="_blank"
        >
          <i className="fa fa-github"></i>
        </a>
      </span>
      <span className="ml-2 hover:text-yellow-300">
        <a
          href="https://www.linkedin.com/in/orel-malki-28484019a/"
          target="_blank"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </span>
    </footer>
  );
}
