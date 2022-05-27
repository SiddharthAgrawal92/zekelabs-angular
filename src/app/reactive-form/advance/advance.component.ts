import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';



@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent implements OnInit {

  // profile = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  profile = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    address: this.fb.group({
      street: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      city: [''],
      state: [''],
      zip: ['']
    }),
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  }, {
    validator: MustMatch('password', 'confirmPassword')
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.updateName();
    this.updateForm();
  }

  onSubmit() {
    console.log(this.profile.value);
    console.log(this.profile.controls);
  }

  get pForm() {
    return this.profile.controls;
  }

  updateName() {
    // this.profile.controls['firstName'].setValue('New Name');
  }

  updateForm() {
    this.profile.controls['firstName'].setValue('Siddharth');
    this.profile.controls['lastName'].setValue('Agrawal');
    this.profile.controls['email'].patchValue('abc@xyz.com');
    this.profile.controls['address'].setValue({
      street: 'My Street',
      city: 'Bengaluru',
      state: 'Karnataka',
      zip: '560103'
    })
  }

  resetForm() {
    this.profile.controls['firstName'].reset('Siddharth');
    this.profile.controls['lastName'].reset('Agrawal');
    this.profile.controls['address'].reset({
      street: 'My Street',
      city: 'Bengaluru',
      state: 'Karnataka',
      zip: '560103'
    })
  }

  get aliases() {
    return this.profile.get('aliases') as FormArray;
  }

  insertAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
