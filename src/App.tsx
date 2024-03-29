import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1.jsx';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/fonts.scss';
import home from "./images/home.png";
import invest from "./images/invest.png";
import paynow from "./images/paynow.png";
import marketplace from "./images/marketplace.png";
import deals from "./images/deals.png";
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" style={{"height":"80px"}}>
          <IonTabButton tab="tab1" href="/tab1">
            <img src={home} alt="" />
            <p> Home </p>
            {/* <IonLabel>Home</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
          <img src={invest} alt="" />
          <p> Invest </p>
            {/* <IonIcon icon={ellipse} /> */}
            {/* <IonLabel>Invest</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <img src={paynow} alt="" width="35" />
            <p> Pay Now </p>
            {/* <IonLabel>Pay Now</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <img src={marketplace} alt="" />
            <p> Marketplace </p>
            {/* <IonLabel>Marketplace</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <img src={deals} alt="" />
            <p> Deals </p>
            {/* <IonLabel>Deals</IonLabel> */}
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
