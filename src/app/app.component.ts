import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
  private currentUser: User = {
    name: "test",
    email: "test@test.com"
  };
  private isHidden: boolean = false;

  private getUserDetails(): string {
    return this.currentUser.name + ";" + this.currentUser.email;
  }

  private toggle(): void {
    this.isHidden = !this.isHidden;
  }
}

interface User {
  name: string,
  email: string
}
