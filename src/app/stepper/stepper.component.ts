import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {
  isLinear: boolean = false;
  shipFormGroup: FormGroup;
  billFormGroup: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.createShipCheckoutForm();
    this.createBillCheckoutForm();
  }
  createShipCheckoutForm() {
    this.shipFormGroup = this._fb.group({
      addressOne: ["", Validators.required],
      addressTwo: ["", Validators.required],
      pincode: ["", Validators.required],
    });
  }

  createBillCheckoutForm() {
    this.billFormGroup = this._fb.group({
      addressOne: ["", Validators.required],
      addressTwo: ["", Validators.required],
      pincode: ["", Validators.required],
    });
  }

  sameAddress() {
    this.billFormGroup.patchValue({
      addressOne: this.shipFormGroup.get("addressOne").value,
      addressTwo: this.shipFormGroup.get("addressTwo").value,
      pincode: this.shipFormGroup.get("pincode").value,
    });
  }
}
