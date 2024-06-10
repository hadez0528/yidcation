import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import BoxTitle from "@@/components/box/Title.vue";

describe("BoxTitle component", () => {
  const commonOptions = {
    slots: {
      default: () => "test title",
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(BoxTitle, commonOptions);

    const title = screen.getByRole("heading");
    const titleClassList = title.classList;

    expect(title).toBeDefined();
    expect(title.textContent).toBe("test title");
    expect(title.tagName).toBe("H3");
    expect(titleClassList).toContain("text-xl");
    expect(titleClassList).toContain("text-secondary");
    expect(titleClassList).toContain("font-semibold");
  });

  it("renders unchanged", async () => {
    const component = await renderSuspended(BoxTitle, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `
      "<div id="test-wrapper">
        <h3 class="text-xl text-secondary font-semibold">test title</h3>
      </div>"
    `
    );
  });
});
