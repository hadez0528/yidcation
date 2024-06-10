import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import ButtonText from "@@/components/button/Text.vue";

describe("ButtonText component", () => {
  const commonOptions = {
    attrs: {
      type: "button",
    },
    slots: {
      default: () => "Text button component",
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(ButtonText, commonOptions);

    const button = screen.getByText("Text button component");
    const buttonClassList = button.classList;

    expect(button).toBeDefined();
    expect(button).toHaveProperty("type", "button");
    expect(buttonClassList).toContain("hover:bg-gray-50");
    expect(buttonClassList).toContain("text-tertiary");
  });

  it("renders unchanged", async () => {
    const component = await renderSuspended(ButtonText, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `"<div id="test-wrapper"><button class="hover:bg-gray-50 text-tertiary font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm hover:bg-gray-50 text-tertiary" type="button">Text button component</button></div>"`
    );
  });
});
