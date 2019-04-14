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
            localGoals: new FormControl(this.bet.localGoals),
            visitorGoals: new FormControl(this.bet.visitorGoals),
        });
    }
}
