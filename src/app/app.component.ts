import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';

const firebaseconfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: ''
};

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    firebase.initializeApp(firebaseconfig);
    console.log('here lies Firebase', firebase);
    
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
