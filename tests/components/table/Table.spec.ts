import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import Table from "@@/components/table/index.vue";

describe("Table component", () => {
  const commonOptions = {
    attrs: {
      "data-testid": "table",
    },
    slots: {
      header: () => "test header slot",
      body: () => "test body slot",
    },
  };

  it("renders without errors", async () => {
    await renderSuspended(Table, commonOptions);

    const table = screen.getByTestId("table");
    const tableHeaderSlot = screen.getByText("test header slot");
    const tableBodySlot = screen.getByText("test body slot");

    expect(table).toBeDefined();
    expect(tableHeaderSlot).toBeDefined();
    expect(tableBodySlot).toBeDefined();
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(Table, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="table w-full normal-case border-separate border-spacing-y-4" data-testid="table">
          <div class="table-header-group">test header slot</div>
          <div class="table-row-group">test body slot</div>
        </div>
      </div>"
    `);
  });
});
