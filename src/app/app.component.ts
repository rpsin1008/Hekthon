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
  firstStarttime = { hour: 12, minute: 0 };
  lastStarttime = { hour: 12, minute: 0 };
  standalone = true;
	meridian = true;
  typeOfSchudule: Array<string> | undefined;
  model   = {option: 'noRecurrence'};

noRecurrence: boolean = true;
hourly : boolean = false;
daily: boolean = false;
  
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
    if(getSchuduleTye==="No Recurrence"){
      this.noRecurrence = true;
      this.hourly = false;
      this.daily = false;
    }
    else if(getSchuduleTye==="Hourly"){
      this.hourly = true;
      this.noRecurrence = false;
      this.daily = false;
    }
    else if(getSchuduleTye==="Daily"){
      this.daily = true;
      this.hourly = false;
      this.noRecurrence = false;
    }
}
}
