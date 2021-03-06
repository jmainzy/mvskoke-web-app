import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';

import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

import { Term } from './model/term.model';
import { Definition } from './model/definition.model';
import { Phrase } from './model/phrase.model';
import { Collection } from './model/collection.model';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  // TODO: see if the following is working correctly and cache other data
  // Cache the language observable
  private terms$: Observable<Term[]>;

  constructor(private firestore: AngularFirestore) {
    this.terms$ = this.firestore.collection<Term>('terms', ref => ref.orderBy('term')).valueChanges({ idField: "id" }).pipe(
      shareReplay(1) // This should allow multiple subscribers to share this subscription.
    );
    
  }

  getTerms(): Observable<Term[]> {
    return this.terms$
  }

  getPhrases(): Observable<Phrase[]> {
    return this.firestore.collection<Phrase>('phrases', ref => ref.orderBy('phraseSource')).valueChanges({ idField: 'id'})
  }

  getPhrase(doc: DocumentReference): Observable<Phrase | undefined> {
    console.log("getting phrase")
    return this.firestore.doc<Phrase>(doc).valueChanges()
  }

  getCollections(): Observable<Collection[]> {
    return this.firestore.collection<Collection>('collections').valueChanges({idField: 'id'})
  }

  // getEntries(): Observable<Entry[]> {

  //   return this.terms$.pipe(
  //     map((terms: Term[]) => {
  //       return terms.map(term => {
  //           return new Entry(term, [new Definition("123", "pos", "def")]);
  //       });
  //     })
  //   );
  // }

  // getTerm(term_id: string): Observable<Term> {
  //   return this.firestore.collection('terms').doc<Term>(term_id).valueChanges().pipe(
  //     map((term: Term) => {
  //       term.id = term_id;
  //       return term;
  //     })
  //   );
  // }
}
