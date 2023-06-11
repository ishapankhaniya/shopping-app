import Offer from "./Images/offer.png";
import Header from "./Header";
const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={Offer} className="img-home1" />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
