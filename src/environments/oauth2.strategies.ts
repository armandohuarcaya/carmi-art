// import {
//     NbOAuth2AuthStrategy, NbOAuth2GrantType,
//     NbOAuth2ResponseType
// } from '@nebular/auth';
import {environment} from './environment';


export const strategies = {
    strategies: [
        // NbOAuth2AuthStrategy.setup({
        //     name: environment.authStrategy.name,
        //     clientId: environment.authStrategy.clientId,
        //     baseEndpoint: `${environment.authStrategy.baseEndpoint}/oauth`,
        //     authorize: {
        //         endpoint: '/authorize',
        //         responseType: NbOAuth2ResponseType.TOKEN,
        //         redirectUri: `${environment.authStrategy.redirectUri}`,
        //         scope: 'read introspection',
        //     },
        //     redirect: {
        //         success: environment.authStrategy.success,
        //         failure: ''
        //     },
        //     refresh: {
        //         endpoint: '/token/',
        //         grantType: NbOAuth2GrantType.REFRESH_TOKEN,
        //     }
        // }),
    ],
};
