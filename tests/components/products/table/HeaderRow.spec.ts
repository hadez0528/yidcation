import { describe, expect, it, vi } from "vitest";
import { renderSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import ProductTableHeaderRow from "@@/components/product/table/HeaderRow.vue";

// const sortState = {
//   byDynamicAttribute: {
//     value: false,
//   },
// };

// const spyOnByDynamicAttributeSetter = vi.spyOn(
//   sortState,
//   "byDynamicAttribute",
//   "set"
// );

// const sortToggleMock = vi.fn();
const isVisibleMock = vi.fn().mockImplementation(() => true);

// mockNuxtImport("useProductSort", () => () => ({
//   toggle: sortToggleMock,
//   ...sortState,
// }));

mockNuxtImport("useProductTableColumnVisibility", () => () => ({
  isVisible: isVisibleMock,
  columns: {
    value: ["id", "name", "type"],
  },
}));

mockNuxtImport("useAttributeStorage", () => () => ({
  entities: {
    value: [
      {
        id: "s1AsBd2",
        name: "Izolacja",
        type: "select",
        values: ["Termiczna", "Akustyczna"],
        createdAt: "2023-06-30",
      },
    ],
  },
}));

describe("ProductTableHeaderRow component", () => {
  it("renders without errors", async () => {
    const { container } = await renderSuspended(ProductTableHeaderRow);

    const tableHeadRow = container.firstChild?.firstChild as HTMLElement;
    const tableHeadCells = tableHeadRow.children;

    expect(tableHeadRow).toBeDefined();
    expect(tableHeadCells.length).toBe(4);

    expect(tableHeadCells[0].textContent).toBe("ID");
    expect(tableHeadCells[1].textContent).toBe("Nazwa");
    expect(tableHeadCells[2].textContent).toBe("Typ");
    expect(tableHeadCells[3].textContent).toBe("");

    expect(isVisibleMock).toHaveBeenNthCalledWith(1, "id");
    expect(isVisibleMock).toHaveBeenNthCalledWith(2, "name");
    expect(isVisibleMock).toHaveBeenNthCalledWith(3, "type");
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(ProductTableHeaderRow);

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
