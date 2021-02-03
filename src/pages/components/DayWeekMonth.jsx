import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol,IonSearchbar,IonChip,IonLabel } from '@ionic/react';

export default function DayWeekMonth(){
    return(
        <div>
            <IonRow>
                <IonCol>
                    <IonChip color="danger" style={{paddingLeft:"30px",paddingRight:"30px"}}>
                        <IonLabel color="dark">Day</IonLabel>
                    </IonChip>
                </IonCol>
            <IonCol>
            <IonChip color="danger" style={{paddingLeft:"30px",paddingRight:"30px"}} outline="true">
                <IonLabel color="dark">Week</IonLabel>
            </IonChip>
            </IonCol>
            <IonCol>
            <IonChip color="danger"  style={{paddingLeft:"30px",paddingRight:"30px"}} outline="true">
                <IonLabel color="dark">Month</IonLabel>
            </IonChip>
            </IonCol>
            </IonRow>
        </div>
    )
}