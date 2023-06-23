export type SearchRange = "all" | "products" | "categories";

export type SearchState = {
  phrase: string;
  isActive: boolean;
  range: SearchRange;
};

export const useSearch = () => {
  const state = useState<SearchState>("searchState", () => ({
    phrase: "",
    isActive: false,
    range: "all",
  }));

  return {
    state,
  };
};
