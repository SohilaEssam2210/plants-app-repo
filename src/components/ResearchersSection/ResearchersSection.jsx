import React from "react";
import Img1 from "../../assets/media/images/دكتور-هاله.webp";
import unknownImg from "../../assets/media/images/unknown.png";

function ResearchersSection() {
  return (
    <>
      <section
        className="lab-section__section"
        aria-labelledby="researchers-heading"
      >
        <div className="lab-section__researchers">
          <div className="lab-section__researchers-icon" aria-hidden="true">
            <i className="fas fa-users" />
          </div>
          <h2
            className="lab-section__researchers-title"
            id="researchers-heading"
          >
            السادة الباحثون بالقسم
          </h2>
          <p className="lab-section__researchers-text">
            يعمل في القسم فريق من الباحثين المتميزين الذين يمتلكون خبرات واسعة
            في مجال الكيمياء التحليلية. يساهمون في تقديم حلول مبتكرة وضمان جودة
            التحاليل.
          </p>
          <div className="about-us__container">
            <div className="about-us__card">
              <a href="single-person.html">
                <div className="about-us__card-image">
                  <img src={unknownImg} />
                </div>
                <div className="about-us__card-info">
                  <h3 className="about-us__card-name">
                    <span className="about-us__card-info-title">أ.د.</span>
                    غير معروف
                  </h3>
                  <strong className="about-us__card-field">
                    المسمى الوظيفي
                  </strong>
                </div>
              </a>
            </div>
            <div className="about-us__card">
              <a href="single-person.html">
                <div className="about-us__card-image">
                  <img src={Img1} alt="د. هاله ابو يوسف - أستاذة بالمعمل" />
                </div>
                <div className="about-us__card-info">
                  <h3 className="about-us__card-name">
                    <span className="about-us__card-info-title">أ.د.</span>
                    هاله ابو يوسف
                  </h3>
                  <strong className="about-us__card-field">رئيس البحوث</strong>
                </div>
              </a>
            </div>
            <div className="about-us__card">
              <a href="single-person.html">
                <div className="about-us__card-image">
                  <img src={unknownImg} alt="صورة غير متاحة" />
                </div>
                <div className="about-us__card-info">
                  <h3 className="about-us__card-name">
                    <span className="about-us__card-info-title">أ.د.</span>
                    غير معروف
                  </h3>
                  <strong className="about-us__card-field">
                    المسمى الوظيفي
                  </strong>
                </div>
              </a>
            </div>
            <div className="about-us__card">
              <a href="single-person.html">
                <div className="about-us__card-image">
                  <img src={Img1} alt="د. هاله ابو يوسف - أستاذة بالمعمل" />
                </div>
                <div className="about-us__card-info">
                  <h3 className="about-us__card-name">
                    <span className="about-us__card-info-title">أ.د.</span>
                    هاله ابو يوسف
                  </h3>
                  <strong className="about-us__card-field">رئيس البحوث</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResearchersSection;
