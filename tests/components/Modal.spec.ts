import { describe, it, expect } from "vitest";
import { fireEvent, screen } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import Modal from "@@/components/Modal.vue";

describe("Modal component", () => {
  const commonOptions = {
    attrs: {
      title: "test title",
      show: true,
    },
    slots: {
      default: () => "test slot",
    },
  };

  it("renders without errors", async () => {
    const { emitted } = await renderSuspended(Modal, commonOptions);

    const slot = screen.getByText("test slot");
    const closeButton = screen.getByRole("button");

    fireEvent.click(closeButton);

    expect(emitted()).toStrictEqual({
      close: [[]],
    });

    expect(slot).toBeDefined();
  });

  it("renders without children components if show is false", async () => {
    const { container } = await renderSuspended(Modal, {
      ...commonOptions,
      attrs: {
        ...commonOptions.attrs,
        show: false,
      },
    });

    const testWrapper = container.children[0];

    expect(testWrapper.children.length).toBe(0);
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(Modal, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <!--teleport start-->
        <!--teleport end-->
      </div>"
    `);
  });
});
