import "./Header.scss";
import tristanHeadshot from "../../assets/images/tristan-samuk.jpg";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";
import MoonIcon from "../MoonIcon/MoonIcon";
import SunIcon from "../SunIcon/SunIcon";

type Props = {
  theme: string;
  switchTheme(): void;
};

const Header = ({ theme, switchTheme }: Props) => {
  let fill = "#000000";
  if (theme === "dark") {
    fill = "#FFFFFF";
  }
  return (
    <header className="header" data-theme={theme}>
      <div className="header__container--max-width">
        <div className="header__container--left">
          <img
            className="header__headshot"
            src={tristanHeadshot}
            alt="Tristan smiling in front of grey and white gradient backdrop"
          />
          <h1 className="header__title">Tristan Samuk</h1>
        </div>
        <div className="header__container--left">
          <button className="header__hamburger">
            <HamburgerMenuIcon height={"16"} width={"16"} fill={fill} />
          </button>
          {theme === "dark" ? (
            <button className="header__theme-toggle" onClick={switchTheme}>
              <MoonIcon height={"16"} width={"16"} fill={fill} />
            </button>
          ) : (
            <button className="header__theme-toggle" onClick={switchTheme}>
              <SunIcon height={"16"} width={"16"} fill={fill} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
