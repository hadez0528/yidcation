import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import AttributeTableBodyRow from "@@/components/attribute/table/BodyRow.vue";

describe("AttributeTableBodyRow component", () => {
  const commonOptions = {
    attrs: {
      id: "test id",
      name: "test name",
      type: "select",
      values: [],
      createdAt: "10.04.2032",
    },
  };

  it("renders unchanged", async () => {
    const container = await renderSuspended(
      AttributeTableBodyRow,
      commonOptions
    );

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="table-row bg-gray-50 bg-gray-50">
          <div class="table-cell text-tertiary text-sm align-middle p-4">test id</div>
          <div class="table-cell text-tertiary text-sm align-middle p-4">test name</div>
          <div class="table-cell text-tertiary text-sm align-middle p-4">select</div>
          <!--v-if-->
          <div class="table-cell text-tertiary text-sm align-middle p-4">
            <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
          </div>
        </div>
      </div>"
    `);
  });
});
