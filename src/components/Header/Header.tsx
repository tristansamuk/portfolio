import "./Header.scss";
import tristanHeadshot from "../../assets/images/tristan-samuk.jpg";
// import useLocalStorage from "use-local-storage";

type Props = {
  theme: string;
  switchTheme(): void;
};

const Header = ({ theme, switchTheme }: Props) => {
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
            Menu
            {/* hamburger icon here */}
          </button>
          <button className="header__theme-toggle" onClick={switchTheme}>
            {/* conditional render: either sun or moon here */}
            Theme
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
