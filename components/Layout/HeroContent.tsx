import React from "react";
import Typed from "react-typed";
import { ContactDrawer } from "./ContactDrawer";
import BackgroundIcons from "./BackgroundIcons";

export default function HeroContent() {
  return (
    <div className="relative min-h-[90vh] grid place-content-center hero">
      <div className="bg-secondary p-6 rounded-xl">
        <Typed
          className="text-3xl font-medium"
          strings={[
            `Hi there! <br/>
            My name is <span class="text-primary">Viorel</span>, and I'm  <br/> 
            A <span class="text-primary">web developer</span> and <span class="text-primary">UI/UX designer</span>`,
          ]}
          typeSpeed={20}
          backSpeed={30}
          loop={false}
        />
      </div>
      <ContactDrawer buttonType="primary" />
      <BackgroundIcons />
    </div>
  );
}
