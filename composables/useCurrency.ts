export type CurrencyCode = "PLN" | "EUR" | "USD";

export type CurrencyState = {
  code: CurrencyCode;
  exchangeRate: number;
};

export const useCurrency = (defaultCurrencyCode: CurrencyCode = "PLN") => {
  const state = useState<CurrencyState>("currency", () => ({
    code: defaultCurrencyCode,
    exchangeRate: 1,
  }));

  const getExchangeRate = async (currencyCode: CurrencyCode) => {
    try {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/PLN`);
      const data = await res.json();
      return data.rates[currencyCode];
    } catch (error) {
      return 1;
    }
  };

  const convertPrice = (price: number) =>
    Number.parseFloat(price * state.value.exchangeRate).toFixed(2);

  watch(
    () => state.value.code,
    async () => {
      state.value.exchangeRate = await getExchangeRate(state.value.code);
    }
  );

  return {
    state,
    convertPrice,
  };
};
