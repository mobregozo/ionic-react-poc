import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonAvatar,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,
  IonItem,
  IonButtons,
  IonBackButton
} from "@ionic/react";
import { useParams } from "react-router-dom";

import { Salary } from "../../components/SalaryList";
import "./SalaryDetailPage.css";

type Props = {
  salary?: Salary;
};

type Technology = {
  name: string;
  icon: string;
};

type Member = {
  name: string;
  avatar: string;
  yearsOfExperience: number;
  techStack?: Technology[];
};

const members: Member[] = [
  {
    name: "Manu",
    yearsOfExperience: 10,
    avatar:
      "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
  },
  {
    name: "Pablo",
    yearsOfExperience: 7,
    avatar:
      "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
  }
];

const SalaryDetailPage: React.FC = () => {
  const { id } = useParams();

  const salary = {
    company: id,
    amount: 2000
  };

  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{salary.company}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="page-header" fixed>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>{salary.company}</IonCardSubtitle>
              <IonCardTitle>$ {salary.amount}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Bienvenido Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Error, magni. Cupiditate at exercitationem, necessitatibus
              quia commodi omnis neque quasi, ratione quam eum repellat
              inventore eos assumenda quas nobis nulla saepe.
            </IonCardContent>
          </IonCard>
          <IonItem lines="none">Reviews</IonItem>
          {members.map((member: Member) => (
            <IonItem key={member.name}>
              <IonAvatar slot="start">
                <img
                  alt="member"
                  src="https://previews.123rf.com/images/yupiramos/yupiramos1804/yupiramos180421549/100217342-doctor-professional-avatar-character-vector-illustration-design.jpg"
                />
              </IonAvatar>
              <IonLabel>{member.name}</IonLabel>
            </IonItem>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SalaryDetailPage;
