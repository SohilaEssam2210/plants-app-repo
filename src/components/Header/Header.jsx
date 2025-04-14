import React from "react";
import Logo from "../../assets/media/lab_logo.jpg";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={styles.Header}>
      <header
        className={`${isHomePage ? "main-header" : "main-header sec-header"}`}
      >
        <nav className="main-nav container" aria-label="Main Navigation">
          <div className="nav-wrapper">
            <Link to="/" className="nav-logo flex-center">
              <img
                className="logo"
                src={Logo}
                alt="شعار المعمل المركزي للمبيدات"
              />
            </Link>
            <button
              className="nav-toggle"
              id="nav-toggle"
              aria-label="Toggle navigation"
              aria-expanded="false"
              aria-controls="nav-menu"
            >
              <i className="fa-solid fa-bars nav-burger" />
              <i className="fa-solid fa-xmark nav-close" />
            </button>
          </div>
          <div className="nav-menu" id="nav-menu">
            <ul className="nav-list">
              <li>
                <Link to="/" className="nav-link">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  عن المعمل
                </Link>
              </li>
              <li className="dropdown-item">
                <button
                  className="nav-link link-arrow"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  أقسام المعمل <i className="fa-solid fa-chevron-down arrow" />
                </button>
                <ul className="dropdown-menu dropdown-menu-grid">
                  <li>
                    <Link
                      to="/labSection"
                      className="dropdown-sublink sub-nav-link"
                    >
                      قسم بحوث تحليل المبيدات
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/labSection"
                      className="dropdown-sublink sub-nav-link"
                    >
                      قسم الاختبارات والبحوث الحيوية
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/labSection"
                      className="dropdown-sublink sub-nav-link"
                    >
                      قسم بحوث سمية المبيدات والآثار الإضافية
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/labSection"
                      className="dropdown-sublink sub-nav-link"
                    >
                      قسم بحوث سمية المبيدات للنباتات
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/labSection"
                      className="dropdown-sublink sub-nav-link"
                    >
                      قسم بحوث مقاومة المبيدات الحشرية
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/labSection"
                      className="dropdown-sublink sub-nav-link"
                    >
                      قسم بحوث فاعلية المبيدات الحشرية
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/labSection"
                      className="dropdown-sublink sub-nav-link"
                    >
                      قسم بحوث التربية البيئية
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/labSection"
                      className="dropdown-sublink sub-nav-link"
                    >
                      قسم بحوث مستحضرات المبيدات
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/labSection"
                      className="dropdown-sublink sub-nav-link"
                    >
                      قسم بحوث تقنيات المبيدات وتأثير البيئة
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/labSection"
                      className="dropdown-sublink sub-nav-link"
                    >
                      قسم بحوث المبيدات الطبيعية والبيولوجية
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown-item">
                <button
                  className="nav-link link-arrow"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  معامل أخرى <i className="fa-solid fa-chevron-down arrow" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/anotherLab"
                      className="dropdown-link sub-nav-link"
                    >
                      معمل 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/anotherLab"
                      className="dropdown-link sub-nav-link"
                    >
                      معمل 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown-item">
                <button
                  className="nav-link link-arrow"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  الوحدات
                  <i className="fa-solid fa-chevron-down arrow" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/labUnits" className="dropdown-link sub-nav-link">
                      وحدة تحليل وتقييم المبيدات
                    </Link>
                  </li>
                  <li>
                    <Link to="/labUnits" className="dropdown-link sub-nav-link">
                      وحدة الـ Pyroplant لتصنيع مستحضرات بدائل المبيدات
                    </Link>
                  </li>
                  <li>
                    <Link to="/labUnits" className="dropdown-link sub-nav-link">
                      وحدة البيولوجيا الجزيئية
                    </Link>
                  </li>
                  <li>
                    <Link to="/labUnits" className="dropdown-link sub-nav-link">
                      وحدة تحليل المبيدات الحيوية
                    </Link>
                  </li>
                  <li>
                    <Link to="/labUnits" className="dropdown-link sub-nav-link">
                      وحدة تحليل الأجهزة الدقيقة
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/organizational-structure.svg"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  الهيكل التنظيمي
                </a>
              </li>
              <li>
                <Link to="/serviceCost" className="nav-link">
                  أسعار الخدمات
                </Link>
              </li>
            </ul>
            <div className="login">
              <Link to="/login" className="btn">
                <span>Login</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
