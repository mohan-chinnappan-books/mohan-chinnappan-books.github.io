import { LightningElement, api } from 'lwc';

export default class TCRM2 extends LightningElement {
    @api title = "LWC2!";
    @api results;

    get output () {
        return JSON.stringify(this.results, null, 4);
    }
}