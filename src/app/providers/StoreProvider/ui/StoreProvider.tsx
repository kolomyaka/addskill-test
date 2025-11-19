import {Provider} from "react-redux";

import {store} from "../config/store.ts";

export const StoreProvider = ({children}) => <Provider store={store}>{children}</Provider>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch