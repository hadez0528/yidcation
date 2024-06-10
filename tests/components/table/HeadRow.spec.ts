import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import TableHeadRow from "@@/components/table/HeadRow.vue";
import { fireEvent } from "@testing-library/vue";

describe("TableHeadRow component", () => {
  const commonOptions = {
    slots: {
      default: () => "test slot",
    },
  };

  it("renders without errors", async () => {
    const { emitted } = await renderSuspended(TableHeadRow, commonOptions);

    const headRowSlot = screen.getByText("test slot");
    const settingsButton = screen.getByRole("button");

    fireEvent.click(settingsButton);

    const emits = emitted();

    expect(headRowSlot).toBeDefined();
    expect(settingsButton).toBeDefined();

    expect(emits).toHaveProperty("settings", [[]]);
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(TableHeadRow, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="table-row">test slot<div class="table-cell text-tertiary text-sm align-middle p-4 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !py-2 !py-2">
            <div class="flex flex-row items-center justify-end"><span><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1" width="24" height="24"><img class="w-6 h-6" style="min-width: 16px;" src="settings.svg" width="24" height="24"></button></span>
              <!--v-if-->
            </div>
          </div>
        </div>
      </div>"
    `);
  });
});
