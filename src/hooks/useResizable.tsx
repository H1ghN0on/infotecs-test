import React from "react";

//Хук для изменения ширины элемента

//На вход получает минимальную и максимальную ширину и ссылку на элемент, который будет изменяться

//Возвращает функуцию начала изменения ширины и текущую ширину элемента

//Функция resize обрабатывает каждый раз при движении мыши.
//Однако основная начинка отрабатывает если состояние isResizing истинно.

const useResizable = (
  widthOptions: { minWidth: number; maxWidth: number },
  refToResize: React.RefObject<any>
) => {
  const elementRef = React.useRef(refToResize);
  const { minWidth, maxWidth } = widthOptions;
  const [isResizing, setIsResizing] = React.useState(false);
  const [resizableWidth, setResziableWidth] = React.useState(minWidth);

  const startResizing = React.useCallback((mouseDownEvent: any) => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent: any) => {
      if (isResizing) {
        //Сперва удаляются все выделения, который были вызваны перемещением мыши с зажатой левой кнопкой.
        //Затем высчитывается ширина, которая равна разности текущего положения курсора по оси X и началом изменяемого элемента по оси X
        //Например, если курсор находится по x = 800, а начало элемента по x = 200. То ширина этого элемента будет = 600.
        //Если полученное значение находится в пределах, заданных минимальной и максимальной шириной, то ширина обновляется
        window.getSelection()?.removeAllRanges();
        const width =
          mouseMoveEvent.clientX -
          elementRef.current.current.getBoundingClientRect().left;
        if (width > minWidth && width < maxWidth) {
          setResziableWidth(width);
        }
      }
    },
    [isResizing, minWidth, maxWidth]
  );

  React.useEffect(() => {
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResizing);
    return () => {
      document.removeEventListener("mousemove", resize);
      document.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);
  return { startResizing, resizableWidth };
};

export default useResizable;
