// Generated by CoffeeScript 1.6.3
(function() {
  test("extending default settings", function() {
    var qBox, settings;
    qBox = new QBox({
      html: "yay!"
    });
    settings = qBox.settings();
    expect(1);
    return equal(settings.html, "yay!");
  });

  test("showing the modal", function() {
    var element, qBox;
    qBox = new QBox({
      html: "yay!"
    });
    expect(2);
    element = document.getElementsByClassName("qb-mask");
    equal(element.length, 0);
    qBox.show();
    element = document.getElementsByClassName("qb-mask");
    equal(element.length, 1);
    return qBox.hide();
  });

  test("hiding the modal", function() {
    var element, qBox;
    qBox = new QBox({
      html: "yay!"
    });
    qBox.show();
    expect(2);
    element = document.getElementsByClassName("qb-mask");
    equal(element.length, 1);
    qBox.hide();
    element = document.getElementsByClassName("qb-mask");
    return equal(element.length, 0);
  });

}).call(this);
