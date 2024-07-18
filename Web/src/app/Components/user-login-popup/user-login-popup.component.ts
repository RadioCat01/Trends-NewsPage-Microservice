import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CheckUSerService } from '../../Services/User/check-user.service';

@Component({
  selector: 'app-user-login-popup',
  templateUrl: './user-login-popup.component.html',
  styleUrl: './user-login-popup.component.scss'
})
export class UserLoginPopupComponent {
  preferencesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private checkUserService: CheckUSerService,
    public dialogRef: MatDialogRef<UserLoginPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.preferencesForm = this.fb.group({
      preference1: false,
      preference2: false,
      preference3: false
      // Add more preferences as needed
    });
  }

  onSave(): void {
    const selectedPreferences = this.getSelectedPreferences();
    this.checkUserService.savePreferences(selectedPreferences)
      .subscribe(response => {
        console.log('Preferences saved successfully:', response);
        this.dialogRef.close(true); 
      }, error => {
        console.error('Error saving preferences:', error);
      });
  }

  togglePreference(preference: string): void {
    const formControl = this.preferencesForm.get(preference);
    if (formControl) {
      
      formControl.setValue(!formControl.value);
      console.log(formControl.value);
    }
  }

  private getSelectedPreferences(): string[] {
    const preferences = this.preferencesForm.value;
    return Object.keys(preferences).filter(key => preferences[key]);
  }
}
