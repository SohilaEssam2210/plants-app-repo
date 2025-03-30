import React from "react";
import Slider from "react-slick";
import ec from "../../assets/media/images/Partners/Ec.png";
import fao from "../../assets/media/images/Partners/fao.png";
import hc from "../../assets/media/images/Partners/hc.png";
import iarc from "../../assets/media/images/Partners/iarc.png";
import usepa from "../../assets/media/images/Partners/usepa.png";
import who from "../../assets/media/images/Partners/who.png";

function OurPartnersSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // pauseOnHover: true,
  };

  const partners = [
    {
      img: ec,
      alt: "European Commission (EC)",
      link: "https://www.fao.org/home/en",
    },
    {
      img: fao,
      alt: "Food and Agriculture Organization (FAO)",
      link: "https://www.fao.org/home/en",
    },
    { img: hc, alt: "Health Canada (HC)", link: "https://www.fao.org/home/en" },
    {
      img: iarc,
      alt: "International Agency for Research on Cancer (IARC)",
      link: "https://www.fao.org/home/en",
    },
    {
      img: usepa,
      alt: "United States Environmental Protection Agency (USEPA)",
      link: "https://www.fao.org/home/en",
    },
    {
      img: who,
      alt: "World Health Organization (WHO)",
      link: "https://www.fao.org/home/en",
    },
  ];

  return (
    <section className="Partners">
      <h2 id="partners-title" className="single-title">
        شركاؤنا من حول العالم
      </h2>
      <div
        className="scroller"
        data-direction="right"
        data-speed="slow"
        dir="ltr"
      >
        <div className="scroller__inner">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <figure key={index} className="item">
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={partner.img} alt={partner.alt} />
                </a>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default OurPartnersSlider;
