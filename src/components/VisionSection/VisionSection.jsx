import React from "react";

function VisionSection() {
  return (
    <>
      <section
        className="lab-section__section"
        aria-labelledby="vision-heading"
      >
        <div className="lab-section__vision">
          <div className="lab-section__vision-icon" aria-hidden="true">
            <i className="fa-solid fa-glasses" />
          </div>
          <h2 className="lab-section__vision-title" id="vision-heading">
            الرؤية
          </h2>
          <p className="lab-section__vision-text">
            أن نكون الرائدين في مجال الكيمياء التحليلية على مستوى المنطقة، من
            خلال تقديم خدمات بحثية وتحليلية متميزة. نسعى لتحقيق التميز في تقديم
            الحلول التحليلية التي تلبي احتياجات المجتمع والصناعة.
          </p>
          <ul className="lab-section__vision-list" role="list">
            <li role="listitem">
              <span className="num">1</span>
              <span className="text">الريادة في مجال التحليل الكيميائي.</span>
            </li>
            <li role="listitem">
              <span className="num">2</span>
              <span className="text">تطوير حلول تحليلية مبتكرة.</span>
            </li>
            <li role="listitem">
              <span className="num">3</span>
              <span className="text">تعزيز التعاون مع المؤسسات البحثية.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default VisionSection;
