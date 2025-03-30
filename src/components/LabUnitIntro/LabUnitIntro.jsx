import React from "react";

function LabUnitIntro() {
  return (
    <>
      <div className="container">
        <h2 className="lab-unit__intro">مقدمة عن وحدة تحليل وتقييم المبيدات</h2>
        <p className="lab-unit__about">
          وحدة تحليل وتقييم المبيدات لقد أنشأت وحدة تحليل وتقييم المبيدات كوحدة
          ذات طابع خاص بالمعمل المركزي للمبيدات لتقوم بدور متميز في خدمة
          الباحثين ورجال الأعمال والشركات في المجالات المتصلة بكيمياء المبيدات
          والكيمياء الحيوية والأعمال المتصلة بمجال Pestic وقاية النبات والبيئة
        </p>
        <div className="lab-unit__content">
          <h3>الخدمات التي تقوم بها الوحدة</h3>
          <ul className="lab-unit__Services" role="list">
            <li className="listitem">
              <i className="fa-solid fa-circle" aria-hidden="true" />
              <p>
                تحليل عينات المبيدات الواردة من الجمارك أو الموجودة داخل
                الجمهورية وتحديد مدى مطابقتها كيماويا للمواصفات القياسية لها كما
                تقوم الوحدة بأعداء شهادة الصلاحية والإفراج من الجمارك للمبيدات
                المطابقة
              </p>
            </li>
            <li className="listitem">
              <i className="fa-solid fa-circle" aria-hidden="true" />
              <p>
                تقدير متبقيات المبيدات في الخضر والفاكهة والحاصلات الزراعية
                والمياة هو وعناصر البيئة المختلفة وتحديد مدى صلاحية هذه العناصر
                للاستخدام الآدمي.
              </p>
            </li>
            <li className="listitem">
              <i className="fa-solid fa-circle" aria-hidden="true" />
              <p>
                تقدير العناصر المعدنية بالأنسجة النباتية والحيوانية والنبات
                والتربة، وكذلك تقدير المعادن الثقيلة الموجودة بعناصر البيئة
                المختلفة وعينات الأسمدة والمبيدات والأنسجة النباتية والحيوانية
                والتربة والمياه.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LabUnitIntro;
