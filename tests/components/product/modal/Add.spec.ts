import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import ProductModalAdd from "@@/components/product/modal/Add.vue";

describe("ProductModalAdd component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(ProductModalAdd);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <!--teleport start-->
        <!--teleport end-->
      </div>"
    `);
  });
});
