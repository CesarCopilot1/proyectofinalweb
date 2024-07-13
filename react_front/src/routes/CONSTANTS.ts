export const Routes = {
    HOME: '/',
    CLIENTS: {
        LIST: '/clients',
        CREATE: '/clients/create',
        EDIT: '/clients/:id',
        EDIT_PARAM: (id?: number) => `/clients/${id}`
    },
    PRODUCTS: {
        LIST: '/products',
        CREATE: '/products/create',
        EDIT: '/products/:id',
        EDIT_PARAM: (id?: number) => `/products/${id}`
    },
    CREADOR: {
        LIST: '/creador',
        CREATE: '/creador/create',
        EDIT: '/creador/:id',
        EDIT_PARAM: (id?: number) => `/creador/${id}`
    },
    RIFAS: {
        LIST: '/rifas',
        CREATE: '/rifas/create',
        EDIT: '/rifas/:id',
        EDIT_PARAM: (id?: number) => `/rifas/${id}`
    },
    USUARIOPARTICIPANTE: {
        LIST: '/usuarioparticipante',
        CREATE: '/usuarioparticipante/create',
        EDIT: '/usuarioparticipante/:id',
        EDIT_PARAM: (id?: number) => `/usuarioparticipante/${id}`
    },
    SURTIDOR: {
        LIST: '/surtidor',
        CREATE: '/surtidor/create',
        EDIT: '/surtidor/:id',
        EDIT_PARAM: (id?: number) => `/surtidor/${id}`
    },
    BOMBA: {
        LIST: '/bombas',
        CREATE: '/bombas/create',
        EDIT: '/bombas/:id',
        EDIT_PARAM: (id?: number) => `/bombas/${id}`
    },
    CAMION: {
        LIST: '/camion',
        CREATE: '/camion/create',
        EDIT: '/camion/:id',
        EDIT_PARAM: (id?: number) => `/camion/${id}`
    },
    CAMION: {
        LIST: '/camion',
        CREATE: '/camion/list',
        EDIT: '/camion/:id',
        EDIT_PARAM: (id?: number) => `/camion/${id}`
    },
    AUTH: {
        LOGIN: '/login'
    }
}