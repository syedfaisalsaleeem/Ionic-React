import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol,IonSearchbar,IonScroll,IonCardContent,IonCard, IonSlides,IonSlide, IonLabel,IonProgressBar } from '@ionic/react';
import DayWeekMonth from "./DayWeekMonth.jsx";
import logo3 from "../../images/logo3.png";

export default function Investment(){
    return(
        <div>
    <IonSlides pager="true" scrollbar="true" watchOverflow="false" >
      <IonSlide>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

        <IonCard style={{width:"90vw",height:"152px"}}>
            <IonGrid>
                <IonRow size="12">
                    <div style={{paddingLeft:"18px"}}>
                        <p style={{fontSize:"14px",fontFamily:"Lato-Light",color:"#0B1D34",fontWeight:"700"}}> INVESTMENT</p>
                    </div>
                </IonRow>
                <IonRow size="12">
                    <div style={{border: "0.1px solid #E9E9ED",width:"100%",strokeOpacity:"0.1px"}}>
                    </div>
                </IonRow>
                <IonRow size="12" className="ion-justify-content-around ion-align-items-center" style={{marginTop:"5px"}}>
                    <IonCol size="2">
                        <img src={logo3}/>
                    </IonCol>
                    <IonCol>
                        <IonRow>
                            <IonLabel style={{fontSize:"14px",fontFamily:"Lato-Light",color:"#0B1D34",fontWeight:"700"}}>Geneal Investment</IonLabel>
                        </IonRow>
                        <IonRow>
                            <IonLabel style={{fontSize:"11px",fontFamily:"Lato-Light",color:"#0B1D34",fontWeight:"400",marginTop:"3px"}}> 239 Days Left</IonLabel>
                        </IonRow>

                    </IonCol>
                </IonRow>
                <IonRow size="12" className="ion-justify-content-around ion-align-items-center">
                    <IonProgressBar color="primary" value={0.5} style={{height:"9px",width:"80vw"}}></IonProgressBar>
                </IonRow>
                <IonRow  className="ion-justify-content-around ion-align-items-center" style={{marginTop:"0px"}}>
                    <IonCol size="auto">
                        <IonLabel style={{fontSize:"11px",fontFamily:"Lato-Light",color:"#0B1D34"}}> $SGD 00.00</IonLabel>
                    </IonCol>
                    <IonCol size="auto">
                        <IonLabel style={{fontSize:"11px",fontFamily:"Lato-Light",color:"#0B1D34"}}> $SGD 00.00</IonLabel>
                    </IonCol>
                </IonRow>

            </IonGrid>
           
        </IonCard>
        </div>
      </IonSlide>
      <IonSlide>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

        <IonCard style={{width:"90vw",height:"152px"}}>
            <IonGrid>
                <IonRow size="12">
                    <div style={{paddingLeft:"18px"}}>
                        <p style={{fontSize:"14px",fontFamily:"Lato-Light",color:"#0B1D34",fontWeight:"700"}}> INVESTMENT</p>
                    </div>
                </IonRow>
                <IonRow size="12">
                    <div style={{border: "0.1px solid #E9E9ED",width:"100%",strokeOpacity:"0.1px"}}>
                    </div>
                </IonRow>
                <IonRow size="12" className="ion-justify-content-around ion-align-items-center" style={{marginTop:"5px"}}>
                    <IonCol size="2">
                        <img src={logo3}/>
                    </IonCol>
                    <IonCol>
                        <IonRow>
                            <IonLabel style={{fontSize:"14px",fontFamily:"Lato-Light",color:"#0B1D34",fontWeight:"700"}}> Retirement</IonLabel>
                        </IonRow>
                        <IonRow>
                            <IonLabel style={{fontSize:"11px",fontFamily:"Lato-Light",color:"#0B1D34",fontWeight:"400",marginTop:"3px"}}> 239 Days Left</IonLabel>
                        </IonRow>

                    </IonCol>
                </IonRow>
                <IonRow size="12" className="ion-justify-content-around ion-align-items-center">
                    <IonProgressBar color="primary" value={0.5} style={{height:"9px",width:"80vw"}}></IonProgressBar>
                </IonRow>
                <IonRow  className="ion-justify-content-around ion-align-items-center" style={{marginTop:"0px"}}>
                    <IonCol size="auto">
                        <IonLabel style={{fontSize:"11px",fontFamily:"Lato-Light",color:"#0B1D34"}}> $SGD 00.00</IonLabel>
                    </IonCol>
                    <IonCol size="auto">
                        <IonLabel style={{fontSize:"11px",fontFamily:"Lato-Light",color:"#0B1D34"}}> $SGD 00.00</IonLabel>
                    </IonCol>
                </IonRow>

            </IonGrid>
           
        </IonCard>
        </div>
      </IonSlide>
    </IonSlides>
        </div>
    );
}