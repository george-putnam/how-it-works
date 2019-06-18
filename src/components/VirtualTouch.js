import React from "react";
import { Scene, Controller } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const TimelineComponent = () => (
  <Timeline
    target={<div>Target element which will be visible and gets tweened</div>}
  >
    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
    <Tween to={{ x: "50px" }} />
  </Timeline>
);

const VirtualTouch = () => (
  <div id="cycle" className="cycle h-screen w-full background ">
    <Controller>
      <Scene
        duration={100}
        pin={"true"}
        reverse={true}
        indicators={true}
        offset={0}
      >
        {(progress, event) => {
          // console.log(progress);

          return (
            <div>
              <Tween
                duration={2}
                to={{
                  opacity: 0.1,
                  color: "purple",
                  ease: "Elastic.easeInOut"
                }}
                paused
                playState={
                  event.scrollDirection === "FORWARD"
                    ? "play"
                    : event.scrollDirection === "REVERSE"
                    ? "reverse"
                    : null
                }
              >
                <h2>Hello Sir!</h2>
              </Tween>
            </div>
          );
        }}
      </Scene>
    </Controller>
  </div>
);
export default VirtualTouch;
