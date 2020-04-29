export class Informe {
    constructor(
        public Country: String,
        public CountryCode: String,
        public Province: String,
        public City: String,
        public CityCode: String,
        public Lat: String,
        public Lon: String,
        public Confirmed: Number,
        public Deaths: Number,
        public Recovered: Number,
        public Active: Number,
        public Date: Date
    ) { }
}
