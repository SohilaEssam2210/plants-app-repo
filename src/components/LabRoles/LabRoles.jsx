import React from "react";

function LabRoles() {
  return (
    <section className="features">
      <div className="container">
        <h2 className="single-title">ما هي اهدافنا وما هو دورنا الرئيسي</h2>
        <section className="goals" aria-labelledby="goals-title">
          <div className="features__content">
            <ul className="features__list">
              <li className="feature">
                <div className="feature__details">
                  <h3>إشراف الدولة</h3>
                  <p>
                    التأكد من مطابقة المبيدات للمواصفات العالمية ومراقبة
                    استيرادها وإنتاجها وبيعها محلياً.
                  </p>
                </div>
                <div className="feature__icon" aria-hidden="true">
                  <i className="fas fa-landmark" />
                </div>
              </li>
              <li className="feature">
                <div className="feature__details">
                  <h3>حمايه البيئة</h3>
                  <p>
                    مراقبة آثار المبيدات في البيئة المصرية (تربة، ماء، نبات،
                    حيوان) ووضع ضوابط الاستخدام الأمثل.
                  </p>
                </div>
                <div className="feature__icon" aria-hidden="true">
                  <i className="fas fa-recycle" />
                </div>
              </li>
              <li className="feature">
                <div className="feature__details">
                  <h3>الرقابة على التداول</h3>
                  <p>
                    ضبط المبيدات المغشوشة والتأكد من صلاحية المبيدات المعروضة في
                    الأسواق والمحلات.
                  </p>
                </div>
                <div className="feature__icon" aria-hidden="true">
                  <i className="fas fa-search" />
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="duty" aria-labelledby="duty-title">
          <div className="features__content">
            <ul className="features__list">
              <li className="feature">
                <div className="feature__details">
                  <h3>تسجيل المبيدات</h3>
                  <p>
                    تحليل عينات المبيدات وتجريبها تحت ظروف البيئة المصرية لمدة
                    موسمين زراعيين.
                  </p>
                </div>
                <div className="feature__icon" aria-hidden="true">
                  <i className="fas fa-vial" />
                </div>
              </li>
              <li className="feature">
                <div className="feature__details">
                  <h3>رصد متبقيات المبيدات</h3>
                  <p>
                    تحليل متبقيات المبيدات في الخضر والفاكهة للتأكد من مطابقتها
                    للحدود المسموح بها.
                  </p>
                </div>
                <div className="feature__icon" aria-hidden="true">
                  <i className="fas fa-seedling" />
                </div>
              </li>
              <li className="feature">
                <div className="feature__details">
                  <h3>الرقابة على المبيدات</h3>
                  <p>
                    سحب العينات من المبيدات الواردة من الخارج أو المجهزة محلياً
                    وفحصها للتأكد من جودتها.
                  </p>
                </div>
                <div className="feature__icon" aria-hidden="true">
                  <i className="fas fa-shield-alt" />
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}

export default LabRoles;
