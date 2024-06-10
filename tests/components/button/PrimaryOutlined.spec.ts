import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import PrimaryOutlined from "@@/components/button/PrimaryOutlined.vue";

describe("PrimaryOutlined component", () => {
  const commonOptions = {
    attrs: {
      type: "button",
    },
    slots: {
      default: () => "Primary outlined button component",
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(PrimaryOutlined, commonOptions);

    const button = screen.getByText("Primary outlined button component");
    const buttonClassList = button.classList;

    expect(button).toBeDefined();
    expect(button).toHaveProperty("type", "button");
    expect(buttonClassList).toContain("hover:bg-orange-500");
    expect(buttonClassList).toContain("hover:text-white");
    expect(buttonClassList).toContain("border");
    expect(buttonClassList).toContain("border-solid");
    expect(buttonClassList).toContain("text-orange-500");
    expect(buttonClassList).toContain("border-orange-500");
  });

  it("renders unchanged", async () => {
    const component = await renderSuspended(PrimaryOutlined, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `"<div id="test-wrapper"><button class="text-orange-500 border border-solid border-orange-500 hover:bg-orange-500 hover:text-white font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm text-orange-500 border border-solid border-orange-500 hover:bg-orange-500 hover:text-white" type="button">Primary outlined button component</button></div>"`
    );
  });
});
