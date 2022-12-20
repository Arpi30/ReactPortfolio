import { useEffect, useState } from "react";
// Window Resize Hook
export function useWindowResize() {
  const [size, setSize] = useState({
    width: null,
    height: null,
  });
  useEffect(() => {
    function resize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", resize);
    resize();
  }, []);
  return size;
}
