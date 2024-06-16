import { configureStore } from '@reduxjs/toolkit';
import nodesReducer from './slices/nodesSlice';
import edgesReducer from './slices/edgesSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    nodes: nodesReducer,
    edges: edgesReducer,
    ui: uiReducer,
  },
});