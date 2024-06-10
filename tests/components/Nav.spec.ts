import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import Nav from "@@/components/Nav.vue";

describe("Nav component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(Nav);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <nav class="flex px-8 py-4 bg-white items-center w-full flex-col gap-y-4 md:flex-row"><img src="/logo.svg" alt="logo">
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
          <div class="flex flex-col ml-4">
            <div class="flex flex-col">
              <!--v-if-->
              <!--v-if-->
            </div><select id="nDPA1A9Vgag_2" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent ml-4">
              <option value="PLN">PLN</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </nav>
      </div>"
    `);
  });
});
