import { describe, expect, it } from "vitest";
import { renderSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen, fireEvent } from "@testing-library/vue";
import ProductAttributeFields from "@@/components/product/AttributeFields.vue";

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
  const commonOptions = {
    attrs: {
      defaultAttributes: {},
    },
  };

  it("renders without errors", async () => {
    const { emitted } = await renderSuspended(
      ProductAttributeFields,
      commonOptions
    );

    const isolationAttributeLabel = screen.getByLabelText("Izolacja");
    const isolationAttributeSelect = screen.getByRole("combobox");
    const isolationAttributeValueOptions = isolationAttributeSelect.children;

    fireEvent.change(isolationAttributeSelect);

    const emits = emitted();

    expect(isolationAttributeLabel).toBeDefined();

    expect(isolationAttributeSelect).toBeDefined();
    expect(isolationAttributeSelect.tagName).toBe("SELECT");

    expect(emits).toHaveProperty("updateAttributes", [
      [[["s1AsBd2", ""]]],
      [[["s1AsBd2", ""]]],
    ]);

    expect(isolationAttributeValueOptions.length).toBe(2);
    expect(isolationAttributeValueOptions[0]).toHaveProperty(
      "value",
      "Termiczna"
    );
    expect(isolationAttributeValueOptions[0].textContent).toBe("Termiczna");
    expect(isolationAttributeValueOptions[1]).toHaveProperty(
      "value",
      "Akustyczna"
    );
    expect(isolationAttributeValueOptions[1].textContent).toBe("Akustyczna");
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(
      ProductAttributeFields,
      commonOptions
    );

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="flex flex-col gap-4 max-h-32 overflow-y-auto">
          <div class="flex flex-col gap-y-1">
            <div class="flex flex-col"><label for="nDPA1A9Vgag_1" class="font-semibold text-sm text-secondary">Izolacja</label>
              <!--v-if-->
            </div><select id="nDPA1A9Vgag_1" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
              <option value="Termiczna">Termiczna</option>
              <option value="Akustyczna">Akustyczna</option>
            </select>
          </div>
        </div>
      </div>"
    `);
  });
});
