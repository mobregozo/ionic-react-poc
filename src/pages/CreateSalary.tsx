import React from "react";
import './CreateSalary.scss';
import {
  IonModal,
  IonButton,
  IonInput,
  IonLabel,
  IonItem,
  IonFooter,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonRange
} from "@ionic/react";

type Props = {
  showModal: boolean;
  closeModal: () => void;
};

export const CreateSalary: React.FC<Props> = ({ showModal, closeModal }) => {
  const saveSalary = () => {
    closeModal();
  };

  return (
    <IonModal swipeToClose={true} onDidDismiss={closeModal} isOpen={showModal}>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={closeModal}>Cerrar</IonButton>
          </IonButtons>
          <IonTitle>Registrar Salario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="modal" >
        <IonItem lines="none">
          <IonLabel position="stacked">Compañia</IonLabel>
          <IonInput className="input" value={""}></IonInput>
        </IonItem>
        <IonItem lines="none">
          <IonLabel position="stacked">Posicion</IonLabel>
          <IonInput className="input" value={""}></IonInput>
        </IonItem>
        <br/>
        <IonItem lines="none">
          <IonLabel>Años de Experiencia</IonLabel>
          <IonSelect value={""} okText="OK" cancelText="Cerrar">
            <IonSelectOption value="1">1</IonSelectOption>
            <IonSelectOption value="2">2</IonSelectOption>
            <IonSelectOption value="3">3</IonSelectOption>
            <IonSelectOption value="4">4</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>Salario</IonLabel>
          <IonRange min={1000} max={2000} color="secondary">
            <IonLabel slot="start">1000</IonLabel>
            <IonLabel slot="end">2000</IonLabel>
          </IonRange>
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonButton
          className="ion-margin"
          expand="block"
          onClick={() => saveSalary()}
        >
          Guardar Salario
        </IonButton>
      </IonFooter>
    </IonModal>
  );
};
