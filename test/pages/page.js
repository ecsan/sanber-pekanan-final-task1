class Page {
    async open() {
        await browser.url('https://kasirdemo.belajarqa.com/');
      }
}
module.exports = new Page();