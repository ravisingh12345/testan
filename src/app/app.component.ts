import { Component } from '@angular/core';


import { ServerService } from './server.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  data: any[]=[];
  datanew:any[]=[];
  constructor(private _service: ServerService) {
    this.get();
  }
  get() {
     this._service.getUser().subscribe(
      response => {
         // debugger;
        this.data=response; 
      },
      error => {
        //debugger;
      });
  }


  getnew() {
    this._service.getUser().subscribe(
     response => {
        // debugger;
       this.datanew=response; 
     },
     error => {
      // debugger;
     });
 }










  /*
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
*/

}
