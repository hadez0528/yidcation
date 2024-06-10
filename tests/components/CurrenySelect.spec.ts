import { vi, describe, it, expect } from "vitest";
import { renderSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen, fireEvent } from "@testing-library/vue";
import CurrencySelect from "@@/components/CurrencySelect.vue";

const currency = {
  state: {
    value: {
      code: "",
    },
  },
};

const spyOnCodeSetter = vi.spyOn(currency.state.value, "code", "set");

mockNuxtImport("useCurrency", () => vi.fn().mockImplementation(() => currency));

describe("CurrencySelect component", () => {
  it("renders without errors", async () => {
    await renderSuspended(CurrencySelect);

    const select = screen.getByRole("combobox");

    expect(select).toBeDefined();

    fireEvent.change(select);

    expect(spyOnCodeSetter).toHaveBeenCalled();
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(CurrencySelect);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="flex flex-col">
          <div class="flex flex-col">
            <!--v-if-->
            <!--v-if-->
          </div><select id="nDPA1A9Vgag_1" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>"
    `);
  });
});
