import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonAvatar,
  IonListHeader,
  IonLabel,
  IonItemDivider,
  IonItem,
  IonToggle,
  IonBadge
} from "@ionic/react";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonGrid fixed>
        <IonHeader mode="md">
          <IonToolbar>
            <IonTitle>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding-top">
          <IonAvatar class="ion-margin-start">
            <img
              alt="avatar "
              src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png"
            />
          </IonAvatar>
          <IonListHeader>
            <h1>Carlos Perez</h1>
          </IonListHeader>

          <IonItem lines={"none"} mode="ios">
            <IonLabel>Notificationes </IonLabel>
            <IonToggle />
          </IonItem>
          <IonItem>
            <IonLabel>Sueldo Actual</IonLabel>
            <IonBadge slot="end">22</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Años de experiencia</IonLabel>
            <IonBadge color="secondary" slot="end">22</IonBadge>
          </IonItem>
        </IonContent>
      </IonGrid>
    </IonPage>
  );
};

export default Profile;
