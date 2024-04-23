import { useWindowWidth } from "@react-hook/window-size";

export const useBreakpoints = () => {
  const windowWidth = useWindowWidth();

  if (windowWidth > 1024) {
    return "lg";
  } else if (windowWidth > 767 && windowWidth <= 1024) {
    return "sm";
  } else if (windowWidth > 625 && windowWidth < 767) {
    return "sm";
  }

  return "xs";
};