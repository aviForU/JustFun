import { Component , ElementRef, ViewChild,AfterViewInit,OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-wishing',
  templateUrl: './wishing.component.html',
  styleUrls: ['./wishing.component.css'],
  animations : [
    trigger('myAwesomeAnimation',[
        state('small',style({
          transform: 'scale(1)',
        })),
      state('large',style({
        transform: 'scale(1.2)',
      })),
      transition('samll <=> large',animate('300ms ease-in',style({
        transform: 'translateY(40px)'
      }))),
    ]),
    trigger('animateName',[
      transition('void => *', animate('3s ease-in'))
    ]),
  ]
})
export class WishingComponent implements OnInit,AfterViewInit {
  state: string = 'small';
  isFormSubmited: boolean = false;
  linkCreationForm: FormGroup;
  @ViewChild('plusElement') plusElement: ElementRef;
  @ViewChild('whatsAppShare') whatsAppShare: ElementRef;
  name:string = 'Avinash Kumar';
  fullName:FormControl;

  constructor(private fb:FormBuilder,private router:Router,private route:ActivatedRoute){

  }

  ngOnInit(){
    this.route.queryParams
      .filter(params => params.name)
      .subscribe(params => {
        console.log(params); // {order: "popular"}
        this.name = params.name;
        console.log(this.name); // popular
      });
    this.createFormControls();
    this.buildLinkCreationForm();
  }

  ngAfterViewInit() {
    this.plusElement.nativeElement.animate({
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
    }, {
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    });
  }

  buildLinkCreationForm():void{
    this.linkCreationForm = this.fb.group({
      fullName : this.fullName
    });
  }

  createFormControls() {
    this.fullName = new FormControl('', Validators.required);
  }

  animateMe(){
    this.state = (this.state === 'small' ? 'large': 'small');
  }

  createLink(value){
    if(value) {
      this.isFormSubmited = true;
      this.name = value.fullName;
      let link = "whatsapp://send?text="+encodeURIComponent("See My Message Here ")+this.whatsAppShare.nativeElement.baseURI+
        "wishing/?name="+this.name;
      if (navigator.userAgent.match(/iPhone|Android/i)) {
        this.whatsAppShare.nativeElement.insertAdjacentHTML('beforeend',
          "<img src='../../assets/images/whatsapp/whatsapplogo.jpeg' height='15px' width='20px'/>" +
          "<a href="+link+">Share on WhatApp</a>" +
          "<img src='../../assets/images/whatsapp/whatsapplogo.jpeg' height='15px' width='20px'/>");
      }
    }
  }

}
