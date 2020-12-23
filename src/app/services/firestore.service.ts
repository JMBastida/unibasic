import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}

  public async insertar(coleccion: string, datos: any) {
    return await this.firestore.collection(coleccion).add(datos);
  }

  public consultarColección(coleccion: string): Observable<firebase.firestore.QuerySnapshot>  {
    return this.firestore.collection(coleccion).get();
  }

  public consultarColecciónDegree(coleccion: string, carrera: string): Observable<firebase.firestore.QuerySnapshot> {
    return this.firestore.collection(coleccion, ref => ref.where('degree', '==', carrera)).get();
  }
  public async consultarColecciónSubject(coleccion: string, asignatura: string) {
    return await this.firestore.collection(coleccion, ref => ref.where('subject', '==', asignatura)).snapshotChanges();
  }

  public async consultar(coleccion: string, documento: string) {
    return await this.firestore.collection(coleccion).doc(documento).get();
  }

  public async actualizar(coleccion: string, documento: string, datos: any, option?: boolean) {
    return await this.firestore.collection(coleccion).doc(documento).set(datos, {merge: option});
  }

  public async eliminar(coleccion: string, documento: string) {
    await this.firestore.collection(coleccion).doc(documento).delete();
  }

}
