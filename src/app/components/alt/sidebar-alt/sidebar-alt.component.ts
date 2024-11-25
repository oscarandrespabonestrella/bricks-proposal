import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "sidebar-alt",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./sidebar-alt.component.html",
  styles: `
  .sidebar-section li.active{
    background: #f1f5f9;
    border-top-left-radius: 6em;
    border-bottom-left-radius: 6em;
    color: #3c77bd;
    position:relative;
  }
  .sidebar-section li.active:before{
    position: absolute;
    top:-30px;
    width: 30px;
    height:30px;
    right: 0px;
    content: "";
    background: transparent;
    transform: rotate(280deg);
    border-bottom-left-radius: 50%;
    box-shadow: 0 20px 0 0 #f1f5f9;
  }
  .sidebar-section li.active:after{
    position: absolute;
    bottom:-30px;
    width: 30px;
    height:30px;
    right: 0;
    content: "";    
    background: transparent;
    transform: rotate(180deg);
    border-bottom-left-radius: 50%;

/* box shadow to give the shadow of the pseudo-element the same color as the background */
    box-shadow: 0 20px 0 0 #f1f5f9;
  }


  
  `,
})
export class SidebarAltComponent {
  @Input() isOpen = true;
}
