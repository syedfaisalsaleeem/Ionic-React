import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol,IonSearchbar,IonCard,IonCardContent ,IonLabel,IonList,IonItem} from '@ionic/react';
import DayWeekMonth from "./DayWeekMonth.jsx";

export default function TransctionHistoryList(){
    return(
        <div>
            <IonCard>
            <IonCardContent>
            <IonList>
                <IonItem>
                    <IonGrid>
                    <IonRow size="12" className="ion-justify-content-center ion-align-items-center">
                        <IonCol size="7" className="ion-justify-content-center ion-align-items-center">
                            <IonRow size="12">
                                <p>Transaction Title </p>
                            </IonRow>
                            <IonRow  size="12">
                                <p>00:00 AM/PM</p>
                            </IonRow>
                        </IonCol>
                        <IonCol size="5" className="ion-justify-content-center ion-align-items-center"  >
                            <p style={{"fontSize":"14px","textAlign":"end","justifyContent":"end","alignContent":"end","background":"transparent"}}>+000,000.00 </p>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                </IonItem>
                <IonItem>
                <IonGrid>
                    <IonRow size="12" className="ion-justify-content-center ion-align-items-center">
                        <IonCol size="7" className="ion-justify-content-center ion-align-items-center">
                            <IonRow size="12">
                                <p>Transaction Title </p>
                            </IonRow>
                            <IonRow  size="12">
                                <p>00:00 AM/PM</p>
                            </IonRow>
                        </IonCol>
                        <IonCol size="5" className="ion-justify-content-center ion-align-items-center"  >
                            <p style={{"fontSize":"14px","textAlign":"end","justifyContent":"end","alignContent":"end","background":"transparent"}}>+000,000.00 </p>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                </IonItem>
                <IonItem>
                <IonGrid>
                    <IonRow size="12" className="ion-justify-content-center ion-align-items-center">
                        <IonCol size="7" className="ion-justify-content-center ion-align-items-center">
                            <IonRow size="12">
                                <p>Transaction Title </p>
                            </IonRow>
                            <IonRow  size="12">
                                <p>00:00 AM/PM</p>
                            </IonRow>
                        </IonCol>
                        <IonCol size="5" className="ion-justify-content-center ion-align-items-center"  >
                            <p style={{"fontSize":"14px","textAlign":"end","justifyContent":"end","alignContent":"end","background":"transparent"}}>+000,000.00 </p>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                </IonItem>
                <IonItem>
                <IonGrid>
                    <IonRow size="12" className="ion-justify-content-center ion-align-items-center">
                        <IonCol size="7" className="ion-justify-content-center ion-align-items-center">
                            <IonRow size="12">
                                <p>Transaction Title </p>
                            </IonRow>
                            <IonRow  size="12">
                                <p>00:00 AM/PM</p>
                            </IonRow>
                        </IonCol>
                        <IonCol size="5" className="ion-justify-content-center ion-align-items-center"  >
                            <p style={{"fontSize":"14px","textAlign":"end","justifyContent":"end","alignContent":"end","background":"transparent"}}>+000,000.00 </p>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                </IonItem>
                <IonItem>
                <IonGrid>
                    <IonRow size="12" className="ion-justify-content-center ion-align-items-center">
                        <IonCol size="7" className="ion-justify-content-center ion-align-items-center">
                            <IonRow size="12">
                                <p>Transaction Title </p>
                            </IonRow>
                            <IonRow  size="12">
                                <p>00:00 AM/PM</p>
                            </IonRow>
                        </IonCol>
                        <IonCol size="5" className="ion-justify-content-center ion-align-items-center"  >
                            <p style={{"fontSize":"14px","textAlign":"end","justifyContent":"end","alignContent":"end","background":"transparent"}}>+000,000.00 </p>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                </IonItem>
                </IonList>
        </IonCardContent>
        </IonCard>
        </div>
    );
}