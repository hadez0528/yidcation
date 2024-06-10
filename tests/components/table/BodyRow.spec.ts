import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import TableBodyRow from "@@/components/table/BodyRow.vue";
import { fireEvent } from "@testing-library/vue";

describe("TableBodyRow component", () => {
  it("renders without errors", async () => {
    const { emitted } = await renderSuspended(TableBodyRow, {
      attrs: {
        "data-testid": "body-row",
      },
      slots: {
        default: () => "test slot",
      },
    });

    const bodyrow = screen.getByTestId("body-row");

    const buttons = screen.getAllByRole("button");
    const editButton = buttons[0];
    const deleteButton = buttons[1];

    expect(bodyrow).toBeDefined();
    expect(bodyrow.textContent).toBe("test slot");

    fireEvent.click(editButton);
    fireEvent.click(deleteButton);

    const emits = emitted();

    expect(emits).toHaveProperty("edit", [[]]);
    expect(emits).toHaveProperty("delete", [[]]);
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(TableBodyRow);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="table-row bg-gray-50 bg-gray-50">
          <div class="table-cell text-tertiary text-sm align-middle p-4">
            <div class="flex flex-row gap-x-4 justify-end items-center h-full"><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="brush.svg" width="24" height="24"></button><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="trash.svg" width="24" height="24"></button></div>
          </div>
        </div>
      </div>"
    `);
  });
});
