import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
    apiKey: 'AIzaSyA3mBo3qNOXYuhD6vhfTFsinfRIKfg0hUM',
    authDomain: 'retain-app.firebaseapp.com',
    databaseURL: 'https://retain-app.firebaseio.com',
    storageBucket: 'retain-app.appspot.com',
};


const firebaseAuthConfig = {
    method: AuthMethods.Popup,
    remember: 'default'
};



export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
