import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// The type scale in globals.css (@theme --text-*) defines custom font sizes.
// tailwind-merge does not know them, and would treat `text-heading-1` and a
// colour such as `text-cream` as the same group, silently dropping the size.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-xl",
            "display-l",
            "heading-1",
            "heading-2",
            "heading-3",
            "figure",
            "body-l",
            "body",
            "caption",
            "eyebrow",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
