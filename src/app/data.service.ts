import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GraphUser} from '../shared/models/graph-user.model';
import { Observable, Subject, BehaviorSubject, from, of, ReplaySubject } from 'rxjs';
import { retry, catchError, delay, tap, take, multicast, share, publishBehavior, refCount, map } from 'rxjs/operators';
@Injectable()
export class DataService {
  public currentUser$;

  constructor(private http: HttpClient) { 
    this.currentUser$ = this.getUser();
  }

  getUser() {
    return this.http.get('/assets/user.json').pipe(
      share()
    );
  }

}