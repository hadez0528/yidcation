import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import AttributeModalAdd from "@@/components/attribute/modal/Add.vue";

describe("AttributeModalAdd component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(AttributeModalAdd);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <!--teleport start-->
        <!--teleport end-->
      </div>"
    `);
  });
});
