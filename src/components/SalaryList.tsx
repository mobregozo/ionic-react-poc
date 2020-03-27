import React from 'react';
import {IonCard, IonCardContent, IonCardHeader} from  '@ionic/react';
import './SalaryList.scss';

export type Salary = {
  company: string;
  amount: number;
}

type Props = {
  salaries: Salary[];
  onSalaryClick: (salary: Salary) => void;
}

const isMobile = navigator.userAgent.match(
  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
);

export const SalaryList: React.FC<Props> = ({ salaries, onSalaryClick }) => {
  return (
    <>
      {salaries.map((salary, index) => (
        <IonCard  className="animated-car" key={index} href="" routerLink={`/home/${salary.company}`}>
          <IonCardHeader>{salary.company} </IonCardHeader>
          <IonCardContent>{salary.amount} €</IonCardContent>
        </IonCard>
      ))}
    </>
  );

};