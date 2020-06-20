import { Component, VERSION, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { GraphUser } from "../shared/models/graph-user.model";
import {
  Observable,
  Subject,
  BehaviorSubject,
  from,
  of,
  ReplaySubject
} from "rxjs";
import {
  retry,
  catchError,
  delay,
  tap,
  take,
  multicast,
  share,
  publishBehavior,
  refCount,
  map
} from "rxjs/operators";
import { DataService } from "./data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  user: GraphUser;

  constructor(private dataService: DataService) {
    let that = this;
  }

  ngOnInit() {
    this.dataService.getUser().subscribe((u: GraphUser) => {
      this.user = u;
    });
  }
}
