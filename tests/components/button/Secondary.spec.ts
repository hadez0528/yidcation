import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import ButtonSecondary from "@@/components/button/Secondary.vue";

describe("ButtonSecondary component", () => {
  const commonOptions = {
    attrs: {
      type: "button",
    },
    slots: {
      default: () => "Secondary button component",
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(ButtonSecondary, commonOptions);

    const button = screen.getByText("Secondary button component");
    const buttonClassList = button.classList;

    expect(button).toBeDefined();
    expect(button).toHaveProperty("type", "button");
    expect(buttonClassList).toContain("hover:bg-secondary/90");
    expect(buttonClassList).toContain("text-white");
    expect(buttonClassList).toContain("bg-secondary");
  });

  it("renders unchanged", async () => {
    const component = await renderSuspended(ButtonSecondary, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `"<div id="test-wrapper"><button class="text-white bg-secondary hover:bg-secondary/90 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm text-white bg-secondary hover:bg-secondary/90" type="button">Secondary button component</button></div>"`
    );
  });
});
