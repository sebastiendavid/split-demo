const keys = {
  Enter: '\uE007',
};

class Page {
  init() {
    browser.windowHandleSize({ width: 1280, height: 800 });
    browser.windowHandleMaximize();
  }

  open(path = '/') {
    browser.url(path).refresh();
  }

  key(key) {
    return keys[key] || key;
  }
}

module.exports = Page;
