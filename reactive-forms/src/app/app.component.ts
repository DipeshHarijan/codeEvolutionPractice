import { Component } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  get userName(){
    return this.registrationForm.get('userName');
  }
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Dipesh'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  //this is setValue which strictly follows the structure of the object

  // loadApiData(){
  //   this.registrationForm.setValue({
  //     userName: 'Bruce',
  //     password: 'test',
  //     confirmPassword: 'test',
  //     address: {
  //       city: 'Los Angeles',
  //       state: 'California',
  //       postalCode: '63736372'
  //     }
  //   });
  // }

  //patchValue does not need to follow the exact structure

  loadApiData(){
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      
    });
  }

}
