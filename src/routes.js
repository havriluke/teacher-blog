import Main from './pages/main/Main'
import PhotosPage from './pages/photos-page/PhotosPage'
import Catalog from './pages/catalog/Catalog'
import Links from './pages/links/Links'

import { CATALOG_ROUTE, FILE_ROUTE, LINKS_ROUTE, MAIN_ROUTE, PHOTOS_ROUTE } from "./utils/consts";
import FilePage from './pages/filePage/FilePage';

export const deafultRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main/>
    },
    {
        path: PHOTOS_ROUTE,
        Component: <PhotosPage/>
    },
    {
        path: CATALOG_ROUTE,
        Component: <Catalog />
    },
    {
        path: LINKS_ROUTE,
        Component: <Links />
    },
    {
        path: FILE_ROUTE + '/:id',
        Component: <FilePage />
    },

]
