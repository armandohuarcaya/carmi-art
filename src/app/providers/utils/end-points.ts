import { environment } from "src/environments/environment";
const art:any = environment.apiUrls.art;
export const END_POINTS = {
  elart: art + '/api',
  comun: {
    base: 'comun',
  },
  el_art: { // Proyecto
    filterComun: 'filters-comun',
    settings: {
      intipaz: 'settings/intipaz',
    },
  },
  // contract: { // Proyecto
  //   comun: 'comun/contract',
  // },
  // portal: {
  //   evaluations: 'workerportal/my-evaluations'
  // }
};
