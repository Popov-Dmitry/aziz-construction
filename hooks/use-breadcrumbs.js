import { unslug } from "@/utils/unslug";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useBreadcrumbs = () => {
  const pathname = usePathname();

  return useMemo(() => {
    const paths = pathname.split("/");
    const result = paths.map((value, index) => ({
      title: unslug(value),
      path: paths.slice(0, index + 1).join("/")
    }));
    result[0] = { title: "Home", path: "/" };

    return result;
  }, [pathname]);
};