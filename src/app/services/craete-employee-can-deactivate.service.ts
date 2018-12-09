import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from '../workers/create-employee/create-employee.component';

@Injectable()
export class CraeteEmployeeCanDeactivateService  implements CanDeactivate<CreateEmployeeComponent>{

  constructor() { }
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.createEmplyoeeForm.dirty) {
      return confirm('are you sure u want to discard changes?');
    }

    return true;
    }

}
