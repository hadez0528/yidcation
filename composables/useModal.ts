export interface ModalState {
  hidden: boolean;
  context: Record<string, unknown>;
}

export type ModalContext = Record<string, unknown>;

export const useModal = (
  modalName: string,
  defaultContext: ModalContext = {}
) => {
  const route = useRoute();
  const state = useState<ModalState>(`${modalName}Modal`, () => ({
    hidden: true,
    context: { ...defaultContext },
  }));

  const hide = () => {
    state.value.hidden = true;
  };

  const show = (context: ModalContext = {}) => {
    state.value.hidden = false;
    state.value.context = { ...context };
  };

  watch(route, () => hide());

  return {
    state,
    hide,
    show,
  };
};
