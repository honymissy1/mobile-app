import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
        <IonItem>
          <IonLabel>Pokémon Yellow</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Mega Man X</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>The Legend of Zelda</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Pac-Man</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Super Mario World</IonLabel>
        </IonItem>
      </IonList>

<IonList>
<IonItem>
  <IonLabel>Input</IonLabel>
  <IonInput></IonInput>
</IonItem>
<IonItem>
  <IonLabel>Toggle</IonLabel>
  <IonToggle slot="end"></IonToggle>
</IonItem>
<IonItem>
  <IonLabel>Radio</IonLabel>
  <IonRadio slot="end"></IonRadio>
</IonItem>
<IonItem>
  <IonLabel>Checkbox</IonLabel>
  <IonCheckbox slot="start" />
</IonItem>
</IonList>

{/*-- List of Sliding Items --*/}
<IonList>
<IonItemSliding>
  <IonItem>
    <IonLabel>Item</IonLabel>
  </IonItem>
  <IonItemOptions side="end">
    <IonItemOption onClick={() => {}}>Unread</IonItemOption>
  </IonItemOptions>
</IonItemSliding>

<IonItemSliding>
  <IonItem>
    <IonLabel>Item</IonLabel>
  </IonItem>
  <IonItemOptions side="end">
    <IonItemOption onClick={() => {}}>Unread</IonItemOption>
  </IonItemOptions>
</IonItemSliding>
</IonList>
  
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
