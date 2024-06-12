import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import SearchResultItem from "@@/components/search/ResultItem.vue";

describe("SearchResultItem component", () => {
  const commonOptions = {
    attrs: {
      id: "test id",
      name: "test name",
    },
  };

  it("renders unchanged", async () => {
    const container = await renderSuspended(SearchResultItem, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="flex flex-row items-center hover:bg-gray-100 cursor-pointer bg-gray-50 gap-x-4 w-full p-4"><span class="text-base text-slate-700">test id</span><span class="text-base text-slate-700 grow">test name</span><img src="/arrow-box.svg" width="32" height="32"></div>
      </div>"
    `);
  });
});
