Feature('login');

const {login_page, I, home_page} = inject();

BeforeSuite( () => {
    console.log("Before da suite")
});
Before( () => {
    console.log("Before dos testes")
});
AfterSuite( () => {
    console.log("After da suite")
});
After( () => {
    console.log("After dos testes")
});

Scenario('Login with success', () => {

    login_page.doLogin("teste@teste.com", "123456")

    home_page.checkLoginSuccess()

});

Scenario('Login with error', () => {

    login_page.doLogin("xteste@teste.com", "123456")
    
    login_page.checkLoginError()
    
});
