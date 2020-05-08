import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-web-application';
  readonly ROOT_URL='https://data.rennesmetropole.fr/explore/dataset/actes-detat-civil/';

  post: Observable<any>;

  constructor(private http: HttpClient){}

  getPost(){
    this.post = this.http.get(this.ROOT_URL)
  }
}

@Injectable()

export class ConfigService {
  constructor(private http: HttpClient) { }
}
