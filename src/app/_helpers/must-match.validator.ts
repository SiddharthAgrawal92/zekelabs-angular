import { FormGroup } from "@angular/forms";


export function MustMatch(controlName: string, controlName2: string) {
    return (formGroup: FormGroup) => {
        const control1 = formGroup.controls[controlName];
        const control2 = formGroup.controls[controlName2];

        if (control2.errors && !control2.errors.mustMatch) {
            return;
        }

        if (control1.value !== control2.value) {
            control2.setErrors({ mustMatch: true, errorMessage: 'Field not matched! ' });
        } else {
            control2.setErrors({ mustMatch: false, errorMessage: '' });
        }

    }
}