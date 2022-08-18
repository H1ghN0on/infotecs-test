import React from "react";

const useOutsider = (ref: React.RefObject<any>, handler: (e?: any) => void) => {
  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("what");
        handler(e);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [ref, handler]);
};

export default useOutsider;
