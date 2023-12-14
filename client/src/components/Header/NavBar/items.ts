import { nanoid } from "nanoid";
import { MAIN_ROUTE, ABOUT_US_ROUTE, REPORTS_ROUTE, PUBLICATIONS_ROUTE, ARCHIVE_ROUTE } from "../../../utils/enums/routeNames";

interface NavigationItem {
  id: string;
  to: string;
  text: string;
  private: boolean;
}

export const items: NavigationItem[] = [
    {
        id: nanoid(),
        to: MAIN_ROUTE,
        text: "Головна",
        private: false
    },
    {
        id: nanoid(),
        to: ABOUT_US_ROUTE,
        text: "ПРО НАС",
        private: false
    },
    {
        id: nanoid(),
        to: REPORTS_ROUTE,
        text: "ЗВІТИ",
        private: false
    },
    {
        id: nanoid(),
        to: PUBLICATIONS_ROUTE,
        text: "ПУБЛІКАЦІЇ",
        private: false
    },
    {
        id: nanoid(),
        to: ARCHIVE_ROUTE,
        text: "ФОТО ТА ВІДЕО АРХІВ",
        private: false
    },
]