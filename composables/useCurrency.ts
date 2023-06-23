export type CurrencyCode = "PLN" | "EUR" | "USD";

export const useCurrency = (defaultCurrencyCode: CurrencyCode = "PLN") => {
  const code = useState<CurrencyCode>(
    "currencyCode",
    () => defaultCurrencyCode
  );
  return {
    code,
  };
};
