import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private _id: number;
  employee: Employee;
  constructor(
    private _route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {
    // const id = +this._route.snapshot.params['id'];
    // this._id = +this._route.snapshot.paramMap.get('id');

    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.employee = this._employeeService.getEmployee(this._id);
    });


  }
  viewNextEmployee() {
    if( this._id < 3) {
      this._id = this._id + 1;
      this._router.navigate(['/employees', this._id]);
    }else {
      this._id  = 1;
      this._router.navigate(['/employees', this._id]);
    }

  }

}
