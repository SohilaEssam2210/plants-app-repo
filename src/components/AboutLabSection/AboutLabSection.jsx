import React from "react";
import aboutLab from "../../assets/media/images/about-us.jpg"
function AboutLabSection() {
  return (
    <>
      <section
        className="about-lab__section about-lab__heading"
        id="about"
        aria-labelledby="about-heading"
      >
        <img
          className="about-lab__image"
          src={aboutLab}
          alt=""
        />
        <div className="about-lab__heading-head">
          <h2 className="about-lab__title" id="about-heading">
            عن المعمل
          </h2>
          <p className="about-lab__paragraph">
            أنشئ المعمل المركزي للمبيدات بناءً على الاتفاقية الموقعة بين منظمة
            الأغذية والزراعة (FAO) والحكومة المصرية عام 1959. يهدف المعمل إلى
            اختبار فعالية مبيدات الآفات الزراعية، واستخدام الخامات المحلية في
            تصنيع مستحضراتها وتسجيلها، وتقديم المعونة الفنية في مجال استخدامها
            وتداولها.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutLabSection;
