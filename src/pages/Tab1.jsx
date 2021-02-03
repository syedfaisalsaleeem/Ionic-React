import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol,IonSearchbar,IonCard } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import HomePageContent from "./components/HomePageContent"
import './Tab1.css';
import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import t4 from "../images/t4.png";

export default function Tab1(){
    const [searchText, setSearchText] = React.useState('');
    const [enable,setenable] = React.useState(true);
    const [inputstyle,setinputstyle] = React.useState("flex");
    const [he,sethe] = React.useState("260px");
    // let inputstyle={display:"flex"};
    function fun(e){
        console.log(e["detail"]["scrollTop"])
        if(e["detail"]["scrollTop"]<4){
            setenable(true)
        }
        else{
            setenable(false)
        }
    }
    useEffect(()=>{
        console.log(inputstyle);
        if(enable==true){
            setinputstyle("flex");
            sethe("260px")
        }
        else{
            setinputstyle("none");
            sethe("120px");
        }
    },[enable])
    return (
        <IonPage>
        <IonHeader style={{"height":he,"background":"#4A5271",marginBottom:"20px"}}>
        <IonGrid>
        <IonRow size="12" className="ion-justify-content-center ion-align-items-center" style={{postion:"sticky"}}>
            <IonCol size="auto" className="ion-justify-content-center ion-align-items-center">
                <img src={t1}/>
            </IonCol>
            <IonCol size="8" className="ion-justify-content-center ion-align-items-center">
                <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value)}></IonSearchbar>

            </IonCol>
            <IonCol size="auto" className="ion-justify-content-center ion-align-items-center">
                <img src={t2}/>
            </IonCol>
        </IonRow>
        <IonRow size="12" className="ion-justify-content-center ion-align-items-center" style={{display:inputstyle}}>
            <IonCol size="auto" className="ion-justify-content-center ion-align-items-center" ><p style={{"color":"#FFFFFF"}}>$SG 000,0000,000.000 </p></IonCol>
        </IonRow>
        <IonRow size="12" className="ion-justify-content-center ion-align-items-start" style={{display:inputstyle}}>
            <IonCol size="auto" className="ion-justify-content-start ion-align-items-center" ><p style={{"color":"#FFFFFF"}}> Total Balance</p></IonCol>
        </IonRow>
        <IonCard style={{display:inputstyle,postion:"absolute",marginLeft:"4.6vw",marginTop: "10px",background:"white",width:"90%",height:"70px",zIndex: "2"}}>
            <IonGrid>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                    <IonCol height="30px">
                        <IonRow height="30px" className="ion-justify-content-center ion-align-items-center">
                            <p> Total Incoming <br/> + $00.00 <img src={t3} height="12px"/></p>
                        </IonRow>
                    </IonCol>
                    <IonCol height="30px">
                        <IonRow height="30px" className="ion-justify-content-center ion-align-items-center">
                            <p> Total Spending <br/> + $00.00 <img src={t4} height="12px"/></p>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
            {/* <IonCard style={{postion:"absolute",width:"90%",height:"70px",background:"white"}}>

            </IonCard> */}

        </IonCard>
        </IonGrid>

        </IonHeader>
        
        <IonContent fullscreen scrollEvents={true}
       
        
    onIonScrollStart={() =>console.log("mainstart")}
    onIonScroll={(event) =>fun(event)}
    onIonScrollEnd={() =>console.log("end")} >
            <HomePageContent />
        </IonContent>
      </IonPage>
    );
};