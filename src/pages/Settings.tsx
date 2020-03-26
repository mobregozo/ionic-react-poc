import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Settings.css";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonGrid fixed>
        <IonHeader mode="md">
          <IonToolbar>
            <IonTitle>Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <ExploreContainer name="Profile page" />
        </IonContent>
      </IonGrid>
    </IonPage>
  );
};

export default Settings;
