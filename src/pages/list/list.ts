import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Historia } from '../historia/historia';
import { Comunidades } from "../comunidades/comunidades";
import { Padroeiro } from "../padroeiro/padroeiro";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})

export class ListPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {}
    
    abrirPaginaHistoria() {
    this.navCtrl.push(Historia);
  }
    abrirPaginaComunidades() {
    this.navCtrl.push(Comunidades);
  }
    abrirPaginaPadroeiro() {
    this.navCtrl.push(Padroeiro);
    }
  }
