import React from "react";
import { Scene, Controller } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import styled from "styled-components";

const AnimationStyle = styled.div`
  .speaker {
    top: 0;
    position: relative;
    width: 100%;
    z-index: 10000;
  }
`;

class Intro extends React.Component {
  render() {
    return (
      <div id="intro" className="intro show-nav">
        <div id="speaker" className="flex justify-end">
          <div className="lg:w-2/4 intro-blurb p-8 lg:p-0 text-left">
            <p className="title uppercase text-white">1. Ultrasoinc Speaker</p>
            <h3 className="w-10/12 pt-10 lg:w-7/12">
              It starts with one small ultrasound speaker.
            </h3>
            <p className="text-white pt-5 w-2/3 lg:w-1/3">
              This small speaker emits ultrasound waves. These sound waves are
              too high a frequency for us to hear.{" "}
            </p>
          </div>
        </div>

        <div id="array" className="flex justify-start">
          <div className="lg:w-2/4  relative">
            <div className="array text-left p-8 lg:p-0 w-3/5 z-10 relative lg:absolute">
              <p className="title uppercase text-white">2. Array</p>
              <h3 className="pt-10 ">
                We put lots of these speakers together to create an array.
              </h3>
              <p className="text-white pt-5 lg:w-2/3">
                Each array of ultrasound speakers is fitted with a hand tracking
                device, which tracks any hand movements above it.
              </p>
            </div>
            <div className="animation product-mobile absolute">
              <div className="pipe-mobile absolute">
                <Controller>
                  <Scene
                    triggerElement="#intro"
                    classToggle="settle"
                    triggerHook={"onLeave"}
                    offset={-650}
                    duration={0}
                    reverse={false}
                  >
                    <img
                      className="speaker-mobile absolute"
                      src="https://mrb-code-handover-area.s3.eu-west-2.amazonaws.com/Sandbox/speaker.png"
                      alt="speaker"
                    />
                  </Scene>
                </Controller>
              </div>
              <img
                className="z-0"
                src="https://mrb-code-handover-area.s3.eu-west-2.amazonaws.com/Sandbox/product.png"
                alt="product"
              />
            </div>
          </div>
          <div className="w-1/1 lg:w-2/4">
            <div className="animation relative">
              <div className="pipe absolute">
                <Controller>
                  <Scene
                    triggerElement="#intro"
                    triggerHook={"onLeave"}
                    duration={500}
                  >
                    {progress => (
                      <Tween
                        to={{
                          top: "92%"
                        }}
                        totalProgress={progress}
                        paused
                      >
                        <img
                          className="speaker absolute"
                          src="https://mrb-code-handover-area.s3.eu-west-2.amazonaws.com/Sandbox/speaker.png"
                          alt="speaker"
                        />
                      </Tween>
                    )}
                  </Scene>
                </Controller>
              </div>
              <img
                className="product-desktop"
                src="https://mrb-code-handover-area.s3.eu-west-2.amazonaws.com/Sandbox/product.png"
                alt="product"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
