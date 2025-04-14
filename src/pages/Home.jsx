import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import NewsTicker from "../components/NewsTicker/NewsTicker";
import Achievements from "../components/Achievements/Achievements";
import LabRoles from "../components/LabRoles/LabRoles";
import LabRoleSlider from "../components/LabRolesSlider/LabRolesSlider";
import PartnersMember from "../components/PartnersMember/PartnersMember";
import NewsSection from "../components/NewsSection/NewsSection";

function Home() {
  return (
    <>
      <HeroSection />
      <NewsTicker />
      <Achievements />
      <LabRoles />
      {/* <LabRoleSlider /> */}
      <PartnersMember />
      <NewsSection />
    </>
  );
}

export default Home;
