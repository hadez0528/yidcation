import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import Box from "@@/components/box/index.vue";

describe("Box component", () => {
  const commonOptions = {
    attrs: {
      role: "presentation",
    },
    slots: {
      default: () => "test text",
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(Box, commonOptions);

    const box = screen.getByRole("presentation");
    const boxClassList = box.classList;

    expect(box).toBeDefined();
    expect(box.textContent).toBe("test text");
    expect(boxClassList).toContain("bg-white");
    expect(boxClassList).toContain("rounded");
    expect(boxClassList).toContain("p-4");
    expect(boxClassList).toContain("uppercase");
  });

  it("renders unchanged", async () => {
    const component = await renderSuspended(Box, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `
      "<div id="test-wrapper">
        <div class="bg-white rounded p-4 uppercase" role="presentation">test text</div>
      </div>"
    `
    );
  });
});
