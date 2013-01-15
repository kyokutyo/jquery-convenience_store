;(function($, undefined) {
  $.fn.convenience_store = function(brand_name, options) {
    var brands = $.fn.convenience_store.allows;
    if(brand_name === undefined || brand_name == '' || (brands.indexOf(brand_name) == -1)) return;
    return this.each(function() {
      $.fn.convenience_store.style($(this), brand_name);
    });
  };
  $.fn.convenience_store.allows = ['seveneleven', 'familymart', 'lawson', 'owson'];
  $.fn.convenience_store.include_font = function(font) {
    WebFontConfig = {
      google: { families: [ font ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
               '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
  }
  $.fn.convenience_store.style = function($this, brand_name) {
    var title = $this.html();
    // ============
    // SEVEN ELEVEN
    // ============
    if(brand_name == 'seveneleven') {
      $.fn.convenience_store.include_font("Oswald:700:latin");
      $this.css({
        "background-color": "#fff",
        "position": "relative"
      }).html('');
      var p = 5;
      var m = 5;
      var style1 = {
        "background-color": "#f60",
        "position": "relative",
        "top": "0",
        "margin-bottom": m + "px"
      };
      var style2 = {
        "background-color": "#008837",
        "position": "relative",
        "top": "0",
        "margin-bottom": m + "px"
      };
      var style3 = {
        "background-color": "#f00",
        "position": "relative",
        "top": "0",
      };
      var style_title = {
        "background-color": "#fff",
        "color": "#f00",
        "font-family": "Oswald",
        "font-style": "normal",
        "font-weight": "bold",
        "left": "2%",
        "line-height": "1.2",
        "padding": p + "px 1.5%",
        "position": "absolute",
        "text-transform": "uppercase",
        "top": "0"
      };
      var $line1 = $('<div>').css(style1);
      var $line2 = $('<div>').css(style2);
      var $line3 = $('<div>').css(style3);
      $title = $('<div>').css(style_title).html(title);
      $this.append($line1, $line2, $line3, $title);
      var h = ($title.height() + p*2 - m*2)/3 + 'px';
      $line1.css('height', h);
      $line2.css('height', h);
      $line3.css('height', h);
    }
    // ==========
    // FamilyMart
    // ==========
    else if(brand_name == 'familymart') {
      $.fn.convenience_store.include_font("PT+Sans:700:latin");
      $this.css({
        "background-color": "#fff",
        "line-height": "1.0",
        "overflow": "hidden"
      }).html('');
      var p = 5;
      var style_title = {
        "color": "#018bd4",
        "display": "inline-block",
        "font-family": "PT Sans",
        "font-style": "normal",
        "font-weight": "bold",
        "left": "2%",
        "padding": "6px 0.1% 0",
        "text-transform": "capitalize"
      };
      $title = $('<div>').css(style_title).html(title);
      $this.append($title);
      $title.css({"position": "relative", "top": "0px"});
      var h = ($title.height() + p*2)/8;
      $this.css('border-top', 'solid ' + (h*3) + 'px #00a040');
      $this.css('border-bottom', 'solid ' + (h) + 'px #00a040');
    }
    // ===============
    // LAWSON or OWSON
    // ===============
    else if(brand_name == 'lawson' || brand_name == 'owson') {
      $.fn.convenience_store.include_font("Kameron:700"); // 'Podkova:700', 'Noticia+Text:700', 'Crete+Round', 'Kreon:700', 'Maiden+Orange::latin','Smokum::latin', 'Bevan::latin', 'Wellfleet::latin'
      $this.css({
        "background-color": "#1c7dc2",
        "line-height": "1.0",
        "padding": "7px 0 7px",
        "position": "relative"
      }).html('');
      var style = {
        "border-top": "solid 3px #fff",
        "background-color": "#e74c98",
        "display": "block",
        "height": "8px",
        "width": "100%"
      };
      var style_title = {
        "border-top": "solid 3px #fff",
        "border-bottom": "solid 3px #fff",
        "color": "#fff",
        "display": "block",
        "font-family": "Kameron", // Podkova, Noticia Text, Crete Round, Kreon, Maiden Orange
        "font-style": "normal",
        "font-weight": "bold",
        "left": "2%",
        "letter-spacing": "0",
        "padding": "10px 1% 11px",
        "text-transform": "uppercase"
      };
      var $line = $('<div>').css(style);
      $title = $('<div>').css(style_title).html(title);
      $this.append($title, $line);
      $line.css({"bottom": "10px", "position": "absolute"});
    }
  }
})(jQuery);
