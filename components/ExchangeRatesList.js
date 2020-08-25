Vue.component('exchange-rates-list', {
    template: 
`
<div id="rate-list" class="card" data-aos="zoom-out">
<div class="card-body">
    <h3 class="card-title text-center">Exchange rates for {{ exg }}</h3>
    <table class="table text-center">
        <thead>
            <tr>
                <th scope="col"><b>Currency</b></th>
                <th scope="col"><b>Rate</b></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(rate, currency) in exgRates" data-aos="flip-right" data-aos-anchor="#rate-list">
                <td><a @click="exg = currency">{{currency}}</a></td>
                <td>{{_.ceil(rate, 3)}}</td>
            </tr>
        </tbody>
    </table>
</div>
</div>
`,
    data: function() {
        return {
            exg: "SEK",
            exgRates: [],
        }
    },
    async created() {
        this.exgRates = await this.fetchCurrencies(this.exg);
    },
    watch: {
        /**
         * If exg is changed, fetch new currencies for that base.
         * @param {String} newExg new currency
         * @param {String} oldExg old currency
         */
        exg: async function (newExg, oldExg) {
            if (_.isEqual(newExg, oldExg)) return;
            shakeLeftRigt("#rate-list");
            this.exg = newExg;
            this.exgRates = await this.fetchCurrencies(this.exg);
        },
    },
    methods: {
        /**
         * Fetch currencies on the given base.
         * @param {String} base currency
		 * @returns object with currencies and rates
         */
        async fetchCurrencies(base) {
            return await fetchFromURL(`?base=${base}`);
        },

    },
})