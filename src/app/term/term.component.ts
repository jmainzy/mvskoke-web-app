import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../firestore.service';
import { Definition } from '../model/definition.model';
import { Phrase } from '../model/phrase.model';
import { Term } from '../model/term.model';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {
  private firestoreService: FirestoreService;
  private _term = new Term("", "", []);
  examplesMap = new Map<string, Phrase[]>();

  @Input() set term(value: Term) {
    this._term = value;
    this.getExamples();
  }
  get term(): Term {
    return this._term;
  }

  constructor(firestoreService: FirestoreService) { 
    this.firestoreService = firestoreService;
  }

  hasExamples(def: Definition) {
    return def.examples != undefined && def.examples.length > 0;
  }

  getExamples(): void {

    this.examplesMap.clear;

    for (var def of this._term.definitions) {
      if (this.hasExamples(def)) {
        for (var ex of def.examples) {
          // Get phrase using document reference in examples array
          this.firestoreService.getPhrase(ex).subscribe( result => {
            if (result != undefined) {
              // add phrase to examples array
              // TODO: How is this done properly?
              var examples = this.examplesMap.get(def.id)
              if (examples === undefined) {
                this.examplesMap.set(def.id, [result])
              } else {
                examples.push(result)
                this.examplesMap.set(def.id, examples);
              }
            }
          });
        }
      }
    }
  }

  ngOnInit(): void {
  }

}
