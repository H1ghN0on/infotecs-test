import React from "react";

const useResizable = (
  widthOptions: { minWidth: number; maxWidth: number },
  refToResize: React.RefObject<any>
) => {
  const elementRef = React.useRef(refToResize);
  const { minWidth, maxWidth } = widthOptions;
  const [isResizing, setIsResizing] = React.useState(false);
  const [resizableWidth, setSidebarWidth] = React.useState(minWidth);

  const startResizing = React.useCallback((mouseDownEvent: any) => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent: any) => {
      if (isResizing) {
        window.getSelection()?.removeAllRanges();
        const width =
          mouseMoveEvent.clientX -
          elementRef.current.current.getBoundingClientRect().left;
        if (width > minWidth && width < maxWidth) {
          setSidebarWidth(
            mouseMoveEvent.clientX -
              elementRef.current.current.getBoundingClientRect().left
          );
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
