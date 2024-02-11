import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild, Input  } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { User } from '../../../models/user';
import { DataSharingService } from '../../services/data-sharing.service';


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
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PopUpEmailRequestComponent {


  @ViewChild('submitButton') submitButton: any;
  @Input() isDemo: boolean = true;

  @Input() popupButtonText: string = 'sections.funds-go-to-dev.interact';
  @Input() buttonClass: string = 'button-black-long';
  

  currentLanguageOnPopoup: string = 'es';
  isSpanish: boolean = true; 

  userForm!: FormGroup;
  isSubmitted!: boolean;
  users: User[] =[];
  visible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: DataSharingService, 
  ) {
  }

  ngOnInit(): void {
    this._initFormUser();
  }

  showDialog() {
      this.visible = true;
  }
  closeDialog() {
    this.visible = false;
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
    // this.updateLanguage()
    const buttonType = this.isDemo ? 'demo' : 'pitch';
    const language = this.isSpanish ? 'es' : 'en';

    const userFormData: User = {
      name: this.userForm.controls['name'].value,
      email: this.userForm.controls['email'].value,
      button: buttonType,
      language: language,
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

/*
  updateLanguage() {
    this.currentLanguageOnPopoup = this.translate.currentLang;
    if (this.currentLanguageOnPopoup === 'es') {
      this.isSpanish = true;
    } else if (this.currentLanguageOnPopoup === 'en') {
      this.isSpanish = false;
    
  }
}*/
}