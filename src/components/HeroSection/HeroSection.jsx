import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// استيراد الصور والتأكد من المسارات
import slide1 from "/src/assets/media/images/lab_role/hero-1.jpg";
import slide2 from "/src/assets/media/images/lab_role/hero-2.jpg";
import slide3 from "/src/assets/media/images/lab_role/hero-3.jpg";

function HeroSection() {
  const settings = {
    // fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const slidesContent = [
    { img: slide1, alt: "Scientists working in a laboratory" },
    { img: slide2, alt: "Scientists working in a laboratory" },
    { img: slide3, alt: "Scientists working in a laboratory" },
  ];

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div
        className="hero__container"
        id="hero-section"
        role="region"
        aria-label="Hero Slider"
      >
        <Slider {...settings}>
          {slidesContent.map((slide, index) => (
            <div key={`slide-${index}`} className="hero__slide" role="listitem">
              <div className="hero__content">
                <figure className="hero__content-image">
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="w-full h-[400px] object-cover"
                  />
                </figure>
                <div className="hero__text-container container">
                  <div className="hero__content-text">
                    <span className="hero__badge" role="text">
                      المعمل المركزي للمبيدات
                    </span>
                    <h1 className="hero__title" id="hero-heading">
                      شريكك في <span className="hero__highlight">الأمان</span>
                    </h1>
                    <p className="hero__description" role="text">
                      المعمل المركزي للمبيدات أنشأ بناءً على اتفاقية بين الحكومة
                      المصرية ومنظمة الأغذية والزراعة في الخمسينات. <br />
                      وبدأ العمل به عام 1970، وهو أحد المعامل البحثية التابعة
                      لمركز البحوث الزراعية. <br />
                      وفقًا لقانون الزراعة رقم 55 لسنة 1966 والقرار الوزاري رقم
                      622 لسنة 2008 ولائحة المعمل المركزي للمبيدات،
                    </p>
                    <div className="hero__buttons" role="group">
                      <a
                        href="contact.html"
                        className="btn"
                        aria-label="للتواصل"
                      >
                        <span>للتواصل</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default HeroSection;
