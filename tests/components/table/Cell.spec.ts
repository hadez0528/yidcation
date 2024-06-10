import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import TableCell from "@@/components/table/Cell.vue";
import { table } from "console";

describe("TableCell component", () => {
  const commonOptions = {
    attrs: {
      "data-testid": "table-cell",
    },
    slots: {
      default: () => "test slot",
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(TableCell, commonOptions);

    const tableCell = screen.getByTestId("table-cell");

    expect(tableCell).toBeDefined();
    expect(tableCell.textContent).toBe("test slot");
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(TableCell, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="table-cell text-tertiary text-sm align-middle p-4" data-testid="table-cell">test slot</div>
      </div>"
    `);
  });
});
