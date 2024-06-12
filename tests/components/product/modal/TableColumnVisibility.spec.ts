import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import ProductModalTableColumnVisibility from "@@/components/product/modal/TableColumnVisibility.vue";

describe("ProductModalTableColumnVisibility component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(ProductModalTableColumnVisibility);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <!--teleport start-->
        <!--teleport end-->
      </div>"
    `);
  });
});
