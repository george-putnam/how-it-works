import React from "react";
import ReactDOM from "react-dom";
import Intro from "./components/Intro.js";
import { ParallaxProvider } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";
import SideNav from "./components/SideNav.js";
import { Scene, Controller } from "react-scrollmagic";
import BigTextLittleText from "./components/BigTextLittleText.js";
import HiwOverlap from "./components/HiwOverlap";
import HiwSidebySide from "./components/HiwSidebySide";
import VirtualTouch from "./components/VirtualTouch";

import "./styles.css";
import "./olie.css";

function App() {
  return (
    <div className="App">
      <div className="how-it-works background">
        <div className="hero  flex justify-start lg:justify-center align-center flex-col">
          <h1 className="text-white p-10 z-10 relative">
            Turning sound into touch
          </h1>
          <img
            className="absolute z-0"
            src="https://mrb-code-handover-area.s3.eu-west-2.amazonaws.com/Sandbox/hand.png"
            alt="hand"
          />
        </div>
        <Controller>
          <Scene
            triggerElement="#intro"
            classToggle="visible"
            triggerHook={"onCenter"}
            offset={200}
            duration={"100%"}
            indicators={true}
          >
            <div className="nav sticky z-10">
              <SideNav modifiers="sidenav h-0 " />
            </div>
          </Scene>
        </Controller>
        <Intro />
      </div>
      {/* <ParallaxProvider> */}
      <BigTextLittleText
        bigTextCopy="endless possibilities"
        bigTextTrigger="first-hiw-bigtext"
        littleText="Multiple ultrasound speakers."
        bigTextDesktopSize="hiw-desktop-big-text"
        bigTextMobileSize="hiw-mobile-big-text"
        containerSize="h-screen items-center flex"
        hiwLittleText="hiw-little-text"
        purpleLine={true}
        lineTrigger="first-hiw"
      />

      <div id="second">
        <Controller>
          <Scene
            triggerElement="#second"
            classToggle="visible"
            triggerHook={"onCenter"}
            offset={300}
            duration={"100%"}
            indicators={true}
          >
            <div className="nav sticky z-10">
              <SideNav modifiers="sidenav h-0 purple" />
            </div>
          </Scene>
        </Controller>

        <Fade bottom>
          <div id="algorithms" className="w-full hiw-overlap-background">
            <HiwOverlap
              fullWidth={true}
              textDirection="toutContent w-full relative items-center my-0 sm:mx-auto py-0 flex flex-col-reverse sm:flex-row-reverse text-left"
            />
          </div>
        </Fade>
        <div className="p-10 lg:p-20" />
        <Fade bottom>
          <div id="focal-point" className="w-full">
            <HiwSidebySide
              fullWidth={true}
              textDirection="toutContent w-full items-center relative my-0 mx-auto pb-0 pt-20 sm:py-0 flex flex-col-reverse sm:flex-row-reverse text-left"
            />
          </div>
        </Fade>
      </div>
      <BigTextLittleText
        bigTextCopy="touch"
        bigTextTrigger="second-hiw-bigtext"
        littleText="Now it's wow time"
        bigTextDesktopSize="hiw-desktop-big-text"
        bigTextMobileSize="hiw-mobile-big-text"
        containerSize="h-screen items-center flex"
        hiwLittleText="hiw-little-text"
        purpleLine={true}
        lineTrigger="second-hiw"
      />
      {/* </ParallaxProvider> */}

      {/* <VirtualTouch /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
