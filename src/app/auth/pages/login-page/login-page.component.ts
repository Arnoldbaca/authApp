import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private authService = inject(AuthService)
  private router      = inject(Router)

  constructor(
    private fb:FormBuilder,

  ){}
  // private fb = Inject(FormBuilder)

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email ]],
    password: ['', [Validators.required, Validators.minLength(6) ]],
  })

  login(){
    const {email, password} = this.myForm.value
    this.authService.login(email,password)
      .subscribe({
        next:() => this.router.navigateByUrl('/dashboard'),
        error:(message)=> {
          Swal.fire('Error',message,'error')
        }

      })

  }

}
