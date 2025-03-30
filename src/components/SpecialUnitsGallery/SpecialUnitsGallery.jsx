import React from "react";
import normal_1 from "../../assets/media/images/lab_role/normal-1.jpg";
import normal_2 from "../../assets/media/images/lab_role/normal-2.jpg";
import normal_3 from "../../assets/media/images/lab_role/normal-3.jpg";
import normal_4 from "../../assets/media/images/lab_role/normal-5.jpg";

function SpecialUnitsGallery() {
  return (
    <>
      <section
        className="about-lab__section"
        id="units"
        aria-labelledby="units-heading"
      >
        <h2 className="about-lab__title" id="units-heading">
          الوحدات ذات الطابع الخاص
        </h2>
        <div className="about-lab__units-grid">
          {/* Unit 1 */}
          <div className="about-lab__unit-card">
            <div
              className="about-lab__unit-image"
              style={{
                backgroundImage: `url(${normal_1})`,
              }}
            ></div>
            <div className="about-lab__unit-overlay">
              <h3 className="about-lab__unit-title">
                وحدة تحليل وتقييم المبيدات
              </h3>
              <a href="lab-unit.html">
                {" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
          {/* Unit 2 */}
          <div className="about-lab__unit-card">
            <div
              className="about-lab__unit-image"
              style={{
                backgroundImage: `url(${normal_2})`,
              }}
            ></div>
            <div className="about-lab__unit-overlay">
              <h3 className="about-lab__unit-title">
                وحدة الـ Pyroplant لتصنيع مستحضرات بدائل المبيدات
              </h3>
              <a href="lab-unit.html">
                {" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
          {/* Unit 3 */}
          <div className="about-lab__unit-card">
            <div
              className="about-lab__unit-image"
              style={{
                backgroundImage: `url(${normal_3})`,
              }}
            ></div>
            <div className="about-lab__unit-overlay">
              <h3 className="about-lab__unit-title">
                وحدة البيولوجيا الجزيئية
              </h3>
              <a href="lab-unit.html">
                {" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
          {/* Unit 4 */}
          <div className="about-lab__unit-card">
            <div
              className="about-lab__unit-image"
              style={{
                backgroundImage: `url(${normal_4})`,
              }}
            ></div>
            <div className="about-lab__unit-overlay">
              <h3 className="about-lab__unit-title">
                وحدة تحليل المبيدات الحيوية
              </h3>
              <a href="lab-unit.html">
                {" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
          {/* Unit 5 */}
          <div className="about-lab__unit-card">
            <div
              className="about-lab__unit-image"
              style={{
                backgroundImage: `url(${normal_1})`,
              }}
            ></div>
            <div className="about-lab__unit-overlay">
              <h3 className="about-lab__unit-title">
                وحدة تحليل الأجهزة الدقيقة
              </h3>
              <a href="lab-unit.html">
                {" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SpecialUnitsGallery;
