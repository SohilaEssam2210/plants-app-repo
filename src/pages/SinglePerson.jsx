import React from "react";
import img from "../assets/media/images/دكتور-هاله.webp";

function SinglePerson() {
  return (
    <>
      <section className="single-person-container">
        <div className="container">
          <h1 className="person-title">
            <span className="person-title__span">د</span> هالة أبو يوسف
          </h1>
          <div className="single-person">
            <div className="single-person__image-container">
              <div className="single-person__profile-image">
                <img src={img} alt="صورة دكتورة" />
              </div>
              <div className="single-person__info">
                <div className="single-person__info-heading">
                  <h2>مدير المعمل المركزي</h2>
                  <h3>
                    <span className="person-title__span">د</span> هالة أبو يوسف
                  </h3>
                  <h4>التخصص: كيمياء المبيدات</h4>
                </div>
                <p className="single-person__info-item">
                  <strong>رقم الهاتف:</strong> <br />
                  +02 1123456789
                </p>
                <p className="single-person__info-item">
                  <strong>البريد الإلكتروني:</strong>
                  <br />
                  <a href="mailto:example@gmail.com">example@gmail.com</a>
                </p>
                <p className="single-person__info-item">
                  <strong>الخبرة:</strong>
                  <br />6 سنوات
                </p>
              </div>
            </div>
            <div className="single-person__about-container">
              <div className="single-person__about-summary">
                <h2>نبذة</h2>
                <p>
                  د. هالة عضو في لجنة مبيدات الآفات الزراعية بوزارة الزراعة
                  ومسؤولة عن التجريب والاتصال في المعمل المركزي للمبيدات. كما أن
                  لها مشاركات بيئية ومجتمعية عديدة داخل وخارج وزارة الزراعة.
                </p>
              </div>
              <div className="single-person__about-research">
                <h2>الأبحاث والمنشورات</h2>
                <ul>
                  <li>
                    <a href="research-page.html">
                      بحث عن تأثير المبيدات على التربة - 2023
                    </a>
                  </li>
                  <li>
                    <a href="research-page.html">
                      دراسة حول الحد من مخاطر المبيدات - 2022
                    </a>
                  </li>
                </ul>
              </div>
              <div className="single-person__about-awards">
                <h2>الجوائز والتكريمات</h2>
                <p>حصلت على جائزة التميز في البحث العلمي لعام 2021.</p>
              </div>
              <div className="single-person__about-conferences">
                <h2>المؤتمرات والندوات</h2>
                <p>شاركت في مؤتمر المبيدات الدولي 2022.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SinglePerson;
