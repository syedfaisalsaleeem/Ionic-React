import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol,IonSearchbar } from '@ionic/react';
import TransactionHistory from "./TransactionHistory";
import SendMoney from "./SendMoney";
import Products from "./Products.jsx"
export default function HomePageContent(){
    return(
        <div>
            <TransactionHistory/>
            <SendMoney/>
            <Products/>
        </div>
    )
};