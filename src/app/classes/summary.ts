import { GlobalTotal } from './global-total';
import { CountryTotal } from './country-total';

export class Summary {
    constructor(
        public Global: GlobalTotal,
        public Countries: Array<CountryTotal>
    ){

    }
}
