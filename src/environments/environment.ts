import {API} from './vhost';

export const environment = {
    production: false,
    module_id: 1260,
    authStrategy: {
        name: 'oauth',
        clientId: '2',
        baseEndpoint: API.art.local + '/oauth/token',
        redirectUri: `${window.location.origin}/oauth/callback`,
        success: '/pages/dashboard'
    },
    apiUrls: {
        art: API.art.local,
    },
    shellApp: `${window.location.origin}`,
    auth: API.auth.local
};
