import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import { environment } from 'src/environments/environment.prod';
@NgModule({
imports: [
CommonModule,
AngularFireModule.initializeApp(environment.firebase),
AngularFirestoreModule.enablePersistence(),
AngularFireAuthModule,
AngularFireStorageModule,
NgxAuthFirebaseUIModule.forRoot(environment.firebase)
],
declarations: []
})
export class FirebaseModule { }