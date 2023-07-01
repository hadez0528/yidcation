export type CurrencyCode = "PLN" | "EUR" | "USD";

export type CurrencyState = {
  code: CurrencyCode;
  exchangeRate: number;
};

const exchangeRate = ref<number>(1);

export const useCurrency = (defaultCurrencyCode: CurrencyCode = "PLN") => {
  const state = useState<CurrencyState>("currency", () => ({
    code: defaultCurrencyCode,
  }));

  const getExchangeRate = (currencyCode: CurrencyCode) =>
    fetch(`https://api.exchangerate-api.com/v4/latest/PLN`)
      .then((res) => res.json())
      .then((data) => data.rates[currencyCode])
      .catch(() => 1);

  const convertPrice = (price: number) =>
    Number.parseFloat(price * exchangeRate.value).toFixed(2);

  watch(
    () => state.value.code,
    async () => {
      exchangeRate.value = await getExchangeRate(state.value.code);
    }
  );

  return {
    state,
    convertPrice,
  };
};
