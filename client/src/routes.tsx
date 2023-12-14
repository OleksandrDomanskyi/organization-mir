import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import ReportsPage from "./pages/ReportsPage";
import PublicationsPage from "./pages/PublicationsPage";
import ArchivePage from "./pages/ArchivePage";
import { MAIN_ROUTE, ABOUT_US_ROUTE, REPORTS_ROUTE, PUBLICATIONS_ROUTE, ARCHIVE_ROUTE } from "./utils/enums/routeNames";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: ABOUT_US_ROUTE,
        Component: AboutUsPage
    },
    {
        path: REPORTS_ROUTE,
        Component: ReportsPage
    },
    {
        path: PUBLICATIONS_ROUTE,
        Component: PublicationsPage
    },
    {
        path: ARCHIVE_ROUTE,
        Component: ArchivePage
    },
]