import { Component } from "@angular/core";
import { Subject } from "@custom/rxjs";
import { storeFreeze } from '@custom/ngrx-store-freeze';

@Component({
    selector: "app-hello",
    styleUrls: ["../assets/style/main.css", "../assets/style/main.less", "../assets/style/main.scss"],
    templateUrl: "hello.html"
})
export class HelloComponent {
    public title = "Hello :)";
    s = new Subject();
    constructor() {
        storeFreeze({})
    }
}
