class addShirt {

  constructor(page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');

    this.openTshirt = page.locator('[data-test="item-1-title-link"]');
    this.addToCartBtn = page.locator('[data-test="add-to-cart"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.itemName = page.locator('[data-test="inventory-item-name"]');
  }

  async openLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async openPage() {
    await this.openTshirt.click();
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { addShirt };