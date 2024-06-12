import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import AttributeFormEdit from "@@/components/attribute/form/Edit.vue";

describe("AttributeFormEdit component", () => {
  it("renders unchanged", async () => {
    const container = await renderSuspended(AttributeFormEdit);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <form novalidate="" class="flex flex-col gap-4">
          <div class="flex flex-col gap-y-1" type="text">
            <div class="flex flex-col"><label for="nDPA1A9Vgag_0" class="font-semibold text-sm text-secondary">Nazwa</label>
              <!--v-if-->
            </div><input id="nDPA1A9Vgag_0" class="focus:border focus:border-secondary focus:border-solid rounded bg-gray-50 p-2 text-tertiary text-sm outline-none text-color-slate-700 border border-transparent" type="text">
          </div>
          <div class="flex flex-col gap-y-1" disabled="">
            <div class="flex flex-col"><label for="nDPA1A9Vgag_1" class="font-semibold text-sm text-secondary">Typ</label>
              <!--v-if-->
            </div><select id="nDPA1A9Vgag_1" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent" disabled="">
              <option value="select">Select</option>
            </select>
          </div>
          <div class="flex flex-col gap-1"><span class="font-semibold text-sm text-secondary">Wartości</span>
            <!--v-if-->
            <div class="max-h-64 overflow-y-auto border rounded flex flex-col gap-4 p-4 border-gray-100"><button class="!py-1 !px-1 border rounded border-gray-100 !py-4 hover:bg-gray-100 border rounded border-gray-100 !py-4 hover:bg-gray-100 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1 border rounded border-gray-100 !py-4 hover:bg-gray-100 border rounded border-gray-100 !py-4 hover:bg-gray-100" type="button"><img class="w-6 h-6" style="min-width: 16px;" src="/plus-box.svg" width="24" height="24"></button></div>
          </div><button type="submit" class="bg-primary hover:bg-primary/90 text-white font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm bg-primary hover:bg-primary/90 text-white">Edytuj</button><button type="button" class="text-white bg-secondary hover:bg-secondary/90 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm text-white bg-secondary hover:bg-secondary/90"> Resetuj </button>
        </form>
      </div>"
    `);
  });
});
