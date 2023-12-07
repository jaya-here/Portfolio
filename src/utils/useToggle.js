import { useState } from "react"

export function useToggle() {
    const [state, setState] = useState(false)

    function handleToggle() {
        setState((prev)=>{return !prev})
    }

    return {state,handleToggle}
}