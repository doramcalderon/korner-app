import { Component, Input } from "@angular/core";
import { Bet } from "../shared";

@Component({
    selector: 'ka-bet',
    templateUrl: 'bet.html'
})
export class BetComponent {
    @Input() bet: Bet;

}