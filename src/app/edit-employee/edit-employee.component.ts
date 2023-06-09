import { Component, OnInit } from "@angular/core";
import { Data } from "../data";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { Title } from "@angular/platform-browser";
import { GetDataService } from "../get-data.service";
// import { from } from 'rxjs';

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.css"],
})
export class EditEmployeeComponent implements OnInit {
  //emp:Data;
  userName: string = "";
  firstName: string;
  lastName: string;
  birthDate: string;
  basicSalary: string;
  status: string;
  group: string;
  description: string;
  empname: string = "";
  emplocation: string = "";
  empemail: string = "";
  empmobile: number;
  id: number;
  title: string = "Edit Employee";

  public message: string = "";
  location: string[] = ["Bangalore", "Chennai", "Pune", "Hyderabad"];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private tab: Title,
    private svc: GetDataService
  ) {
    tab.setTitle("Edit Employee");
    // console.log(this.empname);
  }

  public edit(x) {
    this.empname = x.value.empname;
    this.emplocation = x.value.emploc;
    this.empemail = x.value.empemail;
    this.empmobile = x.value.empmobile;
    this.userName = x.value.userName;
    this.firstName = x.value.firstName;
    this.lastName = x.value.lastName;
    this.birthDate = x.value.birthDate;
    this.basicSalary = x.value.basicSalary;
    this.status = x.value.status;
    this.group = x.value.group;
    this.description = x.value.description;
    // let doc=new Data(this.empid,this.empname,this.emplocation,this.empemail,this.empmobile);
    let doc = new Data(
      this.id,
      this.empname,
      this.emplocation,
      this.empemail,
      this.empmobile,
      this.userName,
      this.firstName,
      this.lastName,
      this.birthDate,
      this.basicSalary,
      this.status,
      this.group,
      this.description
    );
    //this.id--
    this.http.put("api/employees" + "/" + this.id, doc).subscribe((res) => {
      console.log("Updated");
      this.router.navigate(["/employees"]);
    });
    //this.emp.email=this.empemail;
    //this.
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get("id");
      console.log(this.id);
    });

    this.svc.getData(this.id).subscribe((response: Data) => {
      // this.emp=response
      this.empname = response.name;
      this.emplocation = response.location;
      this.empemail = response.email;
      this.empmobile = response.mobile;
      this.userName = response.userName;
      this.firstName = response.firstName;
      this.lastName = response.lastName;
      this.birthDate = response.birthDate;
      this.basicSalary = response.basicSalary;
      this.status = response.status;
      this.group = response.group;
      this.description = response.description;
      //console.log(this.)
    });
  }
}
