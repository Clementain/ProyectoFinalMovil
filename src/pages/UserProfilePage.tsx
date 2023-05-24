import React from 'react';
import { IonContent, IonPage, IonHeader, IonTitle } from '@ionic/react';

const UserProfilePage = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>User Profile</IonTitle>
            </IonHeader>
            <IonContent>
                {/* Aquí puedes mostrar los detalles del perfil del usuario */}
            </IonContent>
        </IonPage>
    );
};

export default UserProfilePage;
