import React from "react";

function AboutQuote() {
  return (
    <>
      <section
        className="about-lab__section about-lab__history"
        id="history"
        aria-labelledby="history-heading"
      >
        <div className="about-lab__history-qute">
          <i className="fa-solid fa-quote-left" />
          <i className="fa-solid fa-quote-right" />
          <h2 className="about-lab__title" id="history-heading">
            الماضي والحاضر
          </h2>
          <p className="about-lab__paragraph">
            بدأ العمل في إنشاء مبنى المعمل عام 1962 وتم الانتهاء منه وتجهيزه
            وبدأ العمل به في مارس 1970. أصبح المعمل مستقلاً بذاته تابعاً لمركز
            البحوث الزراعية في 30 يناير 1983. يعتبر المعمل كياناً متكاملاً في
            مجال بحوث مبيدات الآفات الزراعية والرقابة عليها.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutQuote;
