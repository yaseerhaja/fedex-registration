Feature('home');

Scenario('Test Application', ({ I }) => {
  I.amOnPage('http://localhost:4200/home');
  I.see('ASSESSMENT');

  I.wait(1);
  I.click('Tech', 'ul'); // search only in ul
  I.see('TECHNOLOGY USED');

  I.wait(1);
  I.click('Project', 'ul'); // search only in ul


  I.wait(1);
  I.fillField('firstname','Roger');
  I.wait(0.4);
  I.fillField('lastname', 'Miles');
  I.wait(0.4);
  I.fillField('password', '123er43ert');
  I.wait(0.4);
  I.fillField('confirmpassword', '123er43ert');
  I.wait(0.4);
  I.fillField('email','miles@davis.com');
  I.wait(0.4);

  I.click('Register', 'button');
  I.wait(2);
});
