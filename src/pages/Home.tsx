import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonGrid,
  IonSearchbar,
  IonItem,
  IonIcon,
  IonChip,
  IonButton,
  IonCardSubtitle,
  IonCardTitle,
  IonListHeader
} from "@ionic/react";
import "./Home.css";
import { closeCircleOutline } from "ionicons/icons";
import { SalaryList, Salary } from "../components/SalaryList";
import { CreateSalary } from "./CreateSalary";

const Home: React.FC = () => {
  const [showNewSalaryModal, setShowNewSalaryModal] = useState(false);

  const salaries = [
    {
      company: "Frontmen",
      amount: 2000
    },
    {
      company: "Xebia",
      amount: 4000
    },
    {
      company: "Kramp",
      amount: 5000
    }
  ];

  const handleSalaryClick = (salary: Salary) => {
    alert(salary.company);
  };

  const createSalary = () => {
    setShowNewSalaryModal(true);
  };

  const handleNewSalary = () => {
    setShowNewSalaryModal(false);
  };

  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CreateSalary
          showModal={showNewSalaryModal}
          closeModal={handleNewSalary}
        ></CreateSalary>
        <IonGrid className="page-header" fixed>
          <IonCard>
            <img
              alt="barcelona"
              style={{ height: "150px", objectFit: "cover", width: "100%" }}
              src="https://www.eindhovenairport.nl/sites/default/files/styles/header_image_bestemming/public/barcelona_1.jpg?itok=UqE05-BM&c=eb5fe87ae2d5ccb93351e16083d7b920"
            />
            <IonCardHeader>
              <IonCardSubtitle>Barcelona, spain</IonCardSubtitle>
              <IonCardTitle>Job Tracker Salaries</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Bienvenido Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Error, magni. Cupiditate at exercitationem, necessitatibus
              quia commodi omnis neque quasi, ratione quam eum repellat
              inventore eos assumenda quas nobis nulla saepe.
            </IonCardContent>
          </IonCard>
          <IonButton
            className="ion-margin-horizontal"
            onClick={() => {
              createSalary();
            }}
            expand="block"
          >
            Agregar Salario
          </IonButton>

          <IonListHeader color="none" lines="none">
            Buscar Salarios
          </IonListHeader>
          <IonItem lines="none">
            <IonSearchbar className="ion-no-padding"></IonSearchbar>
          </IonItem>

          <IonItem lines="none">
            <IonChip color="primary">
              <IonLabel>Rabobank</IonLabel>
              <IonIcon icon={closeCircleOutline} />
            </IonChip>
          </IonItem>
          <SalaryList salaries={salaries} onSalaryClick={handleSalaryClick} />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
