import React from "react";
import styles from "./NewsTicker.module.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const NewsTicker = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="news-bar" aria-label="News Ticker">
      <div
        className="scroller"
        data-direction="right"
        data-speed="slow"
        dir="rtl"
        role="marquee"
        aria-label="Scrolling News"
      >
        <div className="scroller__inner" role="list" aria-label="News Items">
          <Slider {...settings}>
            <div className="news-text" role="listitem">
              <Link
                to="singleNews"
                aria-label="أعلنت وزارة الزراعة عن حملة جديدة للحد من استخدام المبيدات الكيميائية وتعزيز البدائل العضوية."
              >
                أعلنت وزارة الزراعة عن حملة جديدة للحد من استخدام المبيدات
                الكيميائية وتعزيز البدائل العضوية.
              </Link>
            </div>
            <div className="news-text" role="listitem">
              <Link
                to="singleNews"
                aria-label="دراسة حديثة تؤكد أن بعض المبيدات الحشرية تؤثر سلبًا على الكائنات الحية الدقيقة المفيدة في التربة."
              >
                دراسة حديثة تؤكد أن بعض المبيدات الحشرية تؤثر سلبًا على الكائنات
                الحية الدقيقة المفيدة في التربة.
              </Link>
            </div>
            <div className="news-text" role="listitem">
              <Link
                to="singleNews"
                aria-label="المركز القومي للبحوث ينشر تقريرًا حول تأثير الاستخدام المفرط للمبيدات على جودة المحاصيل الزراعية."
              >
                المركز القومي للبحوث ينشر تقريرًا حول تأثير الاستخدام المفرط
                للمبيدات على جودة المحاصيل الزراعية.
              </Link>
            </div>
            <div className="news-text" role="listitem">
              <Link
                to="singleNews"
                aria-label="مؤتمر دولي يناقش استراتيجيات تحسين الزراعة المستدامة وتقليل مخاطر المبيدات على البيئة."
              >
                مؤتمر دولي يناقش استراتيجيات تحسين الزراعة المستدامة وتقليل
                مخاطر المبيدات على البيئة.
              </Link>
            </div>
            <div className="news-text" role="listitem">
              <Link
                to="singleNews"
                aria-label="منظمة الفاو تطلق مشروعًا لدعم المزارعين في استخدام تقنيات صديقة للبيئة."
              >
                منظمة الفاو تطلق مشروعًا لدعم المزارعين في استخدام تقنيات صديقة
                للبيئة.
              </Link>
            </div>
            <div className="news-text" role="listitem">
              <Link
                to="singleNews"
                aria-label="خبراء يؤكدون أن التطور في المبيدات الحيوية يمكن أن يقلل من تأثيرات المواد الكيميائية الضارة."
              >
                خبراء يؤكدون أن التطور في المبيدات الحيوية يمكن أن يقلل من
                تأثيرات المواد الكيميائية الضارة.
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
