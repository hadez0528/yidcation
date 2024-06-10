import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import Button from "@@/components/button/index.vue";

describe("Button component", () => {
  const commonOptions = {
    attrs: {
      type: "button",
    },
    slots: {
      default: () => "Base button component",
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(Button, commonOptions);

    const button = screen.getByText("Base button component");

    expect(button).toBeDefined();
    expect(button).toHaveProperty("type", "button");
    expect(button.tagName).toBe("BUTTON");
  });

  it("renders unchanged", async () => {
    const component = await renderSuspended(Button, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `"<div id="test-wrapper"><button class="font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm" type="button">Base button component</button></div>"`
    );
  });
});
