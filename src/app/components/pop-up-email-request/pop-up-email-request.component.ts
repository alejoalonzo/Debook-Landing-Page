import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild, Input  } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from '../../../models/user';
import { DataSharingService } from '../../services/data-sharing.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pop-up-email-request',
  standalone: true,
  imports: [
    DialogModule, 
    ButtonModule, 
    InputTextModule, 
    FormsModule, 
    CommonModule, 
    ReactiveFormsModule, 
    TranslateModule],
  templateUrl: './pop-up-email-request.component.html',
  styleUrl: './pop-up-email-request.component.scss',
  providers:[MessageService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PopUpEmailRequestComponent {

  @ViewChild('submitButton') submitButton: any;
  @Input() isDemo: boolean = true;

  userForm!: FormGroup;
  isSubmitted!: boolean;
  users: User[] =[];
  visible: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService, 
    private usersService: DataSharingService, 
  ) {
  }

  ngOnInit(): void {
    this._initFormUser();
  }

  showDialog() {
      this.visible = true;
  }

  private _initFormUser(){
    this.userForm = this.formBuilder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
    })
  }

  onSubmit(){
    this.isSubmitted=true;
    if(this.userForm.invalid){
      return;
    }
    const buttonType = this.isDemo ? 'demo' : 'pitch';
    const userFormData: User = {
      name: this.userForm.controls['name'].value,
      email: this.userForm.controls['email'].value,
      button: buttonType,
    }
    console.log('usersData:', userFormData);
    this._addUser(userFormData)

    this.userForm.disable();

  }


  private _addUser(user: User){
    
    this.usersService.createNewContact(user).subscribe((user: User)=>{
      console.log()
    });
  }

}
