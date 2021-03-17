import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FormInputType} from '../../app.types';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./_project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  registerFormGroup: FormGroup = this.formBuilder.group({
    firstname: [''],
    lastname: [''],
    email: [''],
  });
  private unsubscribe$ = new Subject();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private appService: AppService) {}

  ngOnInit(): void {
    this.registerFormGroup = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordCheck()]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });
  }

  onSubmit(e: Event) {
    if (e) {
      e.preventDefault();
    }
    this.registerFormGroup.markAllAsTouched();
    const formIns = this.registerFormGroup.getRawValue();

    // stop here if form is invalid
    if (this.registerFormGroup.invalid) {
      return;
    }

    const formData: FormInputType = {
      firstName: formIns.firstname,
      lastName: formIns.lastname,
      email: formIns.email
    };

    this.registerUser(formData);
  }

  registerUser(formData: FormInputType) {
    this.appService.registerUser(formData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
      const dialogRef = this.dialog.open(DialogContentComponent);
      this.registerFormGroup.reset();
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }, (err) => {
      console.log('Registration Error' + err);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public passwordCheck(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const firstname = this.registerFormGroup?.controls.firstname.value;
      const lastname = this.registerFormGroup?.controls.lastname.value;
      const passwd = control.value?.toLowerCase();
      if (passwd !== undefined && passwd !== '' && (firstname !== '' && lastname !== '') &&
        (passwd.includes(firstname.toLowerCase()) ||
          passwd.includes(lastname.toLowerCase()))) {
        return { invalid: true };
      }
      return null;
    };
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerFormGroup.controls[controlName].hasError(errorName);
  }
}

@Component({
  selector: 'app-project-dialog',
  templateUrl: 'project.component.dialog.html',
})
export class DialogContentComponent {}
