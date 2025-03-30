import React from "react";

function LabServicesPrices() {
  return (
    <>
      <main className="services-cost-container">
        <h1 className="services-cost-title">
          أسعار خدمات المعمل المركزي للمبيدات
        </h1>
        <table className="container">
          <thead>
            <tr>
              <th scope="col">الخدمة</th>
              <th scope="col">التكلفة (جنيه مصري)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="الخدمة">تحليل متبقيات المبيدات في الخضر</td>
              <td data-label="التكلفة">1500 ج</td>
            </tr>
            <tr>
              <td data-label="الخدمة">تحليل المبيدات في الفاكهة</td>
              <td data-label="التكلفة">200 ج</td>
            </tr>
            <tr>
              <td data-label="الخدمة">تحليل متبقيات المبيدات في التربة</td>
              <td data-label="التكلفة">1800 ج</td>
            </tr>
            <tr>
              <td data-label="الخدمة">تحليل سمية المبيدات للثدييات</td>
              <td data-label="التكلفة">2500 ج</td>
            </tr>
            <tr>
              <td data-label="الخدمة">تحليل سمية المبيدات للأحياء المائية</td>
              <td data-label="التكلفة">2200 ج</td>
            </tr>
            <tr>
              <td data-label="الخدمة">تحليل مستحضرات المبيدات</td>
              <td data-label="التكلفة">1700 ج</td>
            </tr>
            <tr>
              <td data-label="الخدمة">تحليل مقاومة الآفات للمبيدات</td>
              <td data-label="التكلفة">3000 ج</td>
            </tr>
            <tr>
              <td data-label="الخدمة">تحليل المبيدات الفطرية والبكتيرية</td>
              <td data-label="التكلفة">2100 ج</td>
            </tr>
            <tr>
              <td data-label="الخدمة">تحليل المبيدات النيماتودية</td>
              <td data-label="التكلفة">1900 ج</td>
            </tr>
            <tr>
              <td data-label="الخدمة">تحليل الأجهزة الدقيقة للمبيدات</td>
              <td data-label="التكلفة">3500 ج</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export default LabServicesPrices;
