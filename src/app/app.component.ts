import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  role = 'admin';

  roles = ['admin', 'user', 'view'];

  addItem(){
    this.roles.push(this.role);
  }
  deleteItem(index: number){
    this.roles.splice(index, 1);
  }
}
