import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"],
})
export class CalculatorComponent implements OnInit {
  @Input() showModalCalc;
  @Input() $event;
  valueDisplay: any = "";
  valueNumber = 7;
  teste: any;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onShow: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onCloseParent = (): void => this.onClose.emit(this.showModalCalc);
  onShowParent = (): void => this.onShow.emit(this.showModalCalc);

  sendValue(value: string) {
    this.valueDisplay += value;
  }

  addOperator(value: string) {
    this.valueDisplay += value;
  }

  deletaUltimo(){
    //this.teste= this.valueDisplay;
    this.valueDisplay = this.valueDisplay.substr(0, this.valueDisplay.length - 1);
    return this.valueDisplay;
    }

  calculate() {
    // let result =
    //   Number(this.valueDisplay.split("+")[0]) +
    //   Number(this.valueDisplay.split("+")[1])
    // this.valueDisplay = result.toString();
    this.valueDisplay =  eval(this.valueDisplay);  //essa linha faz o que as linhas acima estava fazendo por conta dessa função eval
    return this.valueDisplay;
  }

  clearDisplay(){
    this.valueDisplay = "";
  }

  @HostListener("window:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    console.log(this.showModalCalc);
    // {{showModalCalc}}
    // ESC key
    if (event.key === "Enter") {
      this.calculate();
      this.valueDisplay = this.valueDisplay.substr(0, this.valueDisplay.length - 1);
    }
    if (event.key === "7") {
      console.log("7");
    }
  }
}
