import React from "react";
// import heroImg from "../../media/images/lab_role/hero-2.jpg";
import heroImg from "../../assets/media/images/lab_role/hero-2.jpg";
function GuidanceSection() {
  return (
    <>
      <section
        className="about-lab__section"
        id="training"
        aria-labelledby="training-heading"
      >
        <div className="about-lab__training">
          <div className="lab-section__training-content">
            <h2 className="about-lab__title" id="training-heading">
              الإرشاد والتدريب
            </h2>
            <p className="about-lab__paragraph">
              يقوم قسم الإرشاد والتدريب بالمعمل بتوصيل نتائج البحوث إلى جهاز
              الإرشاد الزراعي بالوزارة، وتنظيم الدورات التدريبية للعاملين في
              مجال المبيدات.
            </p>
          </div>
          <figure className="lab-section__training-image">
            <img
              src={heroImg}
              alt="مختبر حديث مجهز بأحدث التقنيات"
            />
          </figure>
          <div className="lab-section__library-content">
            <h2 className="about-lab__title" id="library-heading">
              المكتبة
            </h2>
            <p className="about-lab__paragraph">
              تحتوي مكتبة المعمل على العديد من الدورات والأبحاث التي تخدم مجال
              البحث العلمي في مجال المبيدات والزراعة.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default GuidanceSection;
