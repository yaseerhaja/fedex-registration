import {HttpClientModule} from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../../app-routing.module';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent ],
      imports: [
        BrowserModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatDialogModule,
        HttpClientModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit() method ', () => {
    spyOn(component, 'registerUser');
    const evt = new Event('event');
    component.registerFormGroup.controls.firstname.setErrors(null);
    component.registerFormGroup.controls.lastname.setErrors(null);
    component.registerFormGroup.controls.email.setErrors(null);
    component.registerFormGroup.controls.password.setErrors(null);
    component.registerFormGroup.controls.confirmpassword.setErrors(null);
    component.onSubmit(evt);
    expect(component.registerUser).toHaveBeenCalled();
  });

  it('should call onSubmit() method with no register call made - Invalid email', () => {
    spyOn(component, 'registerUser');
    component.registerFormGroup.controls.email.setErrors({ invalid: true });
    const evt = new Event('event');
    component.onSubmit(evt);
    expect(component.registerUser).not.toHaveBeenCalled();
  });

  it('should call onSubmit() method with no register call made - No Input Field Given', () => {
    spyOn(component, 'registerUser');
    component.registerFormGroup.controls.firstname.setValue('');
    component.registerFormGroup.controls.lastname.setValue('');
    component.registerFormGroup.controls.email.setValue('');
    component.registerFormGroup.controls.password.setValue('');
    const evt = new Event('event');
    component.onSubmit(evt);
    expect(component.registerUser).not.toHaveBeenCalled();
  });

  it('should call onSubmit() method with no register call made - Password contain first name', () => {
    spyOn(component, 'registerUser');
    component.registerFormGroup.controls.firstname.setValue('Name');
    component.registerFormGroup.controls.lastname.setValue('Last');
    component.registerFormGroup.controls.email.setValue('yas@in.com');
    component.registerFormGroup.controls.password.setValue('qweName234');
    const evt = new Event('event');
    component.onSubmit(evt);
    expect(component.registerUser).not.toHaveBeenCalled();
  });

  it('should call onSubmit() method with no register call made - Password contain minimum of 8 char', () => {
    spyOn(component, 'registerUser');
    component.registerFormGroup.controls.firstname.setValue('Name');
    component.registerFormGroup.controls.lastname.setValue('Last');
    component.registerFormGroup.controls.email.setValue('yas@in.com');
    component.registerFormGroup.controls.password.setValue('qw234');
    const evt = new Event('event');
    component.onSubmit(evt);
    expect(component.registerUser).not.toHaveBeenCalled();
  });

});
