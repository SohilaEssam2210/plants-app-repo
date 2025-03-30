import React from "react";

function LocalProducts() {
  return (
    <>
      <section
        className="about-lab__section about-lab__products"
        id="products"
        aria-labelledby="products-heading"
      >
        <h2 className="about-lab__title" id="products-heading">
          المنتجات المحلية وبدائل المبيدات
        </h2>
        <ul className="about-lab__list">
          <li className="about-lab__list-item">
            روتاسين لمكافحة العفن البني في البطاطس (مستخلص نباتي)
          </li>
          <li className="about-lab__list-item">
            Neosemicide لمكافحة مرض النيوزي الذي يصيب النحل
          </li>
          <li className="about-lab__list-item">
            مادة لمكافحة دودة ورق القطن (سيسي 952)
          </li>
          <li className="about-lab__list-item">
            مادة لمكافحة الدودة القارضة (سيسي 90%)
          </li>
          <li className="about-lab__list-item">
            زيت نباتي لمكافحة الآفات الثاقبة الماصة على الخضر
          </li>
          <li className="about-lab__list-item">
            مادة لاصقة لمكافحة القواقع الأرضية
          </li>
        </ul>
      </section>
    </>
  );
}

export default LocalProducts;
