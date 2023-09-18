import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mockEmployed from "data/mockEmployed.js";

// État initial du slice des employés
const initialState = {
  employee: {
    firstName: "",
    lastName: "",
  },
  employees: [],
  mockEmployed: mockEmployed,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState: initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },

    removeEmployee: (state, action) => {
    
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
    updateProperties: (state, action) => {
      const updatedEmployee = action.payload;
      const index = state.employees.findIndex(
        (employee) => employee.id === updatedEmployee.id
      );
      if (index !== -1) {
        state.employees[index].street = updatedEmployee.street;
        state.employees[index].city = updatedEmployee.city;
        state.employees[index].zipCode = updatedEmployee.zipCode;

      }
    },
  },
});


const persistConfig = {
  key: "root",
  storage,
  blacklist: ["register"],
};

const persistedReducer = persistReducer(
  persistConfig,
  employeesSlice.reducer
);

const store = configureStore({
  reducer: {
    employees: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export const { addEmployee, removeEmployee, updateProperties,} = employeesSlice.actions;
export default store;
