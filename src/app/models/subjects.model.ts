export interface Grade {
    $key?: string;
    degree: string;
    semester: string;
    subjects: any;
}
export interface Subject {
    $key?: string;
    codigoAsignatura: string;
    fecha: string;
    aulas: string;
    nombreAsignatura: string;
    tipo: string;
  }
