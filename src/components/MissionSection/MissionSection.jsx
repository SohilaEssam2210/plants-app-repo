import React from "react";
import normal_3 from "../../assets/media/images/lab_role/normal-3.jpg";
import normal_4 from "../../assets/media/images/lab_role/normal-5.jpg";
function MissionSection() {
  return (
    <>
      <section
        className="lab-section__section"
        aria-labelledby="mission-heading"
      >
        <div className="lab-section__mission">
          <div className="lab-section__mission-icon" aria-hidden="true">
            <i className="fas fa-tasks" />
          </div>
          <h2 className="lab-section__mission-title" id="mission-heading">
            الرسالة
          </h2>
          <p className="lab-section__mission-text">
            رسالتنا هي تطوير وتقديم حلول تحليلية مبتكرة لدعم الصناعة والبحث
            العلمي، مع الالتزام بأعلى معايير الجودة والأمان. نهدف إلى تعزيز ثقة
            العملاء من خلال تقديم نتائج دقيقة وموثوقة.
          </p>
          <div className="lab-section__mission-image-container">
            <figure className="lab-section__mission-image">
              <img
                src={normal_3}
                alt="مختبر حديث مجهز بأحدث التقنيات"
              />
            </figure>
            <figure className="lab-section__mission-image">
              <img
                src={normal_4}
                alt="مختبر حديث مجهز بأحدث التقنيات"
              />
            </figure>
          </div>
          <ul className="lab-section__mission-list" role="list">
            <li className="listitem">
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
              <span>تطوير طرق تحليلية حديثة.</span>
            </li>
            <li className="listitem">
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
              <span>ضمان جودة ودقة النتائج.</span>
            </li>
            <li className="listitem">
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
              <span>دعم الصناعة والبحث العلمي.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default MissionSection;
