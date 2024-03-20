import "./HomePage.scss";

type Props = {
  theme: string;
};

const HomePage = ({ theme }: Props) => {
  // switchTheme();
  return (
    <div className="home-page__container--max-width" data-theme={theme}></div>
  );
};
export default HomePage;
