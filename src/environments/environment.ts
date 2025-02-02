const apiUrl = 'https://api.qafqaznet.az/api/v1';

export const environment = {
  production: false,

  Languages: {
    getAll: `${apiUrl}/Languages/language-list`,
  },

  HomePages: {
    getAll: `${apiUrl}/HomePages/home-page-by-culture`,
  },

  Experiences: {
    getAll: `${apiUrl}/Experiences/list-by-culture`,
  },

  Services: {
    getAll: `${apiUrl}/Services/list-by-culture`,
  },

  Partners: {
    getAll: `${apiUrl}/Partners/list-by-global`,
  },

  Testimonials: {
    getAll: `${apiUrl}/Testimonials/list-by-client`,
  },

  News: {
    getAll: `${apiUrl}/News/list-for-home-page-by-culture`,
  },
};
