import { AbstractControl } from "@angular/forms";

export function phoneNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  let valid;

  if (control.value) {
    valid = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(control.value);
  } else {
    valid = true;
  }
  console.log("xx " + valid);
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } };
}
