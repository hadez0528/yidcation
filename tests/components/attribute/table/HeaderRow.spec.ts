import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import AttributeTableHeaderRow from "@@/components/attribute/table/HeaderRow.vue";

describe("AttributeTableHeaderRow component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(AttributeTableHeaderRow);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="table-row">
          <div class="table-cell text-tertiary text-sm align-middle p-4 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2">
            <div class="flex flex-row items-center"><span>ID</span>
              <!--v-if-->
            </div>
          </div>
          <div class="table-cell text-tertiary text-sm align-middle p-4 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2">
            <div class="flex flex-row items-center"><span>Nazwa</span><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="/sort-column.svg" width="24" height="24"></button></div>
          </div>
          <div class="table-cell text-tertiary text-sm align-middle p-4 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2">
            <div class="flex flex-row items-center"><span>Typ</span><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="/sort-column.svg" width="24" height="24"></button></div>
          </div>
          <div class="table-cell text-tertiary text-sm align-middle p-4 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2">
            <div class="flex flex-row items-center justify-end"><span><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1" width="24" height="24"><img class="w-6 h-6" style="min-width: 16px;" src="settings.svg" width="24" height="24"></button></span>
              <!--v-if-->
            </div>
          </div>
        </div>
      </div>"
    `);
  });
});
