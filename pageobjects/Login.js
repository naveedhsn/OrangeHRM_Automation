// class LoginPage {
//   constructor(page) {
//     this.page = page;
//     this.username = page.getByPlaceholder('Username');
//     this.password = page.getByPlaceholder('Password');
//     this.loginBtn = page.getByRole('button', { name: 'Login' });
//   }

//   async openLoginPage() {
//     await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   }

//   async login(user, pass) {
//     await this.username.fill(user);
//     await this.password.fill(pass);
//     await this.loginBtn.click();
//   }
// }

// module.exports = { LoginPage };


class LoginPage {

  constructor(page) {
    this.page = page;
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }

  async openLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };
