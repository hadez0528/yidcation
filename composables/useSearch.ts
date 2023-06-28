import Fuse from "fuse.js";

export type SearchRange = "all" | "products" | "attributes";

export type SearchState = {
  phrase: string;
  isActive: boolean;
  range: SearchRange;
};

export const useSearch = () => {
  const router = useRouter();
  const state = useState<SearchState>("search", () => ({
    phrase: "",
    isActive: false,
    range: "all",
  }));
  const productStorage = useProductStorage();
  const attributeStorage = useAttributeStorage();

  const productResults = ref([]);
  const attributeResults = ref([]);

  const fuseFactory = <T>(source: T[], options: Fuse.IFuseOptions<T>) =>
    new Fuse(source, options);

  const productFuseFactory = () =>
    fuseFactory<Product>(productStorage.entities.value, {
      keys: [
        "id",
        "name",
        "description",
        {
          name: "attributes",
          getFn: (product): string[] => Object.values(product.attributes),
        },
      ],
    });

  const attributeFuseFactory = () =>
    fuseFactory<ProductAttribute>(attributeStorage.entities.value, {
      keys: ["id", "name", "type", "values"],
    });

  const reset = () => {
    productResults.value = [];
    attributeResults.value = [];
    state.value.phrase = "";
    state.value.isActive = false;
    state.value.range = "all";
  };

  watch(
    [() => state.value.isActive, () => state.value.phrase],
    () => {
      if (state.value.isActive) {
        switch (state.value.range) {
          case "all":
            router.push({ path: "/search" });
            productResults.value = productFuseFactory().search(
              state.value.phrase
            );
            attributeResults.value = attributeFuseFactory().search(
              state.value.phrase
            );
            break;
          case "products":
            router.push({ path: "/products" });
            productResults.value = productFuseFactory().search(
              state.value.phrase
            );
            break;
          case "attributes":
            router.push({ path: "/attributes" });
            attributeResults.value = attributeFuseFactory().search(
              state.value.phrase
            );
            break;
        }
      }

      if (state.value.phrase.length === 0) reset();
    },
    { deep: true }
  );

  return {
    state,
    ...state.value,
    productResults,
    attributeResults,
    reset,
  };
};
