import { Injectable } from '@angular/core';
import { SessionService } from "app/session/service/session.service";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { restPath } from "app/share/constants/restPath";


@Injectable()
export class ProjectsService {

  private httpOptions;

  constructor(private sessionService: SessionService, private http: HttpClient,private restPath:restPath) {}

  listProyects(): Observable<Object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`
      })
    };
    return this.http.get(`${this.restPath.APP}${this.restPath.listProyects}`,this.httpOptions)
  }

}