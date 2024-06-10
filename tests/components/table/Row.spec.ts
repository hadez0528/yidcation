import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import TableRow from "@@/components/table/Row.vue";

describe("TableRow component", () => {
  const commonOptions = {
    attrs: {
      "data-testid": "table-row",
    },
    slots: {
      default: () => "test slot",
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(TableRow, commonOptions);

    const tableRow = screen.getByTestId("table-row");

    expect(tableRow).toBeDefined();
    expect(tableRow.textContent).toBe("test slot");
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(TableRow, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="table-row" data-testid="table-row">test slot</div>
      </div>"
    `);
  });
});
