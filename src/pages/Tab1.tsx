import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader
} from "@ionic/react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>Sueldo</IonCardHeader>
          <IonCardContent>test</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>HOLA</IonCardHeader>
          <IonCardContent>test</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>HOLA</IonCardHeader>
          <IonCardContent>test</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
