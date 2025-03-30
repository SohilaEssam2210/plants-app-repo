import React, { useState, useEffect, useRef } from "react";
import mediaLab from "../../assets/media/images/lab_role/normal-1.jpg";
import OurPartnersSlider from "../OurPartnersSlider/OurPartnersSlider";

function Achievements() {
  const countersRef = useRef([]);

  const counterData = [
    { target: 250, text: "موظفون محترفون وذوو خبرة لمساعدتك" },
    { target: 40, text: "عدد الأقسام بالمعمل" },
    { target: 430, text: "اختبارات مكتملة بسرعة ودقة" },
    { target: 150, text: "عدد العينات في اليوم" },
  ];

  const [counts, setCounts] = useState(counterData.map(() => 0));

  useEffect(() => {
    const startCounter = (index, target) => {
      let count = 0;
      const increment = target / 100;

      const updateCounter = () => {
        if (count < target) {
          count += increment;
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.floor(count);
            return newCounts;
          });
          requestAnimationFrame(updateCounter);
        } else {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = target;
            return newCounts;
          });
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            startCounter(index, counterData[index].target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((counter, index) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className="atchive">
      <div className="container">
        <div className="special-title">
          <p className="special-title__text">المعمل المركزي للمبيدات</p>
          <h2 className="special-title__title">من نحن</h2>
        </div>
        <div className="atchive__content">
          <article className="atchive__text">
            <h3 className="atchive__subheading">
              نحن معمل سيضمن لك الحصول على أفضل النتائج دائمًا
            </h3>
            <p className="atchive__description">
              تم إنشاء المعمل بناءً على الاتفاقية الموقعة بين منظمة الأغذية
              والزراعة (الفاو) والحكومة المصرية عام 1959 ليصبح أول مؤسسة علمية
              وعملية متكاملة التخصصات في مجال مبيدات الآفات الزراعية في أفريقيا
              والشرق الأوسط.
            </p>
            <ul className="atchive__marks" role="list">
              <li className="atchive__marks-box">
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>نضمن النظافة</span>
              </li>
              <li className="atchive__marks-box">
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>توصيل التقارير بسرعة</span>
              </li>
              <li className="atchive__marks-box">
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>خبراء سحب عينات</span>
              </li>
              <li className="atchive__marks-box">
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>دقة النتائج</span>
              </li>
              <li className="atchive__marks-box">
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>مختبر متطور بدقة عالية</span>
              </li>
              <li className="atchive__marks-box">
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>إجراء اختبار سهل</span>
              </li>
            </ul>
            <a href="contact.html" className="btn" aria-label="للتواصل">
              <span>للتواصل</span>
            </a>
          </article>
          <figure className="atchive__image">
            <img src={mediaLab} alt="مختبر حديث مجهز بأحدث التقنيات" />
          </figure>
        </div>

        {/* 🔹 قسم الإحصائيات */}
        <div className="counter" role="region" aria-label="إحصائيات المعمل">
          {counterData.map((item, index) => (
            <div key={index} className="counter__box">
              <span
                className="counter__number"
                ref={(el) => (countersRef.current[index] = el)}
              >
                {counts[index]}
              </span>
              <span className="counter__mark">+</span>
              <p className="counter__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <OurPartnersSlider />
    </>
  );
}

export default Achievements;
