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
        art: API.art.dev,
    },
    shellApp: `${window.location.origin}`,
    auth: 'http://158.101.102.46:3030/api/auth'
};