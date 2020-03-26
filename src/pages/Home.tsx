import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonGrid,
  IonSearchbar,
  IonBadge,
  IonItem,
  IonIcon,
  IonButton
} from "@ionic/react";
import "./Home.css";
import { closeCircleOutline } from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonGrid fixed>
        <IonHeader mode="md">
          <IonToolbar>
            <IonTitle>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding-top">
          <p>Buscar Sueldos</p>
          <IonSearchbar></IonSearchbar>
          <IonItem>
            <IonButton className="ion-margin-end" color="primary">
              Barcelona <IonIcon class="ion-margin-start" icon={closeCircleOutline} />
            </IonButton>
            <IonButton className="ion-margin-end" color="secondary">
              JavaScript <IonIcon class="ion-margin-start" icon={closeCircleOutline} />
            </IonButton>
            <IonButton className="ion-margin-end" color="tertiary">
              Senior <IonIcon class="ion-margin-start" icon={closeCircleOutline} />
            </IonButton>
          </IonItem>
          <IonCard>
            <IonCardHeader>Sueldo x </IonCardHeader>
            <IonCardContent>2000 €</IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>Sueldo x </IonCardHeader>
            <IonCardContent>2000 €</IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>Sueldo x </IonCardHeader>
            <IonCardContent>2000 €</IonCardContent>
          </IonCard>
        </IonContent>
      </IonGrid>
    </IonPage>
  );
};

export default Home;
