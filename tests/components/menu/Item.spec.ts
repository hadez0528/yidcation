import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import MenuItem from "@@/components/menu/Item.vue";

describe("MenuItem component", () => {
  const commonOptions = {
    attrs: {
      to: "/test",
      iconSrc: "/test.png",
      name: "test",
    },
  };

  it("renders without errors", async () => {
    const { container } = await renderSuspended(MenuItem, commonOptions);

    const link = container.firstChild?.firstChild as HTMLElement;
    const icon = link.children[0];
    const name = link.children[1];

    expect(link).toBeDefined();
    expect(link).toHaveProperty("href", "http://localhost:3000/test");

    expect(icon).toBeDefined();
    expect(icon).toHaveProperty("src", "http://localhost:3000/test.png");
    expect(icon).toHaveProperty("alt", "test");
    expect(icon).toHaveProperty("width", 42);
    expect(icon).toHaveProperty("height", 42);

    expect(name).toBeDefined();
    expect(name.textContent).toBe("test");
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(MenuItem, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(
      `"<div id="test-wrapper"><a href="/test" class="flex items-center gap-x-2 px-8 py-4 text-left bg-secondary hover:bg-secondary/90 cursor-pointer w-full"><img src="/test.png" alt="test" width="42" height="42"><span class="text-lg text-white">test</span></a></div>"`
    );
  });
});
