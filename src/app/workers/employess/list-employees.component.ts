import { Component, OnInit, OnChanges } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{
  employees: Employee[] ;
  empToDisplay: Employee;
  dataFromChild: Employee;
  private arrayIndex = 1;

  constructor(
    private _router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  nextEmployee(): void {
    this.empToDisplay = this.employees[2];
    if( this.arrayIndex <= 2 ) {
      this.empToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
        this.empToDisplay = this.employees[1];
        this.arrayIndex = 1;
    }
}

handleNotify(e: Employee) {
  this.dataFromChild = e;
}
onClick(employee: Employee) {
  console.log(employee);
  this._router.navigate(['/employees', employee.id]);
}
}
