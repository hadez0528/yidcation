import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import ButtonIcon from "@@/components/button/Icon.vue";

describe("ButtonIcon component", () => {
  const commonOptions = {
    attrs: {
      type: "button",
      iconSrc: "/test.png",
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(ButtonIcon, commonOptions);

    const button = screen.getByRole("button");
    const buttonClassList = button.classList;

    const img = button.children[0] as HTMLElement;
    const imgClassList = img.classList;

    expect(button).toBeDefined();
    expect(button).toHaveProperty("type", "button");
    expect(buttonClassList).toContain("!py-1");
    expect(buttonClassList).toContain("!px-1");

    expect(img).toHaveProperty("width", 24);
    expect(img).toHaveProperty("height", 24);
    expect(img).toHaveProperty("src", "http://localhost:3000/test.png");
    expect(img.style.minWidth).toBe("16px");
    expect(imgClassList).toContain("w-6");
    expect(imgClassList).toContain("h-6");
  });

  it("renders unchanged", async () => {
    const component = await renderSuspended(ButtonIcon, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `"<div id="test-wrapper"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1" type="button"><img class="w-6 h-6" style="min-width: 16px;" src="/test.png" width="24" height="24"></button></div>"`
    );
  });
});
