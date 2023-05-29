import Color from "color";

export const parseColor = (color: string) => Color(color).rgb().hex();
