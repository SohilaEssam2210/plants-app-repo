import React from "react";

function ResearchDepartments() {
  return (
    <>
      <section
        className="about-lab__section"
        id="departments"
        aria-labelledby="departments-heading"
      >
        <div className="about-lab__departments">
          <h2 className="about-lab__title" id="departments-heading">
            الأقسام البحثية
          </h2>
          <div className="about-lab__departments-list">
            {/* Department 1 */}
            <div className="about-lab__department-item">
              <span className="about-lab__department-number">1</span>
              <div>
                <div>
                  <h3 className="about-lab__department-name">
                    قسم بحوث متبقيات المبيدات وتلوث البيئة
                  </h3>
                  <p className="about-lab__department-overview">
                    هذا القسم يهتم بدراسة متبقيات المبيدات في البيئة وتأثيرها
                    على التلوث البيئي، بالإضافة إلى تطوير طرق للحد من هذه
                    التأثيرات.
                  </p>
                  <a href="lab-section.html"></a>
                </div>
                <a href="lab-section.html">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
            {/* Department 2 */}
            <div className="about-lab__department-item">
              <span className="about-lab__department-number">2</span>
              <div>
                <div>
                  <h3 className="about-lab__department-name">
                    قسم بحوث مستحضرات المبيدات
                  </h3>
                  <p className="about-lab__department-overview">
                    يهتم هذا القسم بتطوير وتحسين مستحضرات المبيدات لضمان
                    فعاليتها وأمانها في الاستخدام.
                  </p>
                </div>
                <a href="lab-section.html">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
            {/* Department 3 */}
            <div className="about-lab__department-item">
              <span className="about-lab__department-number">3</span>
              <div>
                <div>
                  <h3 className="about-lab__department-name">
                    قسم بحوث سمية المبيدات للثدييات والأحياء المائية
                  </h3>
                  <p className="about-lab__department-overview">
                    يركز هذا القسم على دراسة تأثير المبيدات على الثدييات
                    والأحياء المائية وتقييم مخاطرها.
                  </p>
                </div>
                <a href="lab-section.html">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
            {/* Department 4 */}
            <div className="about-lab__department-item">
              <span className="about-lab__department-number">4</span>
              <div>
                <div>
                  <h3 className="about-lab__department-name">
                    قسم بحوث تحليل المبيدات
                  </h3>
                  <p className="about-lab__department-overview">
                    يتخصص هذا القسم في تحليل المبيدات وتطوير طرق حديثة للكشف
                    عنها وقياس تركيزاتها.
                  </p>
                </div>
                <a href="lab-section.html">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResearchDepartments;
