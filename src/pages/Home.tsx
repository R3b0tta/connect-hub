import React from "react";
import { MainHeader } from "../components/MainHeader";
import { WhatIsCpaComponent } from "../components/WhatIsCpaComponent";
import { Blog } from "../components/Blog";
import { WhyWeComponent } from "../components/WhyWeComponent";
import { FrequentQuestionsComponent } from "../components/FrequentQuestionsComponent";
import { Footer } from "../components/Footer";

export const Home: React.FC = () => {
  return (
    <>
      <MainHeader />
      <WhatIsCpaComponent />
      <Blog />
      <WhyWeComponent />
      <FrequentQuestionsComponent />
      <Footer />
    </>
  );
};
