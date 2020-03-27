import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle
} from "@ionic/react";
import "./Settings.css";
import { moon } from "ionicons/icons";

const Settings: React.FC = () => {
  const toggleDarkMode = (event: any) => {
    document.body.classList.toggle("dark", event.detail.checked);
  };

  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="page-header" fixed>
          <IonItem lines="none">
            <IonIcon slot="start" icon={moon}></IonIcon>
            <IonLabel>Activar Dark Mode</IonLabel>
            <IonToggle
              onIonChange={(e) => toggleDarkMode(e)}
              slot="end"
            ></IonToggle>
          </IonItem>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
