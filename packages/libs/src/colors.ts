import color from "color";

export const parseColor = (c: string) => color(color).rgb().hex();
