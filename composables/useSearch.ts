import Fuse from "fuse.js";

export type SearchRange = "all" | "products" | "attributes";

export type SearchState = {
  phrase: string;
  isActive: boolean;
  range: SearchRange;
};

const productResults = ref([]);
const attributeResults = ref([]);

export const useSearch = () => {
  const router = useRouter();
  const state = useState<SearchState>("search", () => ({
    phrase: "",
    isActive: false,
    range: "all",
  }));
  const productStorage = useProductStorage();
  const attributeStorage = useAttributeStorage();

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
  };

  const mapResults = (results: Fuse.FuseResult<Product | ProductAttribute>[]) =>
    results.map((result) => result.item);

  const setProductResults = () => {
    productResults.value = mapResults(
      productFuseFactory().search(state.value.phrase)
    );
  };

  const setAttributeResults = () => {
    attributeResults.value = mapResults(
      attributeFuseFactory().search(state.value.phrase)
    );
  };

  watch(
    [
      () => state.value.isActive,
      () => state.value.phrase,
      () => state.value.range,
    ],
    () => {
      if (state.value.isActive) {
        switch (state.value.range) {
          case "all":
            setProductResults();
            setAttributeResults();
            router.push({ path: "/search" });
            break;
          case "products":
            setProductResults();
            router.push({ path: "/products" });
            break;
          case "attributes":
            setAttributeResults();
            router.push({ path: "/attributes" });
            break;
        }
      }
      if (state.value.phrase.length === 0) reset();
    }
  );

  return {
    state,
    productResults,
    attributeResults,
    reset,
  };
};
