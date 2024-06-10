import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import Footer from "@@/components/Footer.vue";

describe("Footer component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(Footer);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <footer class="flex flex-row items-center justify-center gap-x-1 p-8"><span class="text-tertiary font-semibold">Created by</span><a href="http://github.michalgolda.com" class="flex flex-row items-center font-semibold text-secondary gap-x-1 underline"><img src="/github.svg" width="24" height="24"> michalgolda </a></footer>
      </div>"
    `);
  });
});
