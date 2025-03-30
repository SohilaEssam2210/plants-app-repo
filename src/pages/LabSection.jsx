import React from "react";
import HeroLabSection from "../components/HeroLabSection/HeroLabSection";
import GoalSection from "../components/GoalSection/GoalSection";
import VisionSection from "../components/VisionSection/VisionSection";
import ResearchersSection from "../components/ResearchersSection/ResearchersSection";
import MissionSection from "../components/MissionSection/MissionSection";

export const LabSection = () => {
  return (
    <main class="lab-section">
    <HeroLabSection />
      <div class="lab-section__container container ">
      <GoalSection />
      <VisionSection />
      <ResearchersSection />
      <MissionSection />
      </div>
    </main>
  );
};
