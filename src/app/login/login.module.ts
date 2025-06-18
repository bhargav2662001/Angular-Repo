import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule, NgClass } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { LoginPageRoutingModule } from "./login-routing.module";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { AuthComponent } from "./auth/auth.component";


@NgModule({
    declarations: [
        LoginComponent,
        LandingpageComponent,
        AuthComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgClass,
        LoginPageRoutingModule,

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }