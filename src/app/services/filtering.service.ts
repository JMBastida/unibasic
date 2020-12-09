import { Injectable } from "@angular/core";
import { AngularFireList, AngularFireDatabase } from "@angular/fire/database";
import { Grade, Subject } from "src/app/models/subjects.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class FilteringService {
  private asignaturasDB: AngularFireList<Subject>;
  private carrerasDB: AngularFireList<Grade>;

  constructor(private db: AngularFireDatabase) {
    this.carrerasDB = this.db.list("/");
  }

  async getCarreras(): Promise<Grade[]> {
    let dato: Grade[] = [];
    await this.carrerasDB.snapshotChanges().subscribe(async (changes) => {
      await changes.forEach((item) => {
        let a: Grade = item.payload.val();
        dato.push(a);
      });
    });

    return dato;
  }
}
