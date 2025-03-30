import React from "react";
import heroImg from "../assets/media/images/lab_role/hero-3.jpg";
import GoalSection from "../components/GoalSection/GoalSection";
import VisionSection from "../components/VisionSection/VisionSection";
import ResearchersSection from "../components/ResearchersSection/ResearchersSection";
import MissionSection from "../components/MissionSection/MissionSection";

function AnotherLab() {
  return (
    <main class="lab-section">
      <div className="lab-section__header">
        <img className="lab-section__image" src={heroImg} alt="صورة المقال" />
        <div className="lab-section__overlay">
          {/* Section Heading */}
          <h1 className="lab-section__title">معمل أخر</h1>
          <p className="lab-section__subtitle">
            هذا معمل فرعي من المعمل المركزي للمبيدات
          </p>
        </div>
      </div>
      <div class="lab-section__container container ">
        <GoalSection />
        <VisionSection />
        <ResearchersSection />
        <MissionSection />
      </div>
    </main>
  );
}

export default AnotherLab;
