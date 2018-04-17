import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogServiceProvider } from '../../providers/blog-service/blog-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    BlogServiceProvider
  ]
})
export class FeedPage {
  //public nome_usuario:string = "Isis Vitória"

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private blogprovider: BlogServiceProvider,
    public iab:InAppBrowser
  ) {
  }

  abrirNavegador(url: string) {
    const browser = this.iab.create(url).show();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    this.blogprovider.getNoticias().subscribe(
      data=>{
        console.log(data);
    }, error=>{
      console.log(error);
    }
  )
  }

}
