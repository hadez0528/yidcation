import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import ButtonPrimary from "@@/components/button/Primary.vue";

describe("ButtonPrimary component", () => {
  const commonOptions = {
    attrs: {
      type: "button",
    },
    slots: {
      default: () => "Primary button component",
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(ButtonPrimary, commonOptions);

    const button = screen.getByText("Primary button component");
    const buttonClassList = button.classList;

    expect(button).toBeDefined();
    expect(button).toHaveProperty("type", "button");
    expect(buttonClassList).toContain("hover:bg-primary/90");
    expect(buttonClassList).toContain("text-white");
    expect(buttonClassList).toContain("bg-primary");
  });

  it("renders unchanged", async () => {
    const component = await renderSuspended(ButtonPrimary, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `"<div id="test-wrapper"><button class="bg-primary hover:bg-primary/90 text-white font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm bg-primary hover:bg-primary/90 text-white" type="button">Primary button component</button></div>"`
    );
  });
});
