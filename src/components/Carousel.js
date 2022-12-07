import one_carousel from '../assets/img/2.png';
import two_carousel from "../assets/img/3.png";
import three_carousel from "../assets/img/4.png";



function Carousel() {
    return(
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true"  style={{backgroundColor: "#FFECE3"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <center>
    <div className="carousel-item active">
      <img src={one_carousel} className="d-block" style={{width: "50%"}}/>
    </div>
    <div className="carousel-item">
      <img src={two_carousel} className="d-block" style={{width: "50%"}}/>
    </div>
    <div className="carousel-item">
      <img src={three_carousel} className="d-block" style={{width: "50%"}}/>
    </div>
    </center>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Carousel;