import React from "react";

//Хук, отслеживающий нажатие вне заданного элемента

//Получает ссылку на отслеживаемый элемент и коллбек

const useOutsider = (ref: React.RefObject<any>, handler: (e?: any) => void) => {
  //При нажатии на кнопку проверяется, был ли кликнут отслеживаемый элемент, и, если да, вызывается коллбек

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler(e);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [ref, handler]);
};

export default useOutsider;
