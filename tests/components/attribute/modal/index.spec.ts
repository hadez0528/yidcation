import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import AttributeModalTableColumnVisibility from "@@/components/attribute/modal/TableColumnVisibility.vue";

describe("AttributeModalTableColumnVisibility component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(
      AttributeModalTableColumnVisibility
    );

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <!--teleport start-->
        <!--teleport end-->
      </div>"
    `);
  });
});
