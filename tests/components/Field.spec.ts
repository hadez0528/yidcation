import { describe, it, expect, vi } from "vitest";
import { mockNuxtImport, renderSuspended } from "@nuxt/test-utils/runtime";
import { screen, fireEvent } from "@testing-library/vue";
import Field from "@@/components/Field.vue";

mockNuxtImport("useId", () => {
  return () => "test id";
});

vi.mock("vee-validate");

describe("Field component", () => {
  const commonOptions = {
    attrs: {
      name: "test",
      type: "text",
    },
  };

  it("renders without errors", async () => {
    const handleBlurMock = vi.fn();
    const handleChangeMock = vi.fn();

    const veeValidate = await import("vee-validate");
    veeValidate.useField = await vi.fn().mockImplementation(() => ({
      errorMessage: {
        value: null,
      },
      handleBlur: handleBlurMock,
      handleChange: handleChangeMock,
    }));

    await renderSuspended(Field, commonOptions);

    const input = screen.getByRole("textbox");

    expect(input).toBeDefined();
    expect(input).toHaveProperty("type", "text");
    expect(input).toHaveProperty("id", "test id");

    fireEvent.input(input);
    fireEvent.blur(input);

    expect(handleChangeMock).toHaveBeenCalled();
    expect(handleBlurMock).toHaveBeenCalled();
  });

  it("renders with label without errors", async () => {
    const veeValidate = await import("vee-validate");
    veeValidate.useField = await vi.fn().mockImplementation(() => ({
      errorMessage: {
        value: null,
      },
    }));

    await renderSuspended(Field, {
      ...commonOptions,
      attrs: {
        ...commonOptions.attrs,
        label: "test label",
      },
    });

    const label = screen.getByText("test label") as HTMLLabelElement;

    expect(label).toHaveProperty("htmlFor", "test id");
  });

  it("renders with label and validation errors", async () => {
    const veeValidate = await import("vee-validate");
    veeValidate.useField = await vi.fn().mockImplementation(() => ({
      errorMessage: {
        value: "test error message",
      },
    }));

    const { container } = await renderSuspended(Field, {
      ...commonOptions,
      attrs: {
        ...commonOptions.attrs,
        label: "test label",
      },
    });

    const input = screen.getByRole("textbox");
    const inputClassList = input.classList;

    const label = screen.getByText("test label") as HTMLLabelElement;
    const labelClassList = label.classList;

    const errorMessage = container.firstChild?.firstChild?.firstChild
      ?.lastChild as HTMLElement;
    const errorMessageClassList = errorMessage.classList;

    expect(input).toBeDefined();
    expect(inputClassList).toContain("!border");
    expect(inputClassList).toContain("!border-red-500");
    expect(inputClassList).toContain("!border-solid");
    expect(inputClassList).toContain("!focus:border-red-500");

    expect(label).toBeDefined();
    expect(labelClassList).toContain("text-red-500");

    expect(errorMessage).toBeDefined();
    expect(errorMessage.tagName).toBe("P");
    expect(errorMessage.textContent).toContain("test error message");
    expect(errorMessageClassList).toContain("text-red-500");
    expect(errorMessageClassList).toContain("text-sm");
  });

  it("renders unchanged", async () => {
    const container = await renderSuspended(Field, commonOptions);

    expect(container.html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div class="flex flex-col gap-y-1" type="text">
          <div class="flex flex-col">
            <!--v-if-->
            <p class="text-red-500 text-sm">{
              "value": "test error message"
              }</p>
          </div><input id="test id" class="!border !border-red-500 !border-solid !focus:border-red-500 focus:border focus:border-secondary focus:border-solid rounded bg-gray-50 p-2 text-tertiary text-sm outline-none text-color-slate-700 border border-transparent">
        </div>
      </div>"
    `);
  });
});
