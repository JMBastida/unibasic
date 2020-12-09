export interface StudyNotes {
    id: string;
    title: string;
    author: string;
    date: Date;
    imgUrl?: string;
    description: string;
    subject: string;
    university: string;
    uploadsUrls: string[];
}