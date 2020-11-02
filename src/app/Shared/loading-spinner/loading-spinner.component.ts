import { Component } from "@angular/core";

@Component({
    selector: 'app-Loading-Spinner',
    template: '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>',
    styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent{}