// Load the custom app ES6 modules

import UsersDataService from 'src/users/services/UsersDataService';

import UserDetails from 'src/users/components/details/UserDetails';

// Define the Angular 'users' module

export default angular
  .module("users", ['ngMaterial'])

  .component(UserDetails.name, UserDetails.config)

  .service("UsersDataService", UsersDataService);
