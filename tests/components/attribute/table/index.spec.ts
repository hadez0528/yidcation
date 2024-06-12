import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import AttributeTable from "@@/components/attribute/table/index.vue";

describe("AttributeTable component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(AttributeTable);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="table w-full normal-case border-separate border-spacing-y-4">
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
                <div class="flex flex-row items-center"><span>Typ</span><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="/sort-column.svg" width="24" height="24"></button></div>
              </div>
              <div class="table-cell text-tertiary text-sm align-middle p-4 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2">
                <div class="flex flex-row items-center justify-end"><span><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1" width="24" height="24"><img class="w-6 h-6" style="min-width: 16px;" src="settings.svg" width="24" height="24"></button></span>
                  <!--v-if-->
                </div>
              </div>
            </div>
          </div>
          <div class="table-row-group">
            <div class="table-row bg-gray-50 bg-gray-50">
              <div class="table-cell text-tertiary text-sm align-middle p-4">s1AsBd2</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">Izolacja</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">select</div>
              <!--v-if-->
              <div class="table-cell text-tertiary text-sm align-middle p-4">
                <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
              </div>
            </div>
            <div class="table-row bg-gray-50 bg-gray-50">
              <div class="table-cell text-tertiary text-sm align-middle p-4">k3RtDf4</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">Rozmiar</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">select</div>
              <!--v-if-->
              <div class="table-cell text-tertiary text-sm align-middle p-4">
                <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
              </div>
            </div>
            <div class="table-row bg-gray-50 bg-gray-50">
              <div class="table-cell text-tertiary text-sm align-middle p-4">t5GhJu6</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">Przeznaczenie</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">select</div>
              <!--v-if-->
              <div class="table-cell text-tertiary text-sm align-middle p-4">
                <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
              </div>
            </div>
            <div class="table-row bg-gray-50 bg-gray-50">
              <div class="table-cell text-tertiary text-sm align-middle p-4">m1KlZx9</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">Materiał</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">select</div>
              <!--v-if-->
              <div class="table-cell text-tertiary text-sm align-middle p-4">
                <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
              </div>
            </div>
            <div class="table-row bg-gray-50 bg-gray-50">
              <div class="table-cell text-tertiary text-sm align-middle p-4">w9VbNm0</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">Kształt wejścia</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">select</div>
              <!--v-if-->
              <div class="table-cell text-tertiary text-sm align-middle p-4">
                <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
              </div>
            </div>
            <div class="table-row bg-gray-50 bg-gray-50">
              <div class="table-cell text-tertiary text-sm align-middle p-4">z2XcVb4</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">Miejsce montażu</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">select</div>
              <!--v-if-->
              <div class="table-cell text-tertiary text-sm align-middle p-4">
                <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
              </div>
            </div>
            <div class="table-row bg-gray-50 bg-gray-50">
              <div class="table-cell text-tertiary text-sm align-middle p-4">p5MnCv8</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">Wentylacja</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">select</div>
              <!--v-if-->
              <div class="table-cell text-tertiary text-sm align-middle p-4">
                <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
              </div>
            </div>
            <div class="table-row bg-gray-50 bg-gray-50">
              <div class="table-cell text-tertiary text-sm align-middle p-4">g8BhNj2</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">Kolor</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">select</div>
              <!--v-if-->
              <div class="table-cell text-tertiary text-sm align-middle p-4">
                <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
              </div>
            </div>
            <div class="table-row bg-gray-50 bg-gray-50">
              <div class="table-cell text-tertiary text-sm align-middle p-4">q1WzXv4</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">Grubość ścian</div>
              <div class="table-cell text-tertiary text-sm align-middle p-4">select</div>
              <!--v-if-->
              <div class="table-cell text-tertiary text-sm align-middle p-4">
                <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
              </div>
            </div>
          </div>
        </div>
      </div>"
    `);
  });
});
