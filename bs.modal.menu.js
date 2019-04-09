(function ($) {
    'use strict';

    const mobilecheck = function() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    const BsModalMenu = function (element) {
        this.element = element;

        let menuPlacement;
        let that = this;
        let $modal = $(this.element);
        let title = $modal.find('.modal-title').text();
        let $bsModalBodyContent = $modal.find('#modal-body-content');
        let isMobile = mobilecheck();
        let menuCol = isMobile || this.menuPlacement === 'top' ? 'col-xs-12' : 'col-md-1';
        let pageCol = isMobile || this.menuPlacement === 'top' ? 'col-xs-12' : 'col-md-11';

        console.log(this);
        console.log(menuPlacement);
        console.log('---------------');

        Object.defineProperty(this, 'menuPlacement', {
            set: function (placement) {
                if(placement === 'top'|| placement === 'left' || placement === 'right') {
                    menuPlacement = placement;
                } else {
                    menuPlacement = 'left';
                }
            }
        });

        let setTopMenuCss = function () {
            menuCol = 'col-xs-12';
            pageCol = 'col-xs-12';
        };

        let setTopMenuCss = function () {
            menuCol = 'col-md-12';
            pageCol = 'col-md-12';
        };

        let buildMenu = function () {
            console.log('menu placement');
            console.log(that);
            console.log(menuPlacement);
            console.log('this', this);
            $modal.find('.bs-modal-menu-nav, #modal-body-content').wrapAll('<div class="row"></div>');
            $bsModalBodyContent
                .css({
                    'border-left': 'solid 1px #f4f4f4',
                    'position': 'relative'
                })
                .addClass(pageCol);

            // if(isMobile) $bsModalBodyContent.css({'padding-top': '20px'});

            $modal.find('.bs-modal-menu-nav').wrap('<div class="' + menuCol + ' text-center bs-modal-menu-nav-wrap"></div>');

            if(isMobile || that.menuPlacement === 'top') {
                $modal.find('.bs-modal-menu-nav').css({'margin-bottom': '20px'}).addClass('clearfix');
                $modal.find('.bs-modal-menu-nav li').addClass('pull-left');
            }

            $modal.find('.bs-modal-menu-nav-wrap')
                .css({
                    'padding-left': '0px',
                    'padding-right': '0px',
                    'z-index': 1000,
                    'background-color': '#fff'
                });
            $modal.find('.bs-modal-menu-page').css({position: 'absolute'}).not('.in-view').addClass('modal-hidden');
            $modal.find('.in-view').css({position: 'relative'});

            $modal.on('shown.bs.modal', function () {
                $bsModalBodyContent
                    .find('.bs-modal-menu-page')
                    .not('.in-view')
                    .css({
                        top: '0px',
                        left: '+' + ($bsModalBodyContent.width() + 50) + 'px',
                        width: $bsModalBodyContent.width()
                    })
                    .show();
            });

        };

        this.showPage = function (name) {
            let $page = $('#' + name);
            if(!$page.hasClass('in-view')) {
                $('.active').removeClass('active');
                $('#' + name + '-nav').addClass('active');

                $('.in-view').animate({left: '-=' + ($page.width() + 50) + 'px'}, 400, function () {
                    $('.in-view').css('left', '+' + ($page.width() + 50) + 'px');
                    $(this).removeClass('in-view');
                });

                $bsModalBodyContent.animate({height: $page.height() + 80});

                $page.animate({left: '-=' + ($page.width() + 35) + 'px'}, 400, function () {
                    $(this).addClass('in-view');
                });
            }
        };

        this.build = function () {
            buildMenu();
        };

        this.addArrowToMenu = function () {
            $modal.find('.menu-icon').prepend('<i class="fa fa-arrow-circle-right hover-arrow" aria-hidden="true"></i>');
        };

        this.updateTitle = function (menu) {
            var $menu = $(menu);
            if($menu.data('modal-title')) {
                $modal.find('.modal-title').text($menu.data('modal-title'));
            } else {
                $modal.find('.modal-title').text(title);
            }
        }
    };

    // save the original function object
    var _super = $.fn.modal;

    // create a new constructor
    var Modal = function(element, options) {

        console.log(options);
        this.menu = new BsModalMenu(element);
        this.menu.menuPlacement = options.menuPlacement;
        this.menu.build();

        if(options.showArrows) {
            this.menu.addArrowToMenu();
        }

        if(options.showActiveMenuInTitle) {
            this.menu.updateTitle($(element).find('.menu-icon.active'));
        }

        // call the original constructor
        _super.Constructor.apply( this, arguments );

    };

    // add custom defaults
    Modal.DEFAULTS = $.extend( _super.Constructor.DEFAULTS, {
        myCustomOption: true,
        saveEvents: true,
        menuClickEvent: true,
        showArrows: true,
        showActiveMenuInTitle: true,
        menuPlacement: 'left',
        save: function (fields) {},
        beforePageShow: function (menu, page) {}
    });

    // extend prototypes and add a super function
    Modal.prototype = $.extend({}, _super.Constructor.prototype, {
        constructor: Modal,
        _super: function() {
            var args = $.makeArray(arguments);
            _super.Constructor.prototype[args.shift()].apply(this, args);
        },
        show: function() {
            this.$element.on('click.save.bs.modal', '[data-save="modal"]', $.proxy(this.save, this));
            this.$element.on('click.bs.modal.menu', '.menu-icon', $.proxy(this.menuClicked, this));
            // call the original method
            this._super('show');
        },
        hide: function () {
            this.$element.off('click.bs.modal.menu');
            this._super('hide');
        },
        save: function () {
            var fields = [];
            var $page = $(this.$element).find('.in-view');
            var $form = $page.find(':input:visible');

            $form.each(function (index, elem) {
                if($(this).is(':checkbox')) {
                    fields.push({
                        name: this.name,
                        value: this.value,
                        id: this.id,
                        class: this.className,
                        checked: $(this).prop('checked'),
                    })
                } else {
                    fields.push({
                        name: this.name,
                        value: this.value,
                        id: this.id,
                        class: this.className,
                        // atts: this.getAttributeNode(),
                        attNames: this.getAttributeNames()
                    });
                }
            });

            this.$element.off('click.save.bs.modal');

            this.options.save($page.attr('id'), fields);
            if(this.options.saveEvents) {
                var saveEvent = $.Event('bs.menu.saved', {'savedPage': $page.attr('id')});
                this.$element.trigger(saveEvent)
            }
        },
        menuClicked: function (e) {
            if(this.options.showActiveMenuInTitle) {
                this.menu.updateTitle(e.target);
            }
            if(this.options.menuClickEvent) {
                var menuClicked = $.Event('bs.menu.clicked', {'menuItem': e.target});
                this.$element.trigger(menuClicked);
            }
            this.options.beforePageShow(e.target, $(this.$element).find('#' + $(e.target).attr('id').slice(0, -4)));
            this.menu.showPage($(e.target).attr('id').slice(0, -4));
        }
    });

    // Copied exactly from Bootstrap 3 (as of Modal.VERSION  = '3.3.5')
    // Notice: You can copy & paste it exactly, no differences!
    function Plugin(option, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('bs.modal');
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);

            if (!data) $this.data('bs.modal', (data = new Modal(this, options)));
            if (typeof option == 'string') data[option](_relatedTarget);
            else if (options.show) data.show(_relatedTarget);
        })
    }

    // override the old initialization with the new constructor
    $.fn.modal = $.extend(Plugin, $.fn.modal);
})(jQuery);
