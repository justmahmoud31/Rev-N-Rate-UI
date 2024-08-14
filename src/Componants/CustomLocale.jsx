// customLocale.js
import { enUS } from "date-fns/locale";

const CustomLocale = {
  ...enUS,
  formatDistance: (token, count, options) => {
    const formatDistanceLocale = {
      xSeconds: "less than a minute",
      halfAMinute: "half a minute",
      lessThanXMinutes: "less than {{count}} min",
      xMinutes: "{{count}} min",
      aboutXHours: "{{count}} h",
      xHours: "{{count}} h",
      xDays: "{{count}} days",
      aboutXWeeks: "{{count}} weeks",
      xWeeks: "{{count}} weeks",
      aboutXMonths: "{{count}} months",
      xMonths: "{{count}} months",
      aboutXYears: "{{count}} years",
      xYears: "{{count}} years",
      overXYears: "{{count}} years",
      almostXYears: "{{count}} years",
    };

    const result = formatDistanceLocale[token]
      .replace("about ", "")
      .replace("{{count}}", count);

    if (options?.addSuffix) {
      if (options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }

    return result;
  },
};

export default CustomLocale;
