import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-subject-component",
  templateUrl: "./subject-ccomponent.component.html",
  styleUrls: ["./subject-ccomponent.component.scss"],
})
export class SubjectComponent implements OnInit {
  @ViewChild("headerInfo") info: ElementRef;
  @ViewChild("header") header: ElementRef;
  @ViewChild("card") card: ElementRef;
  scrollPosition: number = 0;
  lastScrollTop: number = 0;

  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
   
  }

  onContentScroll(ev) {
    //ev.domWrite(() => {
    this.resizeHeader(ev);
    //});
  }

  resizeHeader(ev) {
    this.scrollPosition = ev.detail.scrollTop;

    if (this.scrollPosition > this.lastScrollTop && this.scrollPosition >= 25) {
      // scrolling down
      if (this.scrollPosition <= 115) {
        this.renderer.setStyle(
          this.card.nativeElement,
          "visibility",
          "visible"
        );
        this.renderer.setStyle(this.info.nativeElement, "visibility", "hidden");
        this.renderer.setStyle(
          this.header.nativeElement,
          "transition",
          "all 0.3s linear"
        );
        this.renderer.setStyle(
          this.header.nativeElement,
          "transform",
          `translateY(-${this.scrollPosition}px)`
        );
      } else {
        this.renderer.setStyle(this.card.nativeElement, "visibility", "hidden");
        this.renderer.setStyle(
          this.info.nativeElement,
          "visibility",
          "visible"
        );
      }
    }
    if (
      this.scrollPosition < this.lastScrollTop &&
      this.scrollPosition <= 113
    ) {
      // scrolling up
      this.renderer.setStyle(this.card.nativeElement, "visibility", "visible");
      this.renderer.setStyle(this.info.nativeElement, "visibility", "hidden");
      this.renderer.setStyle(
        this.header.nativeElement,
        "transform",
        `translateY(-${this.scrollPosition}px)`
      );
    }

    // reset
    this.lastScrollTop = this.scrollPosition;

    /*console.log(ev.detail.currentY);
    if (ev.detail.currentY > 130) {
      this.renderer.setStyle(this.card.nativeElement, "visibility", "hidden");
      this.renderer.setStyle(this.info.nativeElement, "visibility", "visible");
    } else {
      const recalculate: number = +value - ev.detail.currentY;
      console.log(recalculate);

      this.renderer.setStyle(
        this.header.nativeElement,
        "padding-bottom",
        `${recalculate}px`
      );
      this.renderer.setStyle(this.card.nativeElement, "visibility", "visible");
      this.renderer.setStyle(this.info.nativeElement, "visibility", "hidden");
    }*/

    /*let value = getComputedStyle(this.header.nativeElement).getPropertyValue(
      "padding-bottom"
    );
    value = value.replace('px','');
    
      this.newHeight = Math.abs((+value)+(ev.detail.currentY/2));
    
    console.log("value",value);
    console.log("Y pso",ev.detail.currentY);
    console.log("total",this.newHeight);
    
    if (ev.detail.currentY < 50) {
      this.newHeight = 50;
    }
    this.renderer.setStyle(
      this.header.nativeElement,
      "padding-bottom",
      `${this.newHeight}px`
    );*/
  }
}
