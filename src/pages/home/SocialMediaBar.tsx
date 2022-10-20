import "../../styles/socialmedia.css";
import { FaLinkedinIn, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

export const SocialMediaBar = () => {
  return (
    <nav className="navSocialMedia">
      <ul>
        <li>
          <a href="https://twitter.com/Veganum">
            <div className="imgSocialMedia">
              <FaTwitter />
            </div>

            <span>Twitter</span>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/jose-franco-nieto/">
            <div className="imgSocialMedia">
              <FaLinkedinIn />
            </div>

            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/veganum">
            <div className="imgSocialMedia">
              <FaGithub />
            </div>
            <span>Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/veganum">
            <div className="imgSocialMedia">
              <FaYoutube />
            </div>
            <span>Youtube</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
