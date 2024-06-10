import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import TableHeadCell from "@@/components/table/HeadCell.vue";
import { fireEvent } from "@testing-library/vue";

describe("TableHeadCell component", () => {
  const commonOptions = {
    attrs: {
      "data-testid": "head-cell",
      showSortButton: true,
      justifyRight: true,
    },
    slots: {
      default: () => "test slot",
    },
  };

  it("renders without errors", async () => {
    const { container, emitted } = await renderSuspended(
      TableHeadCell,
      commonOptions
    );

    const wrapper = (container.firstChild?.firstChild as HTMLElement)
      .children[0];

    const wrapperClassList = wrapper.classList;
    const headCell = screen.getByTestId("head-cell");
    const headCellSlot = screen.getByText("test slot");
    const sortButton = screen.getByRole("button");

    fireEvent.click(sortButton);

    const emits = emitted();

    expect(wrapperClassList).toContain("justify-end");
    expect(headCell).toBeDefined();
    expect(headCellSlot).toBeDefined();
    expect(emits).toHaveProperty("sort", [[]]);
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(TableHeadCell, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="table-cell text-tertiary text-sm align-middle p-4 !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary !pt-0 !pb-0 text-left font-semibold text-sm text-tertiary" data-testid="head-cell">
          <div class="flex flex-row items-center justify-end"><span>test slot</span><button class="!py-1 !px-1 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm !py-1 !px-1"><img class="w-6 h-6" style="min-width: 16px;" src="/sort-column.svg" width="24" height="24"></button></div>
        </div>
      </div>"
    `);
  });
});
