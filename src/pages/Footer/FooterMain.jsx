import React from "react";
import { RiArrowRightUpFill } from "react-icons/ri";

function FooterMain() {
  return (
    <div className="footer">
      <div className="site-info">
        <h3>Starter</h3>
        <p>
          This theme is designed by{" "}
          <span>
            <a href="#">nrk9819</a>
          </span>
          . You can download the figma file for from{" "}
          <span>
            <a href="#">dribbble</a>
          </span>
          .
        </p>
      </div>
      <div className="social-links">
        <ul>
          <li>
            <span>
              <a href="#">
                Mastodon
                <span>
                  <RiArrowRightUpFill />
                </span>
              </a>
            </span>
          </li>
          <li>
            <a href="#">
              Dribbble
              <span>
                  <RiArrowRightUpFill />
                </span>
            </a>
          </li>
          <li>
            <a href="#">
              Vector
              <span>
                  <RiArrowRightUpFill />
                </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterMain;
