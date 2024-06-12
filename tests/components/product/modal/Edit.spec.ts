import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import ProductModalEdit from "@@/components/product/modal/Edit.vue";

describe("ProductModalEdit component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(ProductModalEdit);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <!--teleport start-->
        <!--teleport end-->
      </div>"
    `);
  });
});
