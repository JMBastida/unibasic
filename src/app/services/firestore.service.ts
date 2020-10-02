import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}

  public async insertar(coleccion: string, datos: any) {
    return await this.firestore.collection(coleccion).add(datos);
  }

  public async consultarColección(coleccion: string) {
    return await this.firestore.collection(coleccion).snapshotChanges();
  }

  public async consultar(coleccion: string, documento: string) {
    return await this.firestore.collection(coleccion).doc(documento).snapshotChanges();
  }

  public async actualizar(coleccion: string, documento: string, datos: any, option?: boolean) {
    return await this.firestore.collection(coleccion).doc(documento).set(datos, {merge: option});
  }

  public async eliminar(coleccion: string, documento: string) {
    await this.firestore.collection(coleccion).doc(documento).delete();
  }

}
