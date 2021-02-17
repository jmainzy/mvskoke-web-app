import { DocumentReference } from "@angular/fire/firestore";

export class Definition {

  constructor(
    public id: string,
    public pos: string,
    public definition: string,
    public examples: Array<DocumentReference>
  ) {}

}