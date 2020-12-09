import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Grade, Subject } from "src/app/models/subjects.model";

@Component({
  selector: "search-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
})
export class FiltersComponent implements OnInit {
  @Input() carreras: Grade[];
  @Output() formFilters = new EventEmitter<string>();
  asignaturas: Subject[];
  todoForm: FormGroup;

  customActionSheetOptions: any = {
    header: "Carreras",
    subHeader: "",
    cssClass: "actionSheet",
    mode: "md",
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.fb.group({
      degree: new FormControl(""),
      subject: new FormControl({ value: "", disabled: true }),
    });

    this.todoForm.valueChanges.subscribe((x) => {
      console.log(x);

      console.log("form value changed");
    });
  }

  resetForm() {
    this.todoForm.reset();
  }

  segmentChanged(ev: any) {
    console.log(this.todoForm.value);

    console.log("Segment changed", ev);
  }

  degreeSelected(event: any) {
    this.asignaturas = this.carreras[
      this.todoForm.get("degree").value
    ].subjects.data;
    console.log(this.asignaturas);

    this.todoForm.get("subject").enable();
  }

  submitForm() {
    console.log(this.todoForm.value);
    this.formFilters.emit(this.todoForm.value["degree"]);
    //this.todoForm.reset();
    this.todoForm.get("subject").disable();
  }
}
