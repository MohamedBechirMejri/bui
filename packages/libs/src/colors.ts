import color from "color";

export const parseColor = (c: string) => color(c).rgb().hex();
