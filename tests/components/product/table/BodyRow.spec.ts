import { describe, expect, it, vi } from "vitest";
import { mockNuxtImport, renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import ProductTableBodyRow from "@@/components/product/table/BodyRow.vue";

const isVisibleMock = vi.fn().mockImplementation(() => true);

mockNuxtImport("useProductTableColumnVisibility", () => () => ({
  isVisible: isVisibleMock,
}));

describe("ProductTableBodyRow component", () => {
  const commonOptions = {
    attrs: {
      id: "test id",
      name: "test name",
      category: "test category",
      fitterPlace: "test fitter place",
      price: 10,
      quantity: 11,
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(ProductTableBodyRow, commonOptions);

    const idCell = screen.getByText("test id");
    const nameCell = screen.getByText("test name");
    const categoryCell = screen.getByText("test category");
    const fitterPlaceCell = screen.getByText("test fitter place");
    const priceCell = screen.getByText("10 PLN");
    const quantityCell = screen.getByText("11 szt.");

    expect(idCell).toBeDefined();
    expect(nameCell).toBeDefined();
    expect(categoryCell).toBeDefined();
    expect(fitterPlaceCell).toBeDefined();
    expect(priceCell).toBeDefined();
    expect(quantityCell).toBeDefined();

    expect(isVisibleMock).toHaveBeenNthCalledWith(1, "id");
    expect(isVisibleMock).toHaveBeenNthCalledWith(2, "name");
    expect(isVisibleMock).toHaveBeenNthCalledWith(3, "category");
    expect(isVisibleMock).toHaveBeenNthCalledWith(4, "fitterPlace");
    expect(isVisibleMock).toHaveBeenNthCalledWith(5, "price");
    expect(isVisibleMock).toHaveBeenNthCalledWith(6, "quantity");
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(ProductTableBodyRow, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="table-row bg-gray-50 bg-gray-50">
          <div class="table-cell text-tertiary text-sm align-middle p-4">test id</div>
          <div class="table-cell text-tertiary text-sm align-middle p-4">test name</div>
          <div class="table-cell text-tertiary text-sm align-middle p-4">test category</div>
          <div class="table-cell text-tertiary text-sm align-middle p-4">test fitter place</div>
          <div class="table-cell text-tertiary text-sm align-middle p-4">10 PLN</div>
          <div class="table-cell text-tertiary text-sm align-middle p-4">11 szt.</div>
          <div class="table-cell text-tertiary text-sm align-middle p-4">
            <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
          </div>
        </div>
      </div>"
    `);
  });
});
