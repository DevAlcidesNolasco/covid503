export class CountryTotal {
    constructor(
        public Country: String, 
        public CountryCode:String, 
        public Slug: String, 
        public NewConfirmed: Number, 
        public TotalConfirmed: Number, 
        public NewDeaths: Number, 
        public TotalDeaths: Number, 
        public NewRecovered: Number, 
        public TotalRecovered: Number, 
        public Date: Date
    ) {

    }
}
