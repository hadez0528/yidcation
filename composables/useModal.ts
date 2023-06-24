export interface ModalState {
  hidden: boolean;
  context: {};
}

export const useModal = (modalName: string, defaultContext?: {}) => {
  const route = useRoute();
  const state = useState<ModalState>(`${modalName}Modal`, () => ({
    hidden: true,
    context: { ...defaultContext },
  }));

  const hide = () => {
    state.value.hidden = true;
  };

  const show = (context?: {}) => {
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
