import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { Bet } from "../shared";

@Component({
    selector: 'ka-bet',
    templateUrl: 'bet.html'
})
export class BetComponent implements OnInit {
    @Input() bet: Bet;

    formGroup: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            localGoals: new FormControl(0),
            visitorGoals: new FormControl(0)
        });
    }
}