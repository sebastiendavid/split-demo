const Page = require('./');

class OctocatPage extends Page {
  open() {
    super.open('/octocat');
  }

  get image() {
    return $('#octocat-image');
  }

  get input() {
    return $('#octocat-input');
  }

  get message() {
    return $('#octocat-message');
  }

  get form() {
    return $('#octocat-form');
  }

  get submit() {
    return $('#octocat-submit');
  }
}

module.exports = new OctocatPage();
