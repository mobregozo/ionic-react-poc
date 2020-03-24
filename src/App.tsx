import React from "react";
import { Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, settings, person } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/main.css";

const isMobile = navigator.userAgent.match(
  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
);

const isDesktop = !isMobile;

const App: React.FC = () => {
  const desktopStyles = {
    justifyContent: "flex-end"
  };
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Tab1} exact />
            <Route path="/settings" component={Tab2} exact />
            <Route path="/contact" component={Tab3} exact />
          </IonRouterOutlet>

          <IonTabBar
            slot={isDesktop ? "top" : "bottom"}
            style={isDesktop ? desktopStyles : {}}
          >
            <IonTabButton tab="home" href="/home">
              {isMobile && <IonIcon icon={home} />}
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="settings" href="/settings">
              {isMobile && <IonIcon icon={settings} />}
              <IonLabel>Settings</IonLabel>
            </IonTabButton>

            <IonTabButton tab="contact" href="/contact">
              {isMobile && <IonIcon icon={person} />}
              <IonLabel>Contact</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
