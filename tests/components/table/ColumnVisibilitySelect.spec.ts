import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import ColumnVisibilitySelect from "@@/components/table/ColumnVisibilitySelect.vue";
import { fireEvent } from "@testing-library/vue";

describe("ColumnVisibilitySelect component", () => {
  const commonOptions = {
    attrs: {
      columns: ["id", "name"],
      isVisible: (columnName: string) => columnName === "id",
    },
  };

  it("renders without errors", async () => {
    const { container, emitted } = await renderSuspended(
      ColumnVisibilitySelect,
      commonOptions
    );

    const wrapper = (container.firstChild as HTMLElement).children[0];

    const idColumn = wrapper.children[0];
    const idColumnClassList = idColumn.classList;
    const idColumnName = idColumn.firstChild as HTMLElement;

    const resetButton = screen.getByRole("button");

    fireEvent.click(idColumn);
    fireEvent.click(resetButton);

    const emits = emitted();

    expect(resetButton).toBeDefined();
    expect(wrapper.children.length).toBe(2);

    expect(idColumn).toBeDefined();
    expect(idColumnClassList).toContain("bg-gray-100");

    expect(idColumnName.tagName).toBe("P");
    expect(idColumnName.textContent).toBe("ID");

    expect(emits).toHaveProperty("toggle", [["id"]]);
    expect(emits).toHaveProperty("reset", [[]]);
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(
      ColumnVisibilitySelect,
      commonOptions
    );

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="flex flex-col gap-y-2 w-full max-h-64 overflow-y-auto">
          <div class="cursor-pointer p-4 border border-gray-100 rounded bg-gray-100">
            <p class="normal-case">ID</p>
          </div>
          <div class="cursor-pointer p-4 border border-gray-100 rounded">
            <p class="normal-case">Nazwa</p>
          </div>
        </div><button class="text-white bg-secondary hover:bg-secondary/90 font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm text-white bg-secondary hover:bg-secondary/90">Resetuj</button>
      </div>"
    `);
  });
});
