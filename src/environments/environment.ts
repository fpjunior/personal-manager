// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // URL_API: 'https://firestore.googleapis.com/v1/projects/personal-manager-44471/databases/(default)/documents/',
  URL_API: 'http://localhost:3001/api/',
  firebaseConfig: {
    apiKey: "AIzaSyDYAwmTH__bzIA64GJRR6BwsbnSRj6FVZM",
    authDomain: "personal-manager-44471.firebaseapp.com",
    projectId: "personal-manager-44471",
    storageBucket: "personal-manager-44471.appspot.com",
    messagingSenderId: "322173734981",
    appId: "1:322173734981:web:990b6a8bb51f89346d132c",
    measurementId: "G-1KCL8PLLPP"
  },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
