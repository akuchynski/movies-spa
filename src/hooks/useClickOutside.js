import { useRef, useEffect } from "react";

export const useClickOutside = (handleClose) => {

  const ref = useRef();

  useEffect(() => {
    const checkClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleClose();
      }
    }

    document.addEventListener("click", checkClick);

    return () => {
      document.removeEventListener("click", checkClick);
    }
  })

  return ref;
}