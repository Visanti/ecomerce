import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"prime-elf-389802","appId":"1:688132632749:web:d4f5b96c1879e66fe4d624","storageBucket":"prime-elf-389802.appspot.com","apiKey":"AIzaSyBJywcHxkq-0t63KS_wPAq9R81_dXk_IiM","authDomain":"prime-elf-389802.firebaseapp.com","messagingSenderId":"688132632749"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
