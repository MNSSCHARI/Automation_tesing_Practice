import {Given, When, Then} from '@cucumber/cucumber';
         Given('login into a sample webpage', function () {
         console.log('user is landed into the login page');
         });


         When('User in  login page', function () {
           console.log('user is in the login page');
         });


         Then('User should be able to see the login form', function () {
           console.log('user is able to see the login form');
         });
