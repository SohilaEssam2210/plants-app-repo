import React from 'react';
import styles from './Footer.module.css';
import Logo from "../../assets/media/lab_logo.jpg";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className={styles.Footer}>
      <footer className="footer">
        <div className="footer__container container">
          {/* Logo and About Section */}
          <div className="footer__about">
            <Link to="/" className="footer__logo">
              <img
                className="logo"
                src={Logo}
                alt="شعار المعمل المركزي للمبيدات"
              />
            </Link>
            <p className="footer__text">
              إشراف الدولة على تداول المبيدات والصادرات الزراعية المصرية.
            </p>
            {/* Contact Information */}
            <div className="footer__contact">
              <h3 className="footer__title">تواصل معنا</h3>
              <ul className="footer__contact-list">
                <li className="footer__contact-item">
                  <Link to="contact.html">للتواصل</Link>
                </li>
                <li className="footer__contact-item">
                  <i className="fas fa-map-marker-alt" />
                  <Link
                    to="https://maps.app.goo.gl/YFDGVLZ6z2teX5qe8"
                    target="_blank"
                  >
                    الدقي جيزه، مصر
                  </Link>
                </li>
                <li className="footer__contact-item">
                  <i className="fas fa-phone" />{" "}
                  <Link to="tel:+20123456789" className="footer__link">
                    +20 123 456 789
                  </Link>
                </li>
                <li className="footer__contact-item">
                  <i className="fas fa-envelope" />{" "}
                  <Link to="mailto:info@example.com" className="footer__link">
                    info@example.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__icons">
              <Link
                to="https://www.facebook.com/profile.php?id=100091784664030"
                className="footer__icon"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/central-agricultural-pesticide-laboratory---capl/about/"
                className="footer__icon"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </div>
          </div>
          {/* Navigation Links (Replicated from Header) */}
          <div className="footer__links footeLink-to">
            <h3 className="footer__title">روابط سريعة</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  الرئيسيه
                </Link>
              </li>
              <li className="footer__item">
                <Link to="about" className="footer__link">
                  عن المعمل
                </Link>
              </li>
              <li className="footer__item">
                <a
                  href="/organizational-structure.svg"
                  className="footer__link"
                  target="_blank"
                >
                  الهيكل التنظيمي
                </a>
              </li>
              <li className="footer__item">
                <Link to="serviceCost" className="footer__link">
                  اسعار الخدمات
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__links footeLink-to">
            <h3 className="footer__title">معامل اخرى</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="anotherLab" className="footer__link">
                  معمل 1
                </Link>
              </li>
              <li className="footer__item">
                <Link to="anotherLab" className="footer__link">
                  معمل 2
                </Link>
              </li>
            </ul>
          </div>
          {/* Email Subscription Form */}
          <div className="footer__links footeLink-to">
            <h3 className="footer__title">الوحدات</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="labUnits" className="footer__link">
                  وحدة تحليل وتقييم المبيدات
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labUnits" className="footer__link">
                  وحدة الـ Pyroplant لتصنيع مستحضرات بدائل المبيدات
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labUnits" className="footer__link">
                  وحدة البيولوجيا الجزيئية
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labUnits" className="footer__link">
                  وحدة تحليل المبيدات الحيوية
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labUnits" className="footer__link">
                  وحدة تحليل الأجهزة الدقيقة
                </Link>
              </li>
            </ul>
          </div>
          {/* All 10 Sections (Organized Under Each Other) */}
          <div className="footer__sections footeLink-to">
            <h3 className="footer__title">أقسام المعمل</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="labSection" className="footer__link">
                  قسم بحوث تحليل المبيدات
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labSection" className="footer__link">
                  قسم الاختبارات والبحوث الحيوية
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labSection" className="footer__link">
                  قسم بحوث سمية المبيدات والآثار الإضافية
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labSection" className="footer__link">
                  قسم بحوث سمية المبيدات للنباتات
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labSection" className="footer__link">
                  قسم بحوث مقاومة المبيدات الحشرية
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labSection" className="footer__link">
                  قسم بحوث فاعلية المبيدات الحشرية
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labSection" className="footer__link">
                  قسم بحوث التربية البيئية
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labSection" className="footer__link">
                  قسم بحوث مستحضرات المبيدات
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labSection" className="footer__link">
                  قسم بحوث تقنيات المبيدات وتأثير البيئة
                </Link>
              </li>
              <li className="footer__item">
                <Link to="labSection" className="footer__link">
                  قسم بحوث المبيدات الطبيعية والبيولوجية
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom (Copyright) */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            جميع الحقوق محفوظة © 2025 المعمل المركزي للمبيدات
          </p>
        </div>
      </footer>
    </div>
  );
};


export default Footer;
