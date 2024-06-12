import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import Form from "@@/components/product/form/index.vue";

describe("Form component", () => {
  const commonOptions = {
    attrs: {
      submitButtonLabel: "test",
    },
  };

  it("renders unchanged", async () => {
    const container = await renderSuspended(Form, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <form novalidate="" class="flex flex-col gap-4">
          <div class="flex flex-col gap-y-1" type="text">
            <div class="flex flex-col"><label for="nDPA1A9Vgag_0" class="font-semibold text-sm text-secondary">Nazwa</label>
              <!--v-if-->
            </div><input id="nDPA1A9Vgag_0" class="focus:border focus:border-secondary focus:border-solid rounded bg-gray-50 p-2 text-tertiary text-sm outline-none text-color-slate-700 border border-transparent" type="text">
          </div>
          <div class="flex flex-col gap-y-1" style="max-height: 256px; min-height: 64px;">
            <div class="flex flex-col"><label for="nDPA1A9Vgag_1" class="font-semibold text-sm text-secondary">Opis</label>
              <!--v-if-->
            </div><textarea id="nDPA1A9Vgag_1" class="focus:border focus:border-secondary focus:border-solid rounded bg-gray-50 p-2 text-tertiary text-sm outline-none text-color-slate-700 border border-transparent" style="max-height: 256px; min-height: 64px;"></textarea>
          </div>
          <p class="text-md font-bold text-tertiary">Atrybuty</p>
          <div class="flex flex-col gap-4 max-h-32 overflow-y-auto">
            <div class="flex flex-col gap-y-1">
              <div class="flex flex-col"><label for="nDPA1A9Vgag_2" class="font-semibold text-sm text-secondary">Izolacja</label>
                <!--v-if-->
              </div><select id="nDPA1A9Vgag_2" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
                <option value="Termiczna">Termiczna</option>
                <option value="Akustyczna">Akustyczna</option>
              </select>
            </div>
            <div class="flex flex-col gap-y-1">
              <div class="flex flex-col"><label for="nDPA1A9Vgag_3" class="font-semibold text-sm text-secondary">Rozmiar</label>
                <!--v-if-->
              </div><select id="nDPA1A9Vgag_3" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
                <option value="Mały">Mały</option>
                <option value="Średni">Średni</option>
                <option value="Duży">Duży</option>
              </select>
            </div>
            <div class="flex flex-col gap-y-1">
              <div class="flex flex-col"><label for="nDPA1A9Vgag_4" class="font-semibold text-sm text-secondary">Przeznaczenie</label>
                <!--v-if-->
              </div><select id="nDPA1A9Vgag_4" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
                <option value="Psy">Psy</option>
                <option value="Koty">Koty</option>
                <option value="Sarny">Sarny</option>
                <option value="Ptaki">Ptaki</option>
                <option value="Króliki">Króliki</option>
                <option value="Chomiki">Chomiki</option>
                <option value="Żółwie">Żółwie</option>
                <option value="Fretki">Fretki</option>
              </select>
            </div>
            <div class="flex flex-col gap-y-1">
              <div class="flex flex-col"><label for="nDPA1A9Vgag_5" class="font-semibold text-sm text-secondary">Materiał</label>
                <!--v-if-->
              </div><select id="nDPA1A9Vgag_5" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
                <option value="Drewno sosnowe">Drewno sosnowe</option>
                <option value="Tworzywo sztuczne">Tworzywo sztuczne</option>
                <option value="Metal">Metal</option>
                <option value="Bambus">Bambus</option>
                <option value="Drewno bukowe">Drewno bukowe</option>
              </select>
            </div>
            <div class="flex flex-col gap-y-1">
              <div class="flex flex-col"><label for="nDPA1A9Vgag_6" class="font-semibold text-sm text-secondary">Kształt wejścia</label>
                <!--v-if-->
              </div><select id="nDPA1A9Vgag_6" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
                <option value="Owalny">Owalny</option>
                <option value="Kwadratowy">Kwadratowy</option>
                <option value="Prostokątny">Prostokątny</option>
              </select>
            </div>
            <div class="flex flex-col gap-y-1">
              <div class="flex flex-col"><label for="nDPA1A9Vgag_7" class="font-semibold text-sm text-secondary">Miejsce montażu</label>
                <!--v-if-->
              </div><select id="nDPA1A9Vgag_7" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
                <option value="Ziemia">Ziemia</option>
                <option value="Drzewo">Drzewo</option>
              </select>
            </div>
            <div class="flex flex-col gap-y-1">
              <div class="flex flex-col"><label for="nDPA1A9Vgag_8" class="font-semibold text-sm text-secondary">Wentylacja</label>
                <!--v-if-->
              </div><select id="nDPA1A9Vgag_8" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
                <option value="Naturalna">Naturalna</option>
                <option value="Mechaniczna">Mechaniczna</option>
              </select>
            </div>
            <div class="flex flex-col gap-y-1">
              <div class="flex flex-col"><label for="nDPA1A9Vgag_9" class="font-semibold text-sm text-secondary">Kolor</label>
                <!--v-if-->
              </div><select id="nDPA1A9Vgag_9" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
                <option value="Czerwony">Czerwony</option>
                <option value="Zielony">Zielony</option>
                <option value="Niebieski">Niebieski</option>
                <option value="Żółty">Żółty</option>
                <option value="Szary">Szary</option>
                <option value="Różowy">Różowy</option>
                <option value="Pomarańczowy">Pomarańczowy</option>
                <option value="Fioletowy">Fioletowy</option>
                <option value="Brązowy">Brązowy</option>
                <option value="Biały">Biały</option>
                <option value="Czarny">Czarny</option>
                <option value="Turkusowy">Turkusowy</option>
                <option value="Złoty">Złoty</option>
                <option value="Srebrny">Srebrny</option>
              </select>
            </div>
            <div class="flex flex-col gap-y-1">
              <div class="flex flex-col"><label for="nDPA1A9Vgag_10" class="font-semibold text-sm text-secondary">Grubość ścian</label>
                <!--v-if-->
              </div><select id="nDPA1A9Vgag_10" class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent">
                <option value="Cienka">Cienka</option>
                <option value="Średnia">Średnia</option>
                <option value="Gruba">Gruba</option>
              </select>
            </div>
          </div>
          <div class="flex flex-row gap-4">
            <div class="flex flex-col gap-y-1 w-full" type="number">
              <div class="flex flex-col"><label for="nDPA1A9Vgag_11" class="font-semibold text-sm text-secondary">Cena</label>
                <!--v-if-->
              </div><input id="nDPA1A9Vgag_11" class="focus:border focus:border-secondary focus:border-solid rounded bg-gray-50 p-2 text-tertiary text-sm outline-none text-color-slate-700 border border-transparent w-full" type="number">
            </div>
            <div class="flex flex-col gap-y-1 w-full" type="number">
              <div class="flex flex-col"><label for="nDPA1A9Vgag_12" class="font-semibold text-sm text-secondary">Ilość</label>
                <!--v-if-->
              </div><input id="nDPA1A9Vgag_12" class="focus:border focus:border-secondary focus:border-solid rounded bg-gray-50 p-2 text-tertiary text-sm outline-none text-color-slate-700 border border-transparent w-full" type="number">
            </div>
          </div><button type="submit" class="bg-primary hover:bg-primary/90 text-white font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm bg-primary hover:bg-primary/90 text-white">test</button><button class="text-white bg-secondary hover:bg-secondary/90 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm text-white bg-secondary hover:bg-secondary/90">Resetuj </button>
        </form>
      </div>"
    `);
  });
});
