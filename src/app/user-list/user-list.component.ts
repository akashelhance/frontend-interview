import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist: boolean= false
  User: any = [];
  console = console;
  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadUser();
  }

  // Get employees list
  loadUser() {
    return this.restApi.getUsers().subscribe((data: any) => {
      if(data.length !=0){

        this.User = data;
        this.userlist = false

      }

      else{
        this.userlist = true
      }
      
    });
  }




  // Delete employee
  deleteUser(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteUser(id).subscribe((data) => {
        this.loadUser();
      });
    }
  }
}
