import React from "react";
import hero_img from "../../assets/media/hero-image.jpg";
import lab_logo from "../../assets/media/lab_logo.jpg";
import normal_1 from "../../assets/media/images/lab_role/normal-1.jpg";
import normal_2 from "../../assets/media/images/lab_role/normal-2.jpg";
import normal_3 from "../../assets/media/images/lab_role/normal-3.jpg";
import normal_4 from "../../assets/media/images/lab_role/normal-5.jpg";


function NewsSection() {
  return (
    <>
      <section className="news" aria-labelledby="news-heading">
        <div className="special-title">
          <p className="special-title__text">
            تابع أحدث الأخبار والمقالات حول المبيدات والمنتجات الزراعية لضمان
            جودة وأمان الاستخدام.
          </p>
          <h2 className="special-title__title" id="news-heading">
            آخر الأخبار والمقالات
          </h2>
        </div>
        <div className="news__container container">
          {/* Main Article */}
          <div className="main-content">
            <article
              className="news__main"
              role="article"
              aria-label="مقالة رئيسية: مشاركة الدكتورة هالة أبو يوسف في ورشة العمل الإقليمية"
            >
              <a href="single-news.html">
                <div className="news__image">
                  <span className="news__badge">أخبار</span>
                  <img
                    className="news__img"
                    src={hero_img}
                    alt="صورة توضيحية لورشة العمل الإقليمية"
                  />
                </div>
                <p className="news__description">
                  {`في إطار تعزيز التعاون الإقليمي وتبادل الخبرات العلمية، شاركت
                  الدكتورة هالة أبو يوسف - مدير المعمل المركزي للمبيدات بمركز
                  البحوث الزراعية في ورشة العمل الإقليمية التي نظمتها المنظمة
                  العربية للتنمية الزراعية بالتعاون مع منظمة الأغذية والزراعة
                  للأمم المتحدة (FAO) والتي اقيمت بدولة المغرب وفي إطار توجيهات
                  وزير الزراعة واستصلاح الأراضي علاء فاروق وبرعاية الدكتور عادل
                  عبد العظيم رئيس مركز البحوث الزراعية`.slice(0, 150)}...
                </p>
                <div className="news__info">
                  <div className="news__details">
                    <h2 className="news__author">احمد محمود</h2>
                    <strong className="news__date">12 - June</strong>
                  </div>
                </div>
              </a>
            </article>
            <article
              className="news__main"
              role="article"
              aria-label="مقالة رئيسية: دراسة ميكانيكيات المقاومة لمبيد الثياميسوكسام"
            >
              <a href="single-news.html">
                <div className="news__image">
                  <span className="news__badge">مقال</span>
                  <img
                    className="news__img"
                    src={normal_1}
                    alt="صورة توضيحية لدراسة ميكانيكيات المقاومة"
                  />
                </div>
                <p className="news__description">
                  {`يهدف هذا العمل لدراسة ميكانيكيات المقاومة لمبيد الثياميسوكسام.
                  و قد أدى الضغط الأنتخابى مدى 12 جيل إلى إرتفاع المقاومة إلى
                  حوالى 48 ضعف الثياميسوكسام . أظهرت المقاومة المشتركة
                  للثياميسوكسام وجود مقاومة مشتركة للبريمكارب و الكربوسلفان.
                  أظهرت السلالة المقاومة لمبيد الثياميسوكسام أرتفاع معنوى لإنزيم
                  الكربوكسيل أستريز مقارنة بالسلالة المعملية بينما
                  الجلوتاثيون-اس-ترنسفيريز و أنزيمات الأكسدة لعبت دور أقل لأظهار
                  صفة المقاومة`.slice(0, 150)}...
                </p>
                <div className="news__info">
                  <img
                    className="news__logo"
                    src={lab_logo}
                    alt="شعار المعمل المركزي للمبيدات"
                  />
                  <div className="news__details">
                    <h2 className="news__author">احمد محمود</h2>
                    <strong className="news__date">12 - June</strong>
                  </div>
                </div>
              </a>
            </article>
          </div>
          {/* Side Articles */}
          <aside className="news__side" aria-label="مقالات جانبية">
            <article
              role="article"
              aria-label="مقال جانبي: دراسة حول مقاومة المبيدات"
            >
              <a href="single-news.html">
                <div className="news__card">
                  <div className="news__text">
                    <span className="news__category">مقال</span>
                    <h3 className="news__title">دراسة حول مقاومة المبيدات</h3>
                    <div className="news__meta">
                      <span className="news__author">حسن محمد</span>
                      <span className="news__time">12 Apr</span>
                    </div>
                  </div>
                  <div className="news__image">
                    <img
                      src={normal_1}
                      alt="صورة توضيحية لدراسة مقاومة المبيدات"
                      className="news__card-img"
                    />
                  </div>
                </div>
              </a>
            </article>
            <article
              role="article"
              aria-label="مقال جانبي: دراسة حول مقاومة المبيدات"
            >
              <a href="single-news.html">
                <div className="news__card">
                  <div className="news__text">
                    <span className="news__category">مقال</span>
                    <h3 className="news__title">دراسة حول مقاومة المبيدات</h3>
                    <div className="news__meta">
                      <span className="news__author">حسن محمد</span>
                      <span className="news__time">12 Apr</span>
                    </div>
                  </div>
                  <div className="news__image">
                    <img
                      src={normal_2}
                      alt="صورة توضيحية لدراسة مقاومة المبيدات"
                      className="news__card-img"
                    />
                  </div>
                </div>
              </a>
            </article>
            <article
              role="article"
              aria-label="مقال جانبي: دراسة حول مقاومة المبيدات"
            >
              <a href="single-news.html">
                <div className="news__card">
                  <div className="news__text">
                    <span className="news__category">مقال</span>
                    <h3 className="news__title">دراسة حول مقاومة المبيدات</h3>
                    <div className="news__meta">
                      <span className="news__author">حسن محمد</span>
                      <span className="news__time">12 Apr</span>
                    </div>
                  </div>
                  <div className="news__image">
                    <img
                      src={normal_3}
                      alt="صورة توضيحية لدراسة مقاومة المبيدات"
                      className="news__card-img"
                    />
                  </div>
                </div>
              </a>
            </article>
            <article
              role="article"
              aria-label="مقال جانبي: دراسة حول مقاومة المبيدات"
            >
              <a href="single-news.html">
                <div className="news__card">
                  <div className="news__text">
                    <span className="news__category">مقال</span>
                    <h3 className="news__title">دراسة حول مقاومة المبيدات</h3>
                    <div className="news__meta">
                      <span className="news__author">حسن محمد</span>
                      <span className="news__time">12 Apr</span>
                    </div>
                  </div>
                  <div className="news__image">
                    <img
                      src={normal_4}
                      alt="صورة توضيحية لدراسة مقاومة المبيدات"
                      className="news__card-img"
                    />
                  </div>
                </div>
              </a>
            </article>
          </aside>
        </div>
        {/* News Videos */}
        <div
          className="news__videos container"
          aria-labelledby="videos-heading"
        >
          <h2 className="single-title" id="videos-heading">
            أخر الفيديوهات
          </h2>
          <div className="video-grid">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              allowFullScreen=""
              title="فيديو 1"
            />
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              allowFullScreen=""
              title="فيديو 2"
            />
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              allowFullScreen=""
              title="فيديو 3"
            />
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_4"
              allowFullScreen=""
              title="فيديو 4"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsSection;
