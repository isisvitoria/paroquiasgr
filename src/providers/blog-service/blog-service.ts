import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BlogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BlogServiceProvider Provider');
  }

  getNoticias(){
    return this.http.get("https://www.googleapis.com/blogger/v3/blogs/byurl?url=http://paroquiasaogoncalodoretiro.blogspot.com.br/&key=AIzaSyDJMPESvZLLqMaofBe71STymXMLDsvZCmI");
  }

  
}
