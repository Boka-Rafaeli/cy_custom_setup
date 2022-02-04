describe('Login', () => {
  it('Login through Google', () => {
    const username = Cypress.env('googleSocialLoginUsername');
    const password = Cypress.env('googleSocialLoginPassword');
    const loginUrl = Cypress.env('loginUrl');
    const cookieName = Cypress.env('cookieName');
    const socialLoginOptions = {
      username: username,
      password: password,
      loginUrl: loginUrl,
      headless: true,
      logs: false,
      loginSelector: '[href="/auth/auth0/google-oauth2"]',
      postLoginSelector: '.account-panel',
    };

    return cy.task('GoogleSocialLogin', socialLoginOptions).then(({ cookies }) => {
      cy.clearCookies();

      const cookie = cookies.filter(cookie => cookie.name === cookieName).pop();
      if (cookie) {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          expiry: cookie.expires,
          httpOnly: cookie.httpOnly,
          path: cookie.path,
          secure: cookie.secure,
        });

        Cypress.Cookies.defaults({
          preserve: cookieName,
        });
      }
    });
  });
});
