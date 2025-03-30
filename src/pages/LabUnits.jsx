import React from "react";
import LabUnitIntro from "../components/LabUnitIntro/LabUnitIntro";
import hero_1 from "../assets/media/images/lab_role/hero-1.jpg";
export const LabUnits = () => {
  return (
    <>
      <div className="lab-unit__header">
        <img
          className="lab-unit__image"
          src={hero_1}
          alt="وحدة تحليل وتقييم المبيدات"
        />
        <div className="lab-unit__overlay">
          {/* unit Heading */}
          <h1 id="lab-unit-heading" className="lab-unit__title">
            وحدة تحليل وتقييم المبيدات
          </h1>
        </div>
      </div>

      <div className="lab-unit__container">
      <LabUnitIntro />
      </div>
    </>
  );
};
