import React from "react";
import Img1 from "../../assets/media/images/دكتور-هاله.webp";
import unknownImg from "../../assets/media/images/unknown.png";
function PartnersMember() {
  return (
    <>
      <section className="presidency">
        <div className="special-title">
          <p className="special-title__text">تعرف علينا وعلى الأشخاص بالمعمل</p>
          <h2 className="special-title__title">رئاسه المعمل</h2>
        </div>
        <div className="presidency__container container">
          <div className="presidency__card">
            <a href="single-person.html">
              <div className="presidency__card-image">
                <img src={Img1} alt="د. هاله ابو يوسف - أستاذة بالمعمل" />
              </div>
              <div className="presidency__card-info">
                <h3 className="agents__card-name">
                  <span className="presidency__card-info-title">أ.د.</span>
                  هاله ابو يوسف
                </h3>
                <strong className="presidency__card-field">رئيس البحوث</strong>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="agents">
        <div className="special-title">
          <h2 className="special-title__title">الوكلاء</h2>
        </div>
        <div className="agents__container container">
          <div className="agents__card">
            <a href="single-person.html">
              <div className="agents__card-image">
                <img src={unknownImg} alt="صورة غير متاحة" />
              </div>
              <div className="agents__card-info">
                <h3 className="agents__card-name">
                  <span className="agents__card-info-title">أ.د.</span>
                  غير معروف
                </h3>
                <strong className="agents__card-field">المسمى الوظيفي</strong>
              </div>
            </a>
          </div>
          <div className="agents__card">
            <a href="single-person.html">
              <div className="agents__card-image">
                <img src={unknownImg} alt="صورة غير متاحة" />
              </div>
              <div className="agents__card-info">
                <h3 className="agents__card-name">
                  <span className="agents__card-info-title">أ.د.</span>
                  غير معروف
                </h3>
                <strong className="agents__card-field">المسمى الوظيفي</strong>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnersMember;
