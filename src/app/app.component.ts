import {Component, OnInit, Injectable} from '@angular/core';
import { Http, Headers, Response  } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Observable, Subject} from 'rxjs/Rx';
import  {UserService} from './user.service';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';    
import 'rxjs/add/operator/toPromise';  
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

export class ServiceComponent implements OnInit {

  civil=[];

  constructor(private _userService : UserService) {  }

  ngOnInit() {
    //this.data = this._userService.getUsers();
    this._userService.getUsers().subscribe(resUserData => this.civil = resUserData);
  }

  headers = new Headers({'Content-Type': 'application/json','Accept': 'application/json'});

}
