// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCCqjSYMybo1fE6KAA4dvsUJUd7ps1WFaI',
    authDomain: 'vaultwebdb.firebaseapp.com',
    databaseURL: 'https://vaultwebdb.firebaseio.com',
    projectId: 'vaultwebdb',
    storageBucket: 'vaultwebdb.appspot.com',
    messagingSenderId: '655966039625'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
