import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Data } from "./data";

@Injectable({
  providedIn: "root",
})
export class EmpDataService implements InMemoryDbService {
  createDb() {
    //let loo= 'id:1';
    let employees: Data[] = [
      {
        id: 1,
        name: "Ram",
        location: "Bangalore",
        email: "ram@mail.com",
        mobile: 9867512345,
        userName: "gg",
        firstName: "string",
        lastName: "string",
        birthDate: "2010 - 10 - 10",
        basicSalary: "asd",
        status: "string",
        group: "string",
        description: "datetime",
      },
      {
        id: 2,
        name: "Raj",
        location: "Chennai",
        email: "raj@mail.com",
        mobile: 7867534521,
        userName: "gg",
        firstName: "string",
        lastName: "string",
        birthDate: "2010 - 10 - 10",
        basicSalary: "asd",
        status: "string",
        group: "string",
        description: "datetime",
      },
      {
        id: 3,
        name: "Vinay",
        location: "Pune",
        email: "vinay@mail.com",
        mobile: 9975287450,
        userName: "gg",
        firstName: "string",
        lastName: "string",
        birthDate: "2010 - 10 - 10",
        basicSalary: "asd",
        status: "string",
        group: "string",
        description: "datetime",
      },
    ];

    return { employees };
  }

  constructor() {}
}
