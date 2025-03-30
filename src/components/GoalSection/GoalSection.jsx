import React from "react";
import normal_3 from "../../assets/media/images/lab_role/normal-3.jpg";
function GoalSection() {
  return (
    <>
      <section className="lab-section__section" aria-labelledby="goal-heading">
        <div className="lab-section__goal">
          <div className="lab-section__goal-content">
            <div className="lab-section__goal-icon" aria-hidden="true">
              <i className="fa-solid fa-signal" />
            </div>
            <h2 className="lab-section__goal-title" id="goal-heading">
              الهدف
            </h2>
            <p className="lab-section__goal-text">
              يهدف قسم الكيمياء التحليلية إلى تقديم تحليلات دقيقة وعالية الجودة
              للمواد الكيميائية، مما يساهم في ضمان جودة المنتجات وسلامة البيئة.
              نحن نعمل على تطوير طرق تحليلية حديثة لتلبية احتياجات الصناعة
              والبحث العلمي.
            </p>
            <ul className="lab-section__goal-list" role="list">
              <li className="listitem" role="listitem">
                <i className="fa-solid fa-circle" aria-hidden="true" />
                <span>تحليل المواد الكيميائية بدقة عالية.</span>
              </li>
              <li className="listitem" role="listitem">
                <i className="fa-solid fa-circle" aria-hidden="true" />
                <span>تقييم جودة المنتجات الكيميائية.</span>
              </li>
              <li className="listitem" role="listitem">
                <i className="fa-solid fa-circle" aria-hidden="true" />
                <span>دعم البحث العلمي والصناعي.</span>
              </li>
            </ul>
          </div>
          <figure className="lab-section__goal-image atchive__image">
            <img
              src={normal_3}
              alt="مختبر حديث مجهز بأحدث التقنيات"
            />
          </figure>
        </div>
      </section>
    </>
  );
}

export default GoalSection;
