import 'bootstrap/dist/css/bootstrap.css';
import Banner from "./components/Banner";
import Header from "./components/Header";
import PopularProducts from "./components/PopularProducts";
import DealsOfDay from './components/DealsOfDay';
import CouponByCategories from './components/CouponByCategories';
import Offer from './components/SpecialOffer';
import SpecialOffer from './components/SpecialOffer';
import PopularMembership from './components/PopularMembership';
import NewsLetter from './components/NewsLetter';
import NewCoupon from './components/NewCoupon';
import Download from './components/Download';
import CouponBy2 from './components/CouponBy2';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <PopularProducts/>
    <DealsOfDay/>
    <CouponByCategories/>
    <SpecialOffer/>
    <PopularMembership/>
    <NewsLetter/>
    <NewCoupon/>
    <Download/>
    <CouponBy2/>
    <Footer/>
    </>
    
  );
}

export default App;
