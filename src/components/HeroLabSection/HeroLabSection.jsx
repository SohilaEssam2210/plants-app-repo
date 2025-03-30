import React from "react";
import heroImg from "../../assets/media/images/lab_role/hero-3.jpg";
function HeroLabSection() {
  return (
    <>
      <div className="lab-section__header">
        <img
          className="lab-section__image"
          src={heroImg}
          alt="صورة المقال"
        />
        <div className="lab-section__overlay">
          {/* Section Heading */}
          <h1 className="lab-section__title">قسم الكيمياء التحليلية</h1>
          <p className="lab-section__subtitle">
            قسم متخصص في تحليل المواد الكيميائية وتقييم جودتها.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroLabSection;
