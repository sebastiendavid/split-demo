const { expect } = require('chai');
const octocatPage = require('../pages/octocat');

describe('Octocat', () => {
  before(() => {
    octocatPage.init();
  });

  it('should be loaded', () => {
    octocatPage.open();
    octocatPage.image.waitForVisible();
  });

  it('should have an input to write a message', () => {
    expect(octocatPage.input.isVisible()).to.equal(true);
  });

  it('should display a message when clicking on submit button', () => {
    const message = 'Hello!';
    octocatPage.input.setValue(message);
    octocatPage.submit.click();
    expect(octocatPage.message.isVisible()).to.equal(true);
    expect(octocatPage.message.getText()).to.equal(message);
  });

  it('should display a message when pressing enter', () => {
    const message = 'I am the Octocat!';
    octocatPage.input.setValue(message);
    octocatPage.input.keys(octocatPage.key('Enter'));
    expect(octocatPage.message.isVisible()).to.equal(true);
    expect(octocatPage.message.getText()).to.equal(message);
  });
});
