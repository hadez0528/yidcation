import { describe, expect, it } from "vitest";
import { renderSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import ProductBox from "@@/components/product/Box.vue";

mockNuxtImport("useDataHandler", () => () => ({
  data: [
    {
      id: "first product id",
      name: "first product name",
      description: "first product description",
      price: 10,
      quantity: 12,
      attributes: {},
      createdAt: "10.04.2052",
    },
  ],
}));

describe("ProductBox component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(ProductBox);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="bg-white rounded p-4 uppercase w-full !px-4 !pt-4 pb-0 h-min w-full !px-4 !pt-4 pb-0 h-min">
          <div class="flex flex-row justify-between items-start">
            <h3 class="text-xl text-secondary font-semibold">produkty</h3><button icon-src="/plus-box.svg" class="bg-primary hover:bg-primary/90 text-white font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm bg-primary hover:bg-primary/90 text-white">Dodaj produkt</button>
          </div>
          <div class="table w-full normal-case border-separate border-spacing-y-4 mt-2 mt-2">
            <div class="table-header-group">
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
                  <div class="flex flex-row items-center"><span>Cena</span><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="/sort-column.svg" width="24" height="24"></button></div>
                </div>
                <div class="table-cell text-tertiary text-sm align-middle p-4 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2">
                  <div class="flex flex-row items-center"><span>Ilość</span><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="/sort-column.svg" width="24" height="24"></button></div>
                </div>
                <div class="table-cell text-tertiary text-sm align-middle p-4 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2">
                  <div class="flex flex-row items-center"><span>Data utworzenia</span><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="/sort-column.svg" width="24" height="24"></button></div>
                </div>
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <div class="table-cell text-tertiary text-sm align-middle p-4 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2">
                  <div class="flex flex-row items-center justify-end"><span><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1" width="24" height="24"><img class="w-6 h-6" style="min-width: 16px;" src="settings.svg" width="24" height="24"></button></span>
                    <!--v-if-->
                  </div>
                </div>
              </div>
            </div>
            <div class="table-row-group">
              <div class="table-row bg-gray-50 bg-gray-50">
                <div class="table-cell text-tertiary text-sm align-middle p-4">first product id</div>
                <div class="table-cell text-tertiary text-sm align-middle p-4">first product name</div>
                <div class="table-cell text-tertiary text-sm align-middle p-4">10.00 PLN</div>
                <div class="table-cell text-tertiary text-sm align-middle p-4">12 szt.</div>
                <div class="table-cell text-tertiary text-sm align-middle p-4">10.04.2052</div>
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <!--v-if-->
                <div class="table-cell text-tertiary text-sm align-middle p-4">
                  <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>"
    `);
  });
});
