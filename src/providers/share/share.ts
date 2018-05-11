import { Injectable } from '@angular/core';
 
@Injectable()
export class ShareService {
     
    userType: string;
 
    constructor() {
        this.userType = 'Blank';
    }
  
    setUser(userType) {
        this.userType = userType;      
    }
  
    getUser() {
        return this.userType;
    }  
}