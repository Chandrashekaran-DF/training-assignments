import { LightningElement } from "lwc";

export default class App extends LightningElement {

  num1 = 1;
  num2 = 1;
  result;
  availableOperations = [{label: "Add", value: "Add"}, {label: "Subtract", value: "Subtract"}, {label: "Multiply", value: "Multiply"}, {label: "Divide", value: "Divide"}];
  selectedValue = '';

  handleNum1Change(event)
  {
    this.num1 = event.target.value;
  }

  handleNum2Change(event)
  {
    this.num2 = event.target.value;
  }

  handleChange(event)
  {
    this.selectedValue = event.detail.value;
  }
  calculateResult(event)
  {
    let calcResult = 0;
    switch(this.selectedValue)
    {
      case "Add":
        calcResult = parseInt(this.num1) + parseInt(this.num2);
        break;
      case "Subtract":
        calcResult = this.num1 - this.num2;
        break;
      case "Multiply":
        calcResult = this.num1 * this.num2;
        break;
      case "Divide":
        if(this.num2 != 0)
        {
          calcResult = this.num1 / this.num2;
        }
        else
        {
          calcResult = 'Please select a number other than 0 for Number 2';
        }
        break;
    }
    this.result = calcResult;
  }
}
