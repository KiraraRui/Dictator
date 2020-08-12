import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  regForm: any;
  data: [object] = [Object];
  title = 'FormArray Example in Angular Reactive forms';
  constructor(private formsBuilder: FormBuilder) {
    this.regForm = this.formsBuilder.group({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      dateOfDeath:'',
      description:''
    });
  }
  
 
  onSubmit(dictator) {
    console.log(dictator);
    this.data.push(dictator);
    console.log(this.data);
  }

  onRemove() {
    this.data.splice(this.data.length -1, 1);
    console.log(this.data);
  }
 
 
}

// this.data.splice(-1, 1);
