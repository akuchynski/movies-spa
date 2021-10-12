import { useRef, useEffect } from "react";

export const useClickListener = () => {

  const ref = useRef();

  useEffect(() => {
    const checkClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleClose();
      }
    }

    document.addEventListener("mousedown", checkClick);

    return () => {
      document.removeEventListener("mousedown", checkClick);
    }
  })

  return ref;
}