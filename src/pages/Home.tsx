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
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
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

export default Home;
