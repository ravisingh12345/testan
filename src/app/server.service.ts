import { Injectable } from '@angular/core';
import { Http,Headers  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServerService {
    
    headers: Headers;
    
    constructor(public http: Http) {
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"
        );
    
        
     }

    getUser(): Observable<any> {

        return this.http.get('http://webshowcase-india.com/demo/vvam/mobileapi/api/getdataravi')
        
       .map(data => {
              
               return data.json();
           });

    }

    getUserById(id): Observable<any> {
        
                return this.http.get('http://localhost/vvam/mobileapi/api/selectdatabyid/'+id)
                
               .map(data => {
                      
                       return data.json();
                   });
        
            }



    saveuser(body: any): Observable<any> {
        let bodyData = JSON.stringify(body);
//let username='pandu';
let username = 'username=foobar';

        return this.http.post
            ('http://localhost/vvam/mobileapi/api/insert',
            username)
            .map(data => {

            //    alert(data);
              
                return data.json();
            });
    }

    update(body: any): Observable<any> {
        let bodyData = JSON.stringify(body);
        return this.http.put
            ('http://localhost/vvam/mobileapi/api/user/'+body.userid,
            bodyData)
            .map(data => {
              
                return data.json();
            });
    }

    deleteUserById(id): Observable<any> {
        
                return this.http.delete('http://localhost/vvam/mobileapi/api/user/'+id)
                
               .map(data => {
                      
                       return data.json();
                   });
        
            }

            private _buildParams(params: any) {
                let urlSearchParams = new URLSearchParams();
            
                for(let key in params){
                    if(params.hasOwnProperty(key)){
                        urlSearchParams.append(key, params[key]);
                    }
                }
                return urlSearchParams.toString();
            }
            

}