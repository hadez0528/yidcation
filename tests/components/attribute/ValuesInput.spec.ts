import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import ValuesInput from "@@/components/attribute/ValuesInput.vue";

describe("ValuesInput component", () => {
  const commonOptions = {
    attrs: {
      reset: false,
    },
  };

  it("renders unchanged", async () => {
    const container = await renderSuspended(ValuesInput, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="flex flex-col gap-1"><span class="font-semibold text-sm text-secondary">Wartości</span>
          <!--v-if-->
          <div class="max-h-64 overflow-y-auto border rounded flex flex-col gap-4 p-4 border-gray-100"><button class="!py-1 !px-1 border rounded border-gray-100 !py-4 hover:bg-gray-100 border rounded border-gray-100 !py-4 hover:bg-gray-100 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1 border rounded border-gray-100 !py-4 hover:bg-gray-100 border rounded border-gray-100 !py-4 hover:bg-gray-100" type="button"><img class="w-6 h-6" style="min-width: 16px;" src="/plus-box.svg" width="24" height="24"></button></div>
        </div>
      </div>"
    `);
  });
});
