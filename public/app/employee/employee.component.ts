import {Component, Input} from '@angular/core'
import {Employee} from './employee.model';

@Component({
  selector: 'employee',
  templateUrl: 'app/employee/employee.template.html',
})

export class EmployeeComponent {
  @Input()
  employee: Employee;
}
