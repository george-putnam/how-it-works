import React from "react";
import { Scene, Controller } from "react-scrollmagic";

class SideNav extends React.Component {
  render() {
    let width = window.innerWidth;
    if (width > 1350) {
      return (
        <div id="highlight" className={this.props.modifiers}>
          <ul className="text-left text-white">
            <Controller>
              <Scene
                triggerElement="#speaker"
                classToggle="active"
                triggerHook={"onCenter"}
                offset={200}
                duration={"1000"}
                indicators={true}
              >
                <li className="sidenav-item mb-2">
                  <a href="#speaker"> 1. Ultrasonic speaker</a>
                </li>
              </Scene>
              <Scene
                triggerElement="#array"
                classToggle="active"
                triggerHook={"onCenter"}
                offset={375}
                duration={"700"}
                indicators={true}
              >
                <li className="sidenav-item mb-2">
                  <a href="#array">2. Array</a>
                </li>
              </Scene>
              <Scene
                triggerElement="#algorithms"
                classToggle="active"
                triggerHook={"onCenter"}
                // offset={375}
                duration={"700"}
                indicators={true}
              >
                <li className="sidenav-item mb-2">
                  <a href="#algorithms">3. Algorithms</a>
                </li>
              </Scene>

              <Scene
                triggerElement="#focal-point"
                classToggle="active"
                triggerHook={"onCenter"}
                offset={375}
                duration={"700"}
                indicators={true}
              >
                <li className="sidenav-item mb-2">
                  <a href="#focal-point">4. The focal point</a>
                </li>
              </Scene>
            </Controller>

            <Scene>
              <li className="sidenav-item mb-2">5. Pressure point</li>
            </Scene>

            <Scene>
              <li className="sidenav-item mb-2">6. Virtual touch</li>
            </Scene>
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SideNav;
