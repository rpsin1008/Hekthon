import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fb: FormBuilder){
    this.typeOfSchudule = ['No Recurrence', 'Hourly', 'Daily'];
    
  }
  
  title = 'createChecklistFormMobile';
  time = { hour: 13, minute: 30 };
  standalone = true;
	meridian = true;
  typeOfSchudule: Array<string> | undefined;
  model   = {option: 'option1'};

  
  brand = [
    {id: 1, name: 'ABC'},
    {id: 2, name: 'XYZ'}
];
  checklistType = [
    {id: 1, name: 'cooling'},
    {id: 2, name: 'cooking'}
];
role = [
  {id: 1, name: 'Associate'},
  {id: 2, name: 'Manager'}
];
areas = [
  {id: 1, name: 'Pest'},
  {id: 2, name: 'Petrol'}
];

ngOnInit(): void {
  this.initializeForm();
 
}



initializeForm() {
  this.changeSchuduleType(this.model);
}

  
changeSchuduleType(getSchuduleTye: any) {
    
}
}
