import { Component, Injectable, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements OnInit {

  FormData!: FormGroup;
  private api = 'https://mailthis.to/confirm';

  constructor(private builder: FormBuilder, private contact: ContactService) {}

  onSubmit(FormData: any) {
    console.log(FormData);
    this.contact.PostMessage(FormData).subscribe(
      (response: any) => {
        location.href = this.api;
        console.log(response);
      },
      (error: { responseText: any }) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }

  getErrorStringName() {
    if (this.FormData.controls['name'].hasError('required')) {
      return 'Această casetă trebuie completată.';
    }
    return '';
  }

  getErrorStringMessage() {
    if (this.FormData.controls['message'].hasError('required')) {
      return 'Această casetă trebuie completată.';
    }
    return '';
  }

  getErrorStringEmail() {
    if (this.FormData.controls['email'].hasError('required')) {
      return 'Această casetă trebuie completată.';
    }

    return this.FormData.controls['email'].hasError('email') ? 'Email-ul nu este valid.' : '';
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }
}
