import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/media/images/lab_role/normal-1.jpg";
import img2 from "../../assets/media/images/lab_role/normal-2.jpg";
import img3 from "../../assets/media/images/lab_role/normal-3.jpg";
import img4 from "../../assets/media/images/lab_role/normal-4.jpg";
import img5 from "../../assets/media/images/lab_role/normal-5.jpg";
import img6 from "../../assets/media/images/lab_role/normal-6.jpg";

function LabRoleSlider() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    // dots: true,
    arrow:true,
    autoplay: true,
    speed: 500,
    centerMode: true,
    centerPadding: "20%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "5%",
        },
      },
    ],
  };

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="lab-role">
      <div>
        <div className="lab-role__intro special-title">
          <p className="special-title__text">
            تحسين كفاءة المبيدات، تطوير المستحضرات، وتقييم تأثيرها الوراثي
            والبيئي.
          </p>
          <h2 className="special-title__title">دور المعمل المركزي للمبيدات</h2>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <article className="lab-role__card">
                  <img
                    src={img}
                    alt="تحليل التغيرات الوراثية للمبيدات داخل المعمل"
                  />
                  <div className="lab-role__content">
                    <h3>دراسة التغيرات الوراثية الناتجة عن المبيدات</h3>
                    <p>
                      {`يختص قسم التربية القياسية بالمعمل المركزي للمبيدات بتربية
                      وتكوين السلالات المختلفة للأنواع النباتية والحشرية
                      والحيوانية مع ضمان التجانس الوراثي لهذه السلالات
                      لاستخدامها في الدراسات التوكسيكولوجية والبيولوجية
                      والوراثية والبيئية. كما يختص القسم بدراسة التغيرات المرضية
                      أو التشويهية أو الطفرية الناتجة عن الفعل المباشر لمبيدات
                      الآفات أو الناتجة عن فعلها الانتخابي.`.slice(0, 150)}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//       aria-label="الشريحة التالية"
//     >
//       <i className="fa-solid fa-chevron-left" aria-hidden="true" />
//     </button>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//       aria-label="الشريحة السابقة"
//     >
//       <i className="fa-solid fa-chevron-right" aria-hidden="true" />
//     </button>
//   );
// }

export default LabRoleSlider;
