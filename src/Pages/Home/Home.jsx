import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import Slider from "../../components/Slider/Slider";

const Home = () => {

return (
<div>
    <Navbar></Navbar>    
    <Slider></Slider>    
    
    <div className="py-14"> <Services></Services> </div>

  <div className="pt-10" > <Footer></Footer> </div>

</div>
 );
};

export default Home;