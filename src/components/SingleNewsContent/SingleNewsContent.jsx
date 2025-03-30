import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import normal_1 from "../../assets/media/images/lab_role/normal-1.jpg";
import normal_2 from "../../assets/media/images/lab_role/normal-2.jpg";
import normal_3 from "../../assets/media/images/lab_role/normal-3.jpg";

const relatedArticles = [
  {
    id: 1,
    imgSrc: normal_1,
    altText: "وصف صورة المقال الأول",
    description:
      "يهدف هذا العمل لدراسة ميكانيكيات المقاومة لمبيد الثياميسوكسام...",
  },
  {
    id: 2,
    imgSrc: normal_2,
    altText: "وصف صورة المقال الثاني",
    description:
      "يهدف هذا العمل لدراسة ميكانيكيات المقاومة لمبيد الثياميسوكسام...",
  },
  {
    id: 3,
    imgSrc: normal_3,
    altText: "وصف صورة المقال الثالث",
    description:
      "يهدف هذا العمل لدراسة ميكانيكيات المقاومة لمبيد الثياميسوكسام...",
  },
];

function SingleNewsContent() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    rtl: true, // لضبط الاتجاه من اليمين لليسار
    arrows: true,
  };

  return (
    <>
      <main className="single-news__content container">
        <article>
          <p className="single-news__text">
            في إطار تعزيز التعاون الإقليمي وتبادل الخبرات العلمية، شاركت
            الدكتورة هالة أبو يوسف - مدير المعمل المركزي للمبيدات بمركز البحوث
            الزراعية، في ورشة العمل الإقليمية التي نظمتها المنظمة العربية
            للتنمية الزراعية بالتعاون مع منظمة الأغذية والزراعة للأمم المتحدة
            (FAO)، والتي أقيمت بدولة المغرب.
          </p>
          <p className="single-news__text">
            و من جانبها، أوضحت الدكتورة هالة أبو يوسف أن ورشة العمل التي حملت
            عنوان:
            <strong>
              "الإدارة البيئية السليمة للمبيدات المنتهية الصلاحية في الدول
              العربية"
            </strong>
            ، ركزت على دراسة الوضع الحالي لهذه المبيدات في الدول المشاركة
            وتأثيراتها البيئية، إضافة إلى طرح حلول عملية للتخلص الآمن منها بطرق
            صديقة للبيئة.
          </p>
          <h2>محاور العرض التقديمي</h2>
          <ul className="single-news__list">
            <li>استعراض الإطار التشريعي والتنظيمي لإدارة المبيدات في مصر.</li>
            <li>
              منهجيات التخلص الآمن من المبيدات بالتعاون مع الجهات الوطنية
              والدولية.
            </li>
            <li>
              المبادرات التي أطلقها المعمل المركزي للمبيدات لتوعية المزارعين
              بأهمية الإدارة السليمة للمبيدات.
            </li>
          </ul>
          <h2>التوصيات النهائية للورشة</h2>
          <ul className="single-news__list">
            <li>
              وضع خطط إقليمية للتخلص من المخزون المتراكم من المبيدات المنتهية
              الصلاحية.
            </li>
            <li>
              تعزيز التعاون بين الدول العربية لتطوير تقنيات متقدمة وآمنة في هذا
              المجال.
            </li>
          </ul>
        </article>
      </main>

      {/* Slider */}
      <section className="container" aria-labelledby="related-articles">
        <h2 id="related-articles">مقالات ذات صلة</h2>
        <Slider {...settings}>
          {relatedArticles.map((article) => (
            <div key={article.id} className="related-slide">
              <a href="#" className="related">
                <span className="related__badge">مقال</span>
                <img
                  className="related__img"
                  src={article.imgSrc}
                  alt={article.altText}
                />
                <div className="related-content">
                  <p className="related__description">{article.description}</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}

export default SingleNewsContent;
