import { resolve } from "path";

export type CurrencyCode = "PLN" | "EUR" | "USD";

export type CurrencyState = {
  code: CurrencyCode;
  exchangeRate: number;
};

const exchangeRate = ref(1);

export const useCurrency = (defaultCurrencyCode: CurrencyCode = "PLN") => {
  const getExchangeRate = (currencyCode: CurrencyCode) =>
    fetch(`https://api.exchangerate-api.com/v4/latest/PLN`)
      .then((res) => res.json())
      .then((data) => Number.parseFloat(data.rates[currencyCode]).toFixed(2))
      .catch((err) => console.error(err));

  const state = useState<CurrencyState>("currency", () => ({
    code: defaultCurrencyCode,
  }));

  watch(
    () => state.value.code,
    async () => {
      exchangeRate.value = await getExchangeRate(state.value.code);
    }
  );

  return {
    state,
    exchangeRate,
  };
};
