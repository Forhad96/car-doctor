import About from "../About/About";
import Banner from "../Banner/Banner";
import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <CTA></CTA>
      <WhyChoose></WhyChoose>
      <Footer></Footer>
    </div>
  );
};

export default Home;
