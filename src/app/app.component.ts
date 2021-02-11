import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {TermsApiService} from './terms/terms-api.service';
import {Term} from './terms/term.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  termsListSubs: Subscription = new Subscription;
  termsList: Term[] = [];

  constructor(private termsApi: TermsApiService) {
  }

  ngOnInit() {
    this.termsListSubs = this.termsApi
      .getTerms()
      .subscribe((res: Term[]) => {
          this.termsList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.termsListSubs.unsubscribe();
  }
}