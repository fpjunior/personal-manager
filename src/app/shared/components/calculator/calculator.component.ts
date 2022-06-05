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
  operator: string;
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

  deleteLast(){
    this.valueDisplay = this.valueDisplay.substr(0, this.valueDisplay.length - 1);
    return this.valueDisplay;
    }

  calculate() {
    //let result =
    //  Number(this.valueDisplay.split("+")[0]) +
    //  Number(this.valueDisplay.split("+")[1])
    //this.valueDisplay = result.toString();
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

    switch (event.key) {
      case "9":
        this.valueDisplay += "9";
        break;
      case "8":
        this.valueDisplay += "8";
        break;
      case "7":
        this.valueDisplay += "7";
        break;
      case "6":
        this.valueDisplay += "6";
        break;
      case "5":
        this.valueDisplay += "5";
        break;
      case "4":
        this.valueDisplay += "4";
        break;
      case "3":
        this.valueDisplay += "3";
        break;
      case "2":
        this.valueDisplay += "2";
        break;
      case "1":
        this.valueDisplay += "1";
        break;
      case "0":
        this.valueDisplay += "0";
        break;
      case "+":
        this.valueDisplay += "+";
        break;
      case "-":
        this.valueDisplay += "-";
        break;
      case "*":
        this.valueDisplay += "*";
        break;
      case "/":
        this.valueDisplay += "/";
        break;
      case "(":
        this.valueDisplay += "(";
        break;
      case ")":
        this.valueDisplay += ")";
        break;
      case ".":
        this.valueDisplay += ".";
        break;
      case "Enter":
        this.calculate();
        this.deleteLast();
        break;
      case "Backspace":
        this.deleteLast();
        break;
      default:
        break;
    }

  }
}
