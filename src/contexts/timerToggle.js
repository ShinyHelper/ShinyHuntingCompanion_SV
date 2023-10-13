import { createContext, useState } from "react";

export const TimerToggle = createContext(false);

export default function TimerToggleProvider({ children }) {
    const [timerStatus, setTimerStatus] = useState(false);

    return (
        <TimerToggle.Provider
            value={{
                timerStatus: timerStatus,
                setTimerStatus: setTimerStatus,
            }}
        >
            {children}
        </TimerToggle.Provider>
    );
}
