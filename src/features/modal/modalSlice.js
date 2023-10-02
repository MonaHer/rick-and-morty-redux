import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedCharacterId: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
    },
    closeModal(state, action) {
      state.isOpen = false;
      state.selectedCharacterId = null;
    },

    setSelectedCharacterId(state, action) {
      state.selectedCharacterId = action.payload;
    },
  },
});

export const { openModal, closeModal, setSelectedCharacterId } =
  modalSlice.actions;
