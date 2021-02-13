import { DocumentReference, DocumentSnapshot, SnapshotOptions } from "@angular/fire/firestore";
import { Definition } from "./definition.model";

export class Term {
    constructor(
      public id: string,
      public term: string,
      public definitions: Array<Definition>
    ) { }
}