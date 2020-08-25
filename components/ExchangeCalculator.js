

Vue.component('exchange-calculator', {
    template:
`
<div id="exchange-calculator" class="card" data-aos="flip-up">
	<div class="card-body">
	<h3 class="card-title text-center">Exchange Calculator</h3>
	<hr>
	<div class="row">
		<div class="col col-sm-12 col-md ">
			<label for="input">Input</label>
			<input id="input" type="number" v-model="inputAmount" class="form-control"
				@keyup="handleInput">
		</div>
		<div class="col col-sm col-md text-center">
			<label for="from-select">From</label>
			<select id="from-select" v-model="selectedFromCurrency"
				class="browser-default custom-select">
				<option v-for="currency in currencies" v-bind:value="currency">
					{{currency}}
				</option>
			</select>
		</div>
		<div class="col col-sm col-md d-flex justify-content-center">
			<button @click="switchCurrencies" class="btn btn-primary mt-4"><i
					class="fas fa-exchange-alt"></i></button>
		</div>
		<div class="col col-sm col-md text-center">
			<label for="to-select">To</label>
			<select id="to-select" v-model="selectedToCurrency" class="browser-default custom-select">
				<option v-for="currency in currencies" v-bind:value="currency">
					{{currency}}
				</option>
			</select>
		</div>
		<div class="col col-sm-12 col-md text-right">
			<label for="output">Result</label>
			<input id="output" type="number" v-model="outputAmount" class="form-control"
				@keyup="handleOutput">
		</div>
		</div>
	</div>
</div>
`,
    data: function(){
        return {
            selectedFromCurrency: "SEK",
            selectedRates: [],
            selectedToCurrency: "USD",
            inputAmount: 0,
            outputAmount: 0,
            currencies: [],
        } 
    },
    async created(){
        this.currencies = await this.fetchCurrencyNames();
        this.selectedRates = await this.fetchCurrencies(
            this.selectedFromCurrency
        );
    },
    watch: {
        /**
         * If the selected from currency is changed, fetch new rates.
		 * And calculate new conversion.
         * @param {Number} newCurrency 
         * @param {Number} oldCurrency
         */
        selectedFromCurrency: async function (newCurrency, oldCurrency) {
            if (_.isEqual(newCurrency, oldCurrency)) return;
            this.selectedRates = await this.fetchCurrencies(newCurrency);
            this.calculateInputOutput(true);
        },
        /**
         * If the selected to currency is changed, calculate new conversion
         * @param {Number} newCurrency
         * @param {Number} oldCurrency
         */
        selectedToCurrency: function (newCurrency, oldCurrency) {
            if (_.isEqual(newCurrency, oldCurrency)) return;
            this.calculateInputOutput(true);
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
        /**
         * Fetch the names of each currency.
		 * @returns object with currencies
         */
        async fetchCurrencyNames() {
            const currency_rates = await fetchFromURL();
            return Object.keys(currency_rates);
        },
        /**
         * Handles the input events from the output field
         */
        handleInput() {
            this.calculateInputOutput(true);
        },
        /**
         * Handles the input events from the input field
         */
        handleOutput() {
            this.calculateInputOutput(false);
        },
        /**
         * Switched the selected currencies with each other
         */
        switchCurrencies() {
            [this.selectedFromCurrency, this.selectedToCurrency] = [
                this.selectedToCurrency,
                this.selectedFromCurrency,
            ];
            shake("#exchange-calculator");
        },
        /**
         * Calculatets the conversion between two currencies
         * @param {Boolean} inputFocused if the first input is focused
         */
        calculateInputOutput(inputFocused) {
            if (inputFocused) {
                this.outputAmount = _.ceil(
                    this.inputAmount *
                        this.selectedRates[this.selectedToCurrency],
                    3
                );
            } else {
                this.inputAmount = _.ceil(
                    this.outputAmount /
                        this.selectedRates[this.selectedToCurrency],
                    3
                );
            }
        },
    }
});
