import { Component, Input } from '@angular/core';
import { GraphUser } from "../../shared/models/graph-user.model";
@Component({
  selector: 'hello',
  template: `<h5>Hello {{user.displayName}}!</h5>
  <img [src]="user.photo || 'assets/img/no-profile-pic.jpg'" class="img-avatar" alt="{{user.userPrincipalName}}"/>
  `,
  styles: [`h5 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() user: GraphUser;
  
}

public createImage = (imageType, file) => {
    let img = `data:${imageType};base64,${file}`;
    return img;
  }