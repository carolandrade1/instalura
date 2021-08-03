import { typographyVariants } from "./TypographyVariants";
import { colorsLight, colorsDark } from "./Colors";
import { breakpoints } from "./Breakpoints";

const borderRadius = '8px';
const transition = '200ms ease-in-out';
const fontFamily = '\'Rubik\', sans-serif';

export const ThemeLight = {
    colors: colorsLight,
    borderRadius,
    transition,
    fontFamily,
    typographyVariants,
    breakpoints,
}

export const ThemeDark = {
    colors: colorsDark,
    borderRadius,
    transition,
    fontFamily,
    typographyVariants,
    breakpoints,
}