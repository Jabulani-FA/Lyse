import {create } from "zustand"
import type{ AppState } from "../interface/reducers";


const useAppStore = create<AppState>((set) => ({
    user: null,
    history: [],
    setUser: (user) => set({user}),
    clearUser: () => set({user: null}),
    addHIstory: (item) => set((state) => ({
        history: [
            ...state.history,
            {...item, timestamp: new Date()}
        ]
    })),
    clearHistory: () => set({history: []}),
}))

export default useAppStore;