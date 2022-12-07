import Carousel from '../components/Carousel';
import AllCards from "../components/AllCards";

function Home(){
    return(
        <div className="container-fluid bodyColor"> 
            <Carousel/>
            <AllCards />
        </div>
       
    )
}

export default Home;