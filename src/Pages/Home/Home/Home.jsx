import InfoCards from "../InfoCards/InfoCards";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner/Banner";
import DentalCare from "./DentalCare/DentalCare";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div className="mx-5">
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;