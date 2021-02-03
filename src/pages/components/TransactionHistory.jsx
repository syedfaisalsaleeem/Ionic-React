import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol,IonSearchbar } from '@ionic/react';
import DayWeekMonth from "./DayWeekMonth.jsx";
import TransactionHistoryList from "./TransactionHistoryList";
export default function TransctionHistory(){
    return(
        <IonGrid>
            <IonRow size="11" className="ion-justify-content-around ion-align-items-center">
                <IonCol size="6" className="ion-justify-content-around ion-align-items-start" >
                    <p style={{"fontSize":"17px","background":"transparent"}}> TransactionHistory </p>
                </IonCol>
                <IonCol size="6" className="ion-justify-content-around ion-align-items-start" >
                    <p style={{"fontSize":"14px","textAlign":"end","justifyContent":"end","alignContent":"end","background":"transparent"}}> View All </p>
                </IonCol>
            </IonRow>
            <DayWeekMonth/>
            <TransactionHistoryList/>
        </IonGrid>
    )
};