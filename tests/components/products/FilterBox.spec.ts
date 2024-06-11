import { describe, expect, it, vi } from "vitest";
import { renderSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { fireEvent } from "@testing-library/vue";
import FilterBox from "@@/components/product/FilterBox.vue";

const resetFilterMock = vi.fn();
const setFilterMock = vi.fn();

mockNuxtImport("useFilter", () => () => ({
  resetFilter: resetFilterMock,
  setFilter: setFilterMock,
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

describe("AttributeFields component", () => {
  it("renders without errors", async () => {
    await renderSuspended(FilterBox);

    const attributeSelect = screen.getByRole("combobox");
    const resetButton = screen.getByText("Resetuj");

    expect(attributeSelect).toBeDefined();
    expect(attributeSelect.children.length).toBe(3);

    expect(resetButton).toBeDefined();

    fireEvent.click(resetButton);
    fireEvent.change(attributeSelect);

    expect(resetFilterMock).toHaveBeenCalled();
    expect(setFilterMock).toHaveBeenCalledWith("s1AsBd2", "");
  });

  it("toggle button working without any problems", async () => {
    const { rerender } = await renderSuspended(FilterBox);

    const toggleButtonBeforeToggle = screen.getByText("Ukryj");
    expect(toggleButtonBeforeToggle).toBeDefined();

    fireEvent.click(toggleButtonBeforeToggle);
    await rerender({});

    const toggleButtonAfterToggle = screen.getByText("Pokaż");
    expect(toggleButtonAfterToggle).toBeDefined();
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(FilterBox);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="bg-white rounded p-4 uppercase lg:w-96 w-full h-min lg:sticky lg:top-4 lg:w-96 w-full h-min lg:sticky lg:top-4">
          <div class="flex items-start justify-between">
            <h3 class="text-xl text-secondary font-semibold">filtry</h3><button class="hover:bg-gray-50 text-tertiary lg:hidden lg:hidden font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm hover:bg-gray-50 text-tertiary lg:hidden lg:hidden">Ukryj</button>
          </div>
          <form novalidate="" class="mt-4 flex flex-col gap-y-4">
            <div class="mt-4 flex flex-col gap-y-4 max-h-96 overflow-y-auto">
              <div class="flex flex-col gap-y-1">
                <div class="flex flex-col"><label for="nDPA1A9Vgag_2" class="font-semibold text-sm text-secondary">Izolacja</label>
                  <!--v-if-->
                </div><select id="nDPA1A9Vgag_2" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
                  <option value="">Dowolna wartość</option>
                  <option value="Termiczna">Termiczna</option>
                  <option value="Akustyczna">Akustyczna</option>
                </select>
              </div>
            </div>
            <div class="flex flex-row gap-4 lg:flex-col"><button type="button" class="lg:w-full w-full text-white bg-secondary hover:bg-secondary/90 lg:w-full w-full font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm lg:w-full w-full text-white bg-secondary hover:bg-secondary/90 lg:w-full w-full"> Resetuj</button></div>
          </form>
        </div>
      </div>"
    `);
  });
});
