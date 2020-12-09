import { Component, OnInit } from "@angular/core";
import { ListItem } from "src/app/models/list-item.model";
import { Grade, Subject } from "src/app/models/subjects.model";
import { ListFakeData } from "src/app/services/fake-data";
import { FilteringService } from "src/app/services/filtering.service";
import { FirestoreService } from "src/app/services/firestore.service";

@Component({
  selector: "app-filtering",
  templateUrl: "./filtering.component.html",
  styleUrls: ["./filtering.component.scss"],
})
export class FilteringComponent implements OnInit {
  public items: Array<ListItem> = new Array<ListItem>();
  asignaturas: Array<Subject> = [];
  carreras: Grade[];

  constructor(
    private listData: ListFakeData,
    private filteringService: FilteringService,
    private fb: FirestoreService
  ) {}

  async ngOnInit() {
    setTimeout(() => {
      this.items = this.listData.getContacts();
    }, 5000);
    this.carreras = await this.filteringService.getCarreras();
  }

  checkInitialChange(item, itemIndex, items) {
    if (itemIndex == 0) return item.title[0];

    if (item.title[0] != items[itemIndex - 1].title[0]) return item.title[0];

    return null;
  }

  aplyFilters(filters: string) {
    console.log(filters);

    this.fb
      .consultarColecciónDegree("notes", filters)
      .subscribe((response: any) => {
        const todos = [];
        response.docs.forEach((value) => {
          const data = value.data();
          const id = value.id;
          const todo: ListItem = {
            id: id,
            title: data.title,
            description: data.description,
            imgUrl: "",
          };

          todos.push(todo);
        });
        console.log(todos);
        this.items = todos;
      });
  }
}
