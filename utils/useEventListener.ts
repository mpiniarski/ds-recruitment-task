import {useEffect, useRef} from "react";
import isBrowser from "utils/isBrowser";

function useEventListener(eventName: string, handler: EventListener, element: EventTarget = isBrowser() ? window : undefined){
  const savedHandler = useRef<EventListener>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(
    () => {
      if(element !== null) {
        const eventListener = (event: Event) => {
          savedHandler?.current && savedHandler.current(event)
        }
        element.addEventListener(eventName, eventListener)
        return () => {
          element.removeEventListener(eventName, eventListener)
        }
      }
    },
    [eventName, element] // Re-run if eventName or element changes
  )
}
export default useEventListener