import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import SearchForm from "@@/components/search/Form.vue";

describe("SearchForm component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(SearchForm);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <form class="flex flex-row md:ml-8 md:mr-auto w-full max-w-md">
          <div class="flex flex-col rounded-e-none w-full" type="text" placeholder="Wyszukaj coś.." value="">
            <div class="flex flex-col">
              <!--v-if-->
              <!--v-if-->
            </div><input id="nDPA1A9Vgag_0" class="focus:border focus:border-secondary focus:border-solid rounded bg-gray-50 p-2 text-tertiary text-sm outline-none text-color-slate-700 border border-transparent rounded-e-none w-full" type="text" placeholder="Wyszukaj coś..">
          </div>
          <div class="flex flex-col rounded-s-none border-l border-l-gray-100">
            <div class="flex flex-col">
              <!--v-if-->
              <!--v-if-->
            </div><select id="nDPA1A9Vgag_1" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent rounded-s-none border-l border-l-gray-100">
              <option value="all">Wszystko</option>
              <option value="products">Produkty</option>
              <option value="attributes">Atrybuty</option>
            </select>
          </div>
        </form>
      </div>"
    `);
  });
});
