// import { Directive, HostBinding, HostListener } from '@angular/core';

// @Directive({
//   selector: '[cmsDropdown]'
// })
// export class DropdownDirective {

//   @HostBinding('class.open') isOpen = false;

//   @HostListener('click') toggleOpen(){
//     this.isOpen = !this.isOpen;
//   }

//   constructor() { }
// }

// Replace above code with below code to have the drop down menus closeable by clicking anywhere outside of it

import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[cmsDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
