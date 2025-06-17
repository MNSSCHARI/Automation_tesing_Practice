import { Given, When, Then, Before, After, BeforeStep, AfterStep, BeforeAll, AfterAll } from '@cucumber/cucumber';

Before(function () {
  // This will run before each scenario
  console.log('Before hook executed');
});

BeforeStep(function () {
  // This will run before each step
  console.log('Before step hook executed');
});

BeforeAll(function(){
  // This will run once before all scenarios
  console.log('Before all hook executed');
});

Given('a sample step', function () {
console.log('Sample step executed');
// Write code here that turns the phrase above into concrete actions
});


When('I perform an action', function () {
// Write code here that turns the phrase above into concrete actions
console.log('Sample step executed');
});

Then('I expect a result', function () {
  // Write code here that turns the phrase above into concrete actions
  console.log('Sample step executed');
});

After(function () {
  // This will run after each scenario
  console.log('After hook executed');
});

AfterStep(function () {
  // This will run after each step
  console.log('After step hook executed');
}); 


AfterAll(function(){
  // This will run once before all scenarios
  console.log('Aftfer all hook executed');
});

