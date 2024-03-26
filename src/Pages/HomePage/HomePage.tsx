import "./HomePage.scss";
import Work from "../../components/Work/Work";

type Props = {
  theme: string;
};

const HomePage = ({ theme }: Props) => {
  return (
    <div className="home-page__container--max-width" data-theme={theme}>
      <section className="intro">
        <h2 className="intro__heading">Hi, I'm Tristan</h2>
        <p className="intro__text">
          I'm a full-stack developer based in Toronto, Canada. I like building
          software that's easy to use and nice to look at.
        </p>
        <p className="intro__text">
          I'm currently working on expaning my portfolio and finding new
          opportunties.
        </p>
        <p className="intro__text">
          If you're looking to hire a junior developer or need help building
          your website or app, feel free to reach out!
        </p>
        <button className="intro__button">Email Me</button>
      </section>
      <Work />
    </div>
  );
};
export default HomePage;
