import React from "react";
import AboutLabSection from "../components/AboutLabSection/AboutLabSection";
import LabManagers from "../components/LabManagers/LabManagers";
import AboutQuote from "../components/AboutQuote/AboutQuote";
import LabRoles from "../components/LabRoles/LabRoles";
import ResearchDepartments from "../components/ResearchDepartments/ResearchDepartments";
import SpecialUnitsGallery from "../components/SpecialUnitsGallery/SpecialUnitsGallery";
import LocalProducts from "../components/LocalProducts/LocalProducts";
import GuidanceSection from "../components/GuidanceSection/GuidanceSection";

function About() {
  return (
    <>
      <AboutLabSection />
      <div className="about-lab__container container">
        <AboutQuote />
        <LabManagers />
        <LabRoles />
        <ResearchDepartments />
        <SpecialUnitsGallery />
        <LocalProducts />
        <GuidanceSection />
      </div>
    </>
  );
}

export default About;
