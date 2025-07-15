 export interface User {
    id: string,
    name: string | null,
    email: string,
}

interface HistoryItem {
    id: string,
    action: string,
    timestamp: Date
}

export interface AppState {
    user: User | null
    history: HistoryItem[]
    setUser: (user: User) => void
    clearUser: () => void
    addHIstory: (item: Omit<HistoryItem, "timestamp">) => void
    clearHistory: () => void
}