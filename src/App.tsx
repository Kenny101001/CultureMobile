import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';
import Inscription from './pages/Inscription';
import Login from './pages/Login';
import './App.css';
import TerrainPage from './pages/TerrainPage';
import TerrainDetails from './pages/TerrainDetails';
import ParcelleDetails from './pages/ParcelleDetails';

// import '@ionic/react/css/core.css';
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

// import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          <Route path="/start" component={StartPage} exact />
          <Route path="/HomePage" component={HomePage} exact />
          <Route path="/Inscription" component={Inscription} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/TerrainPage" component={TerrainPage} exact />
          <Route path="/Home" component={Home} exact />
          <Route path="/TerrainDetails" component={TerrainDetails} exact />
          <Route path="/ParcelleDetails" component={ParcelleDetails} exact />
          <Redirect from="/" to="/start" exact />
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
