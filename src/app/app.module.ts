import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { Avisos } from '../pages/avisos/avisos';
import { Missas } from '../pages/missas/missas';
import { Multimidia } from '../pages/multimidia/multimidia';
import { Pastorais } from '../pages/pastorais/pastorais';
import { Historia } from "../pages/historia/historia";
import { Comunidades } from "../pages/comunidades/comunidades";
import { Padroeiro } from "../pages/padroeiro/padroeiro";
import { Clero } from "../pages/clero/clero";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { BlogServiceProvider } from '../providers/blog-service/blog-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactPage,
    TabsPage,
    Avisos,
    Missas,
    Multimidia,
    Pastorais,
    Historia,
    Clero,
    Padroeiro,
    Comunidades
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactPage,
    TabsPage,
    Avisos,
    Missas,
    Multimidia,
    Pastorais,
    Historia,
    Clero,
    Padroeiro,
    Comunidades
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BlogServiceProvider
  ]
})
export class AppModule {}
