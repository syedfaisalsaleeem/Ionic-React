import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol,IonSearchbar,IonScroll,IonCardContent,IonCard, IonSlides,IonSlide, IonLabel } from '@ionic/react';
import DayWeekMonth from "./DayWeekMonth.jsx";
import add from "../../images/add.png";
import cb from "../../images/cb.png";
import logo1 from "../../images/logo1.png";
import logo2 from "../../images/logo2.png";
import rb from "../../images/rb.png";
const slideOpts = {
    initialSlide: 1,
    speed: 400,
    // loop:false,
    // direction:"horizontal",
    zoom : true, watchOverflow: false
  };
//   if ($('.swiper-container .swiper-slide').length > 1) {
//     var swiper = new Swiper('.swiper-container', {
//       // Optional parameters
//       direction: 'horizontal',
//       loop: false,
//       //autoplay: 6500,
//       autoplayDisableOnInteraction: false,
  
//       keyboardControl: true,
//       mousewheelControl: true,
  
//       pagination: '.swiper-pagination',
//       paginationClickable: true,
  
//     });
//   }
export default function SendMoneyRow(){
    return(
        <div>
    <IonSlides pager="true" scrollbar="true" watchOverflow="false" >
      <IonSlide>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"142px", height:"112px",color:"#4A5271",borderStyle:"dashed",borderWidth:"0.5px"}}>
            <IonGrid>
                <IonRow  size="12">
                    <p style={{fontSize:"13px",fontFamily:"Lato-Light",color:"#0B1D34"}}>Add New Recipient</p>
                </IonRow>
                <IonRow  size="2" className="ion-align-items-center ion-justify-content-center">
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <img src={add}/>
                    </div>
                   
                </IonRow>
            </IonGrid>
        </div>

        <IonCard style={{width:"142px",height:"112px"}}>
            
                <IonGrid style={{background:"transparent",paddingTop:"15px",paddingLeft:"14px"}}>
                <IonRow size="12">
                    <div style={{display:"flex",direction:"row",justifyContent:"center",alignItems:"center"}}>
                    <div>
                        <img src={cb} />
                    </div>
                    <div style={{width:"10px"}}>

                    </div>
                    <div>
                        <img src={logo1} width="140px" />
                    </div>
                    </div>
                </IonRow>
                <IonRow size="12" style={{marginTop:"9px"}}>
                    <div>
                        <IonLabel style={{fontSize:"11px",fontFamily:"Lato-Light",color:"#0B1D34"}}>Chadwick Boseman</IonLabel>
                    </div>
                </IonRow>
                <IonRow size="12" style={{marginTop:"5px"}}>
                    <div>
                        <IonLabel style={{fontSize:"11px",fontFamily:"Lato-Light",color:"#0B1D34"}}>+6591876258</IonLabel>
                    </div>
                </IonRow>
                </IonGrid>
           
        </IonCard>
        </div>
      </IonSlide>
      <IonSlide>
      <IonCard style={{width:"142px",height:"112px"}}>
            
            <IonGrid style={{background:"transparent",paddingTop:"15px",paddingLeft:"14px"}}>
            <IonRow size="12">
                <div style={{display:"flex",direction:"row",justifyContent:"center",alignItems:"center"}}>
                <div>
                    <img src={rb} />
                </div>
                <div style={{width:"10px"}}>

                </div>
                <div>
                    <img src={logo2} width="140px" />
                </div>
                </div>
            </IonRow>
            <IonRow size="12" style={{marginTop:"9px"}}>
                <div>
                    <IonLabel style={{fontSize:"11px",fontFamily:"Lato-Light",color:"#0B1D34"}}>Rajesh Buhair</IonLabel>
                </div>
            </IonRow>
            <IonRow size="12" style={{marginTop:"5px"}}>
                <div>
                    <IonLabel style={{fontSize:"11px",fontFamily:"Lato-Light",color:"#0B1D34"}}>+6591876258</IonLabel>
                </div>
            </IonRow>
            </IonGrid>
       
    </IonCard>
      </IonSlide>
      {/* <IonSlide>
        <h1>Slide 2</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 3</h1>
      </IonSlide> */}
    </IonSlides>
        </div>
    )
}