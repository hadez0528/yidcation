import { describe, expect, it } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import Menu from "@@/components/menu/index.vue";

describe("Menu component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(Menu);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="columns-2 gap-0"><a href="/products" class="flex items-center gap-x-2 px-8 py-4 text-left bg-secondary hover:bg-secondary/90 cursor-pointer w-full"><img src="/products.svg" alt="Produkty" width="42" height="42"><span class="text-lg text-white">Produkty</span></a><a href="/attributes" class="flex items-center gap-x-2 px-8 py-4 text-left bg-secondary hover:bg-secondary/90 cursor-pointer w-full"><img src="/attributes.svg" alt="Atrybuty" width="42" height="42"><span class="text-lg text-white">Atrybuty</span></a></div>
      </div>"
    `);
  });
});
