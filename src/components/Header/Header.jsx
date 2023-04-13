import React from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Ruchi</div>
        <ul className={`flexCenter ${css.menu}`}>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+123 456 789</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
