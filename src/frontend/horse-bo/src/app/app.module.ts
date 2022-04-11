import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RetirementComponent } from './retirement/retirement.component';
import { ResultComponent } from './result/result.component';
import { NotificationComponent } from './notification/notification.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { MenuComponent } from './menu/menu.component';
import { InitialcontentComponent } from './initialcontent/initialcontent.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LoginComponent,
    RetirementComponent,
    ResultComponent,
    NotificationComponent,
    ForgotPassComponent,
    MenuComponent,
    InitialcontentComponent
  ],
  imports: [
    NgbModule,
    NzButtonModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
    NzBadgeModule,
    NzDropDownModule,
    CommonModule,
    DataTablesModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
