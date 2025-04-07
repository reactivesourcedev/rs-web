(function () {
  var app = {
      text: " y Apps",
      index: 0,
      chars: 0,
      speed: 200,
      container: ".text .content",
      init: function () {
        /*this.chars = this.text.length;
        return this.write();*/
      },
      write: function () {
        /*$(this.container).append(this.text[this.index]);
        if (this.index < this.chars) {
          this.index++;
          return window.setTimeout(function () {
            return app.write();
          }, this.speed);
        } else {
          console.log("started rotation");
          startTextRotation();
        }*/
      }
    };

  $(document).ready(function () {
    console.log("init");
    //return app.init(window.andAppsText);
    //startTextRotation();
  });


}).call(this);

/************************************************* */


/******************************************************* */

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

startTextRotation = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    console.log(toRotate);
    if (toRotate) {
      new TxtRotate(elements[i], toRotate.split(','), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
  document.body.appendChild(css);
};

/* ******************************* */
/* Cotizacion form event*/ 

$(function () {

  function onQuoteMessage(event) {
      // Check sender origin to be trusted
      console.log(event.origin);
      if (!event.origin.includes("cotizador")) return;
      console.log("QM");

      var data = event.data;

      if (typeof(window[data.func]) == "function") {
          window[data.func].call(null, data.message);
      }
  }


  if (window.addEventListener) {
      window.addEventListener("message", onQuoteMessage, {passive: true});        
  } 
  else if (window.attachEvent) {
      window.attachEvent("onmessage", onQuoteMessage, false);
  }

})
