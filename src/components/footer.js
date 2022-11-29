import React from "react";
import {
  NameFooter,
  Row,
  MainFooter,
  Ul,
  UlIcon,
} from "./styledComponents/style";
import { AiFillFacebook } from "react-icons/ai";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <MainFooter>
      <div>
        <Row>
          <div>
            <Ul>
              <NameFooter>Acs Arpad</NameFooter>
              <li>+36-30/123-4567</li>
              <li>Szeged, Magyarorszag</li>
              <li>Kivancsi Fancsi utca 135.</li>
            </Ul>
          </div>
          <div>
            <UlIcon>
              <li>
                <AiFillFacebook className="icons" />
              </li>
              <li>
                <FaGithubSquare className="icons" />
              </li>
              <li>
                <FaInstagramSquare className="icons" />
              </li>
              <li>
                <FaTwitterSquare className="icons" />
              </li>
            </UlIcon>
          </div>
          <div>
            <Ul>
              <div>Contact</div>
              <li>Write me</li>
              <li>Download CV</li>
            </Ul>
          </div>
        </Row>
        <hr />
        <Row>
          <p>&copy;{new Date().getFullYear()} | All right reserved | Privacy</p>
        </Row>
      </div>
    </MainFooter>
  );
};
