import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators}from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

messageForm:FormGroup;
submitted=false;//flag for successful form submission
success=false;//flag for successful validation

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm=this.formBuilder.group({
      name:['',Validators.required],
      message:['',Validators.required]
    });
  }
  onSubmit(){
    this.submitted=true;

    if(this.messageForm.invalid){
        return;
    }
    this.success=true;
  }

}
