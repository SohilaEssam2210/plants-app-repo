import React from "react";
import heroImg from "../../assets/media/hero-image.jpg";
import labLogo from "../../assets/media/lab_logo.jpg";
function SingleNewsHero() {
  return (
    <>
      <header className="single-news__header">
        <img
          className="single-news__image"
          src={heroImg}
          alt="صورة المقال"
        />
        <div className="single-news__overlay">
          <span className="single-news__badge" aria-label="تصنيف المقال">
            أخبار
          </span>
          <h1 className="single-news__title">
            المركزي للمبيدات يشارك في ورشة عمل بالمغرب حول الإدارة البيئية
            السليمة للمبيدات
          </h1>
          <div className="single-news__info">
            <img
              className="single-news__author-img"
              src={labLogo}
              alt="شعار المعمل المركزي للمبيدات"
            />
            <div>
              <p className="single-news__author">
                <strong>المعمل المركزي للمبيدات</strong>
              </p>
              <time className="single-news__date" dateTime="2024-12-28">
                28 - ديسمبر - 2024
              </time>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default SingleNewsHero;
