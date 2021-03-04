import { DocumentReference } from "@angular/fire/firestore";

export class Collection {
    constructor(
        public title: string,
        public items: Array<DocumentReference>
    ) {}
}