export const environment = {
  production: true,
  application: {
    name: 'wosiris',
    angular: 'Angular 8.2.3',
    bootstrap: 'Bootstrap 4.3.1',
  },
  config: {
    /* SELECT ONE OF THOSE CONFIGURATIONS */

    /* LOCAL JSON (NO CRUD) */
    /* api: false,
    url: './assets/params/json/', */

    /* LOCAL REST API CRUD  */
    /* api: true,
    url: 'http://localhost:5202/', */

    /* EXTERNAL REST API CRUD */
    api: true,
    url: 'https://mock.wosiris.org/',

    /* EXTERNAL REST API (NO CRUD) */
    /* api: true,
    url: 'https://api.wosiris.org/', */

  },
};
