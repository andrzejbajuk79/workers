import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  email2 =  '';
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    // department: null,
     department: 'select',
    isActive: null,
    photoPath: null,

  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'HR' }
  ];

  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        minDate: new Date(1978, 0, 1),
        maxDate: new Date(1979, 0, 1),
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  ngOnInit() {}
  onSubmit(newEmployee: Employee): void {
    console.log(newEmployee);

  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
