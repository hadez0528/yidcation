export interface ModalState {
  hidden: boolean;
}

export const useModal = (modalName: string) => {
  const route = useRoute();
  const state = useState<ModalState>(`${modalName}Modal`, () => ({
    hidden: true,
  }));

  const hide = () => {
    state.value.hidden = true;
  };

  const show = () => {
    state.value.hidden = false;
  };

  watch(route, () => hide());

  return {
    state,
    hide,
    show,
  };
};
