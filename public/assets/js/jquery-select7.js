

(function() {
  var plugin,
    __slice = [].slice;

  plugin = function($) {
    "use strict";

    var Select7, readItemsFromSelect, readSelected, trim;
    trim = function(s) {
      return s.replace(/^\s*/, '').replace(/\s*$/, '');
    };
    readItemsFromSelect = function(el) {
      var placeholderText, readOptgroup, readOption, readOptionsAndOptgroups;
      if (placeholderText = $(el).attr("placeholder")) {
        $(el).find("option:first").prop("disabled", true).attr("data-is-placeholder", true).text(placeholderText);
      }
      readOption = function(option) {
        var c, data;
        data = $(option).data();
        data.title = trim($(option).text());
        data.value = $(option).attr("value") || trim($(option).text());
        if ($(option).attr("disabled")) {
          data.disabled = true;
        }
        if (c = $(option).attr("class")) {
          data["class"] = c;
        }
        return data;
      };
      readOptgroup = function(optgroup) {
        var c, data;
        data = $(optgroup).data();
        data.isOptgroup = true;
        data.title = trim($(optgroup).attr("label"));
        if (c = $(optgroup).attr("class")) {
          data["class"] = c;
        }
        data.options = readOptionsAndOptgroups(optgroup);
        return data;
      };
      readOptionsAndOptgroups = function(el) {
        var item, _i, _len, _ref, _results;
        _ref = $(el).find("> option, > optgroup");
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          if ($(item).is("option")) {
            _results.push(readOption(item));
          } else {
            _results.push(readOptgroup(item));
          }
        }
        return _results;
      };
      return readOptionsAndOptgroups(el);
    };
    readSelected = function(el, items) {
      var item, option, selectedValue, _i, _j, _len, _len1, _ref;
      selectedValue = $(el).val();
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        if (item.isOptgroup) {
          _ref = item.options;
          for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
            option = _ref[_j];
            if (option.value === selectedValue) {
              return option;
            }
          }
        } else if (item.value === selectedValue) {
          return item;
        }
      }
      if (items.length > 0 && items[0].isPlaceholder) {
        return items[0];
      }
      return null;
    };
    Select7 = (function() {

      Select7.prototype.defaults = {
        nativeDropdown: false
      };

      function Select7(el, config) {
        var templateCurrentFnName, templateOptgroupFnName, templateOptionFnName, _ref;
        this.el = el;
        this.$el = $(this.el);
        this.$select7 = null;
        this.$drop = null;
        this.config = $.extend({}, this.defaults, config);
        if (this.$el.is(".select7_native_dropdown")) {
          this.config.nativeDropdown = true;
        }
        if (this.$el.is(".select7_remove_current")) {
          this.config.removeCurrent = true;
        }
        if (this.$el.is(".select7_collapse_optgroups")) {
          this.config.collapseOptgroups = true;
        }
        _ref = this.$el.data(), templateOptionFnName = _ref.templateOptionFnName, templateOptgroupFnName = _ref.templateOptgroupFnName, templateCurrentFnName = _ref.templateCurrentFnName;
        if (templateOptionFnName) {
          this.config.optionTemplate = function(option) {
            return window[templateOptionFnName](option);
          };
        }
        if (templateOptgroupFnName) {
          this.config.optgroupTemplate = function(optgroup) {
            return window[templateOptgroupFnName](optgroup);
          };
        }
        if (templateCurrentFnName) {
          this.config.currentTemplate = function(option) {
            return window[templateCurrentFnName](option);
          };
        }
        this.updateItemsAndSelected();
        this.opened = false;
        this.pwnSelect();
      }

      Select7.prototype.updateItemsAndSelected = function() {
        this.items = readItemsFromSelect(this.el);
        return this.selected = readSelected(this.el, this.items);
      };

      Select7.prototype.pwnSelect = function() {
        var classes, h, select7Markup, v, w,
          _this = this;
        if (!this.config.nativeDropdown) {
          this.$el.hide();
        }
        classes = this.$el.attr("class").split(" ");
        classes.splice(classes.indexOf("select7"), 1);
        select7Markup = "<div class=\"select7 " + (classes.join(' ')) + "\">\n	<div class=\"select7__current\">\n		<span data-role=\"value\" class=\"select7__current-value\" data-value=\"\"></span><span class=\"select7__caret\"></span>\n	</div>\n</div>";
        this.$select7 = $(select7Markup);
        this.$el.data("updateCurrentFn", function() {
          return _this.updateCurrent();
        });
        this.$el.on("change", this.$el.data("updateCurrentFn"));
        this.updateCurrent();
        if (!this.config.nativeDropdown) {
          this.$select7.find(".select7__current").click(function() {
            return _this.toggle();
          });
        }
        this.$el.after(this.$select7);
        if (this.config.nativeDropdown) {
          this.$el.css({
            position: "absolute",
            transformOrigin: "top left",
            zIndex: 1,
            opacity: 0,
            margin: 0,
            padding: 0
          });
          v = function($el, k) {
            return parseFloat($el.css(k).replace("px", ""));
          };
          w = function($el) {
            return v($el, "width") + v($el, "padding-left") + v($el, "padding-right") + v($el, "border-left-width") + v($el, "border-right-width");
          };
          h = function($el) {
            return v($el, "height") + v($el, "padding-top") + v($el, "padding-bottom") + v($el, "border-top-width") + v($el, "border-bottom-width");
          };
          return this.$el.css({
            transform: "scaleX(" + (w(this.$select7) / w(this.$el)) + ") scaleY(" + (h(this.$select7) / h(this.$el)) + ")"
          });
        }
      };

      Select7.prototype.updateCurrent = function() {
        var $value;
        this.updateItemsAndSelected();
        $value = this.$select7.find("[data-role='value']");
        if (this.selected === null) {
          this.selected = {
            isPlaceholder: true,
            title: "-"
          };
        }
        $value.attr("data-value", this.selected.isPlaceholder ? "" : this.selected.value);
        $value.toggleClass("select7__placeholder", !!this.selected.isPlaceholder);
        if (this.config.currentTemplate) {
          $value.html(this.config.currentTemplate(this.selected));
        } else {
          $value.text(this.selected.title);
        }
        $value.find(".select7__icon").remove();
        if (this.selected.icon) {
          return $value.prepend("<span class=\"select7__icon\"><img src=\"" + this.selected.icon + "\"></span>");
        }
      };

      Select7.prototype.open = function() {
        var $dropList, generate$optgroup, generate$option, i, item, _i, _len, _ref,
          _this = this;
        if (this.opened) {
          return;
        }
        this.items = readItemsFromSelect(this.el);
        if (this.items.length === 0) {
          return;
        }
        this.$drop = $("<ul class=\"select7__drop\"></ul>");
        this.$drop = $("<div class=\"select7__drop\"></div>");
        $dropList = $("<ul class=\"select7__drop-list\"></ul>");
        this.$drop.append($dropList);
        generate$option = function(option) {
          var $option;
          $option = $("<li class=\"select7__option " + (option["class"] || "") + "\"></li>");
          if (_this.config.optionTemplate) {
            $option.html(_this.config.optionTemplate(option));
          } else {
            $option.text(option.title);
          }
          if (option.disabled) {
            $option.addClass("select7__option_disabled");
          }
          if (option === _this.selected) {
            $option.addClass("select7__option_current");
          }
          if (option.icon) {
            $option.prepend("<span class=\"select7__icon\"><img src=\"" + option.icon + "\"></span>");
          }
          $option.data("option", option);
          return $option;
        };
        generate$optgroup = function(optgroup) {
          var $label, $optgroup, $ul, hasCurrent, option, _i, _len, _ref;
          $optgroup = $("<li class=\"select7__optgroup " + (optgroup["class"] || "") + "\"></li>");
          if (_this.config.collapseOptgroups) {
            $optgroup.addClass("select7__optgroup_collapse");
          }
          hasCurrent = false;
          $label = $("<span class=\"select7__optgroup-label\"></span>");
          if (_this.config.optgroupTemplate) {
            $label.html(_this.config.optgroupTemplate(optgroup));
          } else {
            $label.text(optgroup.title);
          }
          $optgroup.append($label);
          if (item.options) {
            $ul = $("<ul class=\"select7__optgroup-items\"></ul>");
            _ref = item.options;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              option = _ref[_i];
              if (option === _this.selected) {
                hasCurrent = true;
              }
              if (_this.config.removeCurrent && option === _this.selected) {
                continue;
              }
              $ul.append(generate$option(option));
            }
            $optgroup.append($ul);
          }
          if (_this.config.collapseOptgroups && hasCurrent) {
            $optgroup.addClass("select7__optgroup_collapse_open");
          }
          return $optgroup;
        };
        _ref = this.items;
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          item = _ref[i];
          if (item.isPlaceholder) {
            continue;
          }
          if (this.config.removeCurrent && item === this.selected) {
            continue;
          }
          $dropList.append(item.isOptgroup ? generate$optgroup(item) : generate$option(item));
        }
        this.$drop.on("click", ".select7__option", function(e) {
          var $el, option;
          $el = $(e.currentTarget);
          option = $el.data("option");
          if (option.disabled) {
            return;
          }
          if (option.href) {
            window.location.href = option.href;
            return;
          }
          _this.$el.val(option.value).trigger("change");
          return _this.close();
        });
        this.$drop.on("click", ".select7__optgroup_collapse", function(e) {
          var $optgroup;
          $optgroup = $(e.currentTarget);
          return $optgroup.toggleClass("select7__optgroup_collapse_open");
        });
        this.$select7.append(this.$drop);
        this.$select7.addClass("select7_open");
        this.opened = true;
        $("body").trigger("select7Opened");
        return setTimeout(function() {
          _this.$drop.click(function(e) {
            return e.stopPropagation();
          });
          _this.$drop.data("closeFn", function() {
            return _this.close();
          });
          return $("body").on("click select7Opened", _this.$drop.data("closeFn"));
        }, 1);
      };

      Select7.prototype.close = function() {
        if (!this.opened) {
          return;
        }
        this.$select7.removeClass("select7_open");
        $("body").off("click select7Opened", this.$drop.data("closeFn"));
        this.$drop.remove();
        this.$drop = null;
        return this.opened = false;
      };

      Select7.prototype.toggle = function() {
        if (this.opened) {
          return this.close();
        } else {
          return this.open();
        }
      };

      Select7.prototype.destroy = function() {
        if (this.opened) {
          close();
        }
        this.$select7.remove();
        this.$el.off("change", this.$el.data("updateCurrentFn"));
        this.$el.data("updateCurrentFn", null);
        this.$el.data("select7", null);
        return this.$el.show();
      };

      return Select7;

    })();
    return $.fn.select7 = function() {
      var args, method;
      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return this.each(function() {
        var select7;
        select7 = $(this).data('select7');
        if (!select7) {
          select7 = new Select7(this, typeof method === 'object' ? option : {});
          $(this).data('select7', select7);
        }
        if (typeof method === 'string') {
          return select7[method].apply(select7, args);
        }
      });
    };
  };

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], plugin);
  } else {
    plugin(jQuery);
  }

}).call(this);
