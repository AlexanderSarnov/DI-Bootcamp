
// Declare variables to access DOM
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const input = document.getElementById("input");
const convert = document.getElementById("convert")
const output = document.getElementById("output");
const switchButton = document.getElementById("switchButton");

// Dealing with cache
let currenciesCache = {}; // Storing currencies list (no need for expiration time since the list is short)
let conversionRateCache = {}; // Handling multiple switch button presses
const cacheExpirationTime = 5 * 60 * 1000; // Set cache expiration time in milliseconds (e.g., 5 minutes)

// Event Listeners
window.addEventListener("DOMContentLoaded", fetchCurrencies); // Call after elements exist
convert.addEventListener("click", fetchConversion);
switchButton.addEventListener("click", switchCurrencies);

// Functions
async function fetchCurrencies() { // fetch currencies list from API for user selection and store the list in cache for further use of app
    try {
        const response = await fetch("https://v6.exchangerate-api.com/v6/23ab6ac906b75e95920165f2/codes");
        const data = await response.json();
        // Store currencies in cache
        currenciesCache = data.supported_codes;
        populateDropdown(currenciesCache);
    } catch (error) {
        console.error(error);
    }

}

function populateDropdown(codes) { // show lists of currencies for user to pick from
    const entries = Object.entries(codes);

    for (const entry of entries) {
        const [index, [code, name]] = entry;
        const option = document.createElement("option")

        option.innerText = code + ", " + name // for user
        option.value = code // for further comparison

        // Append the option to both dropdown elements as clones
        fromSelect.appendChild(option.cloneNode(true));
        toSelect.appendChild(option.cloneNode(true));
    }
}



async function fetchConversion() {
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    const cacheKey = `${fromCurrency}-${toCurrency}`;

    const cachedData = conversionRateCache[cacheKey];
    const now = Date.now();

    // Check if cached data exists and is not expired
    if (cachedData && now - cachedData.timestamp < cacheExpirationTime) {
        convertRate(cachedData.rate);
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/23ab6ac906b75e95920165f2/pair/${fromCurrency}/${toCurrency}`);
        const data = await response.json();
        const rate = data.conversion_rate;

        conversionRateCache[cacheKey] = { rate, timestamp: now };
        convertRate(rate);
    } catch (error) {
        console.error(error);
    }
}

function convertRate(rate) {
    const inputAmount = Number(input.value);
    if (isNaN(inputAmount)) {
        // Display an error message: "Please enter a valid number"
        return;
    }
    const totalOutput = inputAmount * rate;
    console.log("total:", totalOutput);
    output.innerText = `${inputAmount} ${fromSelect.value} = ${totalOutput} ${toSelect.value}`
}

function switchCurrencies() {
    // Swap values of fromSelect and toSelect
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;

    // Recalculate and update output
    fetchConversion();
}

