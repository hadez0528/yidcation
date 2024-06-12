import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import AttributeModalEdit from "@@/components/attribute/modal/Edit.vue";

describe("AttributeModalEdit component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(AttributeModalEdit);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <!--teleport start-->
        <!--teleport end-->
      </div>"
    `);
  });
});
