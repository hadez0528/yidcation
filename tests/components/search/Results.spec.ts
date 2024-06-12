import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import SearchResults from "@@/components/search/Results.vue";

describe("SearchResults component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(SearchResults);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="bg-white rounded p-4 uppercase w-full h-min w-full h-min">
          <h3 class="text-xl text-secondary font-semibold">produkty</h3>
          <p class="text-l mt-4 normalcase text-gray-400"> Brak wyników wyszukiwania </p>
        </div>
        <div class="bg-white rounded p-4 uppercase w-full h-min w-full h-min">
          <h3 class="text-xl text-secondary font-semibold">atrybuty</h3>
          <p class="text-l mt-4 normalcase text-gray-400"> Brak wyników wyszukiwania </p>
        </div>
      </div>"
    `);
  });
});
