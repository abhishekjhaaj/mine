import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeeService } from './service/employee.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthModule } from './module/auth/auth.module';
// import { AuthModule_1 as AuthModule } from "./module/auth/auth.module";
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EmployeelistComponent,
        EmployeedetailComponent,
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AuthModule
    ]
})
export class AppModule { }
