webpackJsonp([2],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wechat__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  工具类
  Generated class for the UtilProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var UtilProvider = (function () {
    function UtilProvider(toastCtrl, sanitizer, loadingCtrl, alertCtrl, events, actionSheetCtrl, wechatProvider) {
        this.toastCtrl = toastCtrl;
        this.sanitizer = sanitizer;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.actionSheetCtrl = actionSheetCtrl;
        this.wechatProvider = wechatProvider;
    }
    /*************** toast start ******************** */
    //成功
    UtilProvider.prototype.success = function (message, position) {
        if (position === void 0) { position = 'top'; }
        return this.showToast(message, 'blue', 2000, position);
    };
    //警告
    UtilProvider.prototype.warning = function (message, position) {
        if (position === void 0) { position = 'top'; }
        return this.showToast(message, 'yellow', 2000, position);
    };
    //错误
    UtilProvider.prototype.error = function (message, position) {
        if (position === void 0) { position = 'top'; }
        return this.showToast(message, 'red', 2000, position);
    };
    UtilProvider.prototype.showToast = function (message, color, duration, position) {
        if (color === void 0) { color = ''; }
        if (duration === void 0) { duration = 2000; }
        if (position === void 0) { position = 'top'; }
        var cssClass = '';
        if (!!color) {
            cssClass = 'toast-' + color;
        }
        ;
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
            cssClass: cssClass
        });
        return toast.present(toast);
    };
    /*************** toast end ******************** */
    /*************** 警告框 start ******************** */
    //公共方法
    UtilProvider.prototype.showCommonAlert = function (opts) {
        if (!opts) {
            opts = {
                title: '消息提示',
                buttons: ['Dismiss']
            };
        }
        var alert = this.alertCtrl.create(opts);
        alert.present();
    };
    UtilProvider.prototype.presentAlert = function (title, subTitle) {
        if (title === void 0) { title = "消息提示"; }
        if (subTitle === void 0) { subTitle = ""; }
        var opts = {
            title: title,
            subTitle: subTitle,
            buttons: ['取消']
        };
        var alert = this.alertCtrl.create(opts);
        alert.present();
    };
    UtilProvider.prototype.presentConfirm = function (title, message, confirmText, cancelText, confirmCallback, cancelCallback) {
        if (title === void 0) { title = "确定提示"; }
        if (message === void 0) { message = ""; }
        var buttons = [{
                text: cancelText || '取消',
                role: 'cancel',
                handler: cancelCallback
            },
            {
                text: confirmText || '确定',
                handler: confirmCallback
            }
        ];
        var option = {
            title: title,
            message: message,
            buttons: buttons
        };
        var alert = this.alertCtrl.create(option);
        alert.present();
    };
    /**************** 警告框 end*********************** */
    //loading当dismiss后，必须重新创建
    UtilProvider.prototype.createLoading = function (opts, callback) {
        if (!opts) {
            opts = {
                content: "请稍后...",
                showBackdrop: false,
                duration: 3000
            };
        }
        var loader = this.loadingCtrl.create(opts);
        if (callback != null) {
            loader.onDidDismiss(function (data, role) { return callback(data, role); });
        }
        return loader;
    };
    /**
     * 深拷贝
     */
    UtilProvider.prototype.deepCopy = function (originObj) {
        return originObj ? JSON.parse(JSON.stringify(originObj)) : null;
    };
    /**
     * 处理html的安全信任
     * @param html raw html
     */
    UtilProvider.prototype.bypassSecurityTrustHtml = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    UtilProvider.prototype.bypassSecurityTrustStyle = function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    /**
     * 分组
     */
    UtilProvider.prototype.groupBy = function (arrs, key) {
        var newArrs = [];
        var tempKey;
        if (Array.isArray(arrs)) {
            //数据字典的概念
            arrs.forEach(function (value) {
                //把某个值作为key
                tempKey = value[key];
                if (!newArrs[tempKey]) {
                    newArrs[tempKey] = [value];
                }
                else {
                    newArrs[tempKey].push(value);
                }
            });
        }
        return newArrs;
    };
    /**
     * 分享消息
     * @param message 消息
     * @param scene 场景
     */
    UtilProvider.prototype.shareText = function (message, scene) {
        var _this = this;
        if (scene === void 0) { scene = __WEBPACK_IMPORTED_MODULE_4__wechat__["a" /* ShareScene */].SESSION; }
        this.wechatProvider.share(message, scene, function () {
            _this.success('分享成功');
        }, function (err) {
            var error = err + '';
            if (error.indexOf('取消') < 0) {
                _this.error('分享失败:' + err);
            }
        });
    };
    /**
     * 剔除并替换最久的数据
     * @param srcSource 数据源
     * @param item 数据项
     * @param maxCount 最大数量
     */
    UtilProvider.prototype.edgeOutItem = function (srcSource, item, maxCount) {
        if (maxCount === void 0) { maxCount = 10; }
        if (!Array.isArray(srcSource)) {
            srcSource = [item];
            return srcSource;
        }
        var findObj = srcSource.find(function (value) { return value.id === item.id; });
        if (!findObj) {
            //如果没有找到
            if (srcSource.length < maxCount) {
                srcSource.unshift(item);
            }
            else {
                srcSource.pop();
                srcSource.unshift(item);
            }
        }
        return srcSource;
    };
    UtilProvider.prototype.xmlToJson = function (xml) {
        return new X2JS().xml2json(xml);
    };
    UtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__wechat__["b" /* WechatProvider */]])
    ], UtilProvider);
    return UtilProvider;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/person/setting/setting.module": [
		508,
		1
	],
	"../pages/test/test.module": [
		509,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_common_auth__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(formBuilder, navCtrl, httpProvider, authProvider) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.authProvider = authProvider;
        this.backgrounds = [
            'assets/imgs/background/background-1.jpg',
            'assets/imgs/background/background-2.jpg',
            'assets/imgs/background/background-3.jpg',
            'assets/imgs/background/background-4.jpg'
        ];
        this.submitted = false;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginBackgroundSlider Page');
    };
    LoginPage.prototype.openResetPassword = function () {
        console.log('Reset password clicked');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.submitted = true;
        if (!this.loginForm.valid) {
            console.log('Invalid or empty data');
        }
        else {
            var userEmail = this.loginForm.value.email;
            var userPassword = this.loginForm.value.password;
            console.log('user data', userEmail, userPassword);
            this.authProvider.login('gz001', '123456').then(function (resp) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/pages/login/login.html"*/`<ion-header no-border>\n  <!-- <ion-navbar transparent>\n  </ion-navbar> -->\n</ion-header>\n<ion-content>\n  <ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n    <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n    </ion-slide>\n  </ion-slides>\n  <div class="login-container">\n    <h1 text-center class="logo">\n      <strong >\n          APPETITE\n      </strong>\n    </h1>\n    <form (submit)="doLogin()" [formGroup]="loginForm" novalidate>\n      <ion-item>\n        <ion-input type="email" placeholder="User ID" formControlName="email" autocapitalize="off" clearInput="true"></ion-input>\n      </ion-item>\n      <p [hidden]="loginForm.controls.email.valid || !submitted">\n          用户名(邮箱)输入有误\n      </p>\n      <ion-item>\n        <ion-input type="password" placeholder="PASSWORD" formControlName="password"></ion-input>\n      </ion-item>\n      <p [hidden]="loginForm.controls.password.valid || !submitted">\n          密码必须6位或以上\n      </p>\n      <button ion-button margin color="danger" width="200">Login</button>\n      <p (click)="openResetPassword()">\n        <span class="footer-text">Forget password?</span>\n      </p>\n    </form>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_common_http__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_common_http__["a" /* HttpProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__providers_common_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_common_auth__["a" /* AuthProvider */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(httpProvider) {
        this.httpProvider = httpProvider;
    }
    /**
   * 用户登录
   */
    AuthProvider.prototype.login = function (username, password) {
        var url = "/login";
        var data = {
            Memcode: username,
            PWD: password,
            IpAddr: ''
        };
        // return this.httpProvider.post(url, data);
        return Promise.resolve({ result: true });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http__["a" /* HttpProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__person_person__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__person_person__["a" /* PersonPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabIcon="zhuye"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="bianqian"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="xinxi"></ion-tab>\n  <ion-tab [root]="tab4Root" tabIcon="lianxiren"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_popup_menu_popup_menu__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_about_about__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_swiper__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_side_menu_side_menu__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutPage = (function () {
    function AboutPage(navCtrl, aboutProvider, cd, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.aboutProvider = aboutProvider;
        this.cd = cd;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.vm = {
            dessertSlides: [],
            dessertList: [],
            selectedSegment: 'one'
        };
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.getDessertSlides();
        this.getDessertList();
    };
    /**
     * 获取甜点轮播图片
     */
    AboutPage.prototype.getDessertSlides = function () {
        var _this = this;
        return this.aboutProvider.getDessertSlides().then(function (rep) {
            _this.vm.dessertSlides = rep.result;
            _this.cd.detectChanges();
            _this.initSwiper();
            return rep;
        });
    };
    /**
     * 获取甜点列表
     */
    AboutPage.prototype.getDessertList = function () {
        var _this = this;
        return this.aboutProvider.getDessertList().then(function (rep) {
            _this.vm.dessertList = rep.result;
            return rep;
        });
    };
    AboutPage.prototype.initSwiper = function () {
        new __WEBPACK_IMPORTED_MODULE_4_swiper__["a" /* default */]('.wheel .swiper-container', {
            slidesPerView: 2,
            initialSlide: 1,
            watchActiveIndex: true,
            centeredSlides: true,
            resizeReInit: true,
            keyboardControl: true,
            grabCursor: true
        });
    };
    AboutPage.prototype.onShowPopupMenu = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_popup_menu_popup_menu__["a" /* PopupMenuComponent */], ['全部', '甜品', '正餐', '饮品']);
        popover.onDidDismiss(function (data) {
            if (data) {
            }
        });
        popover.present({ ev: event });
    };
    AboutPage.prototype.onShowSideMenu = function () {
        var transition = { enter: "modal-from-right-enter", leave: "modal-from-right-leave" };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_side_menu_side_menu__["a" /* SideMenuComponent */], {}, {
            showBackdrop: true,
            enableBackdropDismiss: true,
            enterAnimation: transition.enter,
            leaveAnimation: transition.leave
        });
        modal.onDidDismiss(function (data) {
            console.log(data);
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Slides */])
    ], AboutPage.prototype, "slides", void 0);
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/pages/about/about.html"*/`<ion-header class="primary-bg" no-border>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only color="light" (click)="onShowPopupMenu()">\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      RECIPE ARCHIVE\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="light" (click)="onShowSideMenu()">\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment mode="md" [(ngModel)]="vm.selectedSegment">\n      <ion-segment-button value="one">\n        DESSERT\n        <div class="bolder-sm"></div>\n      </ion-segment-button>\n      <ion-segment-button value="two">\n        DRINKS\n        <div class="bolder-sm"></div>\n      </ion-segment-button>\n      <ion-segment-button value="three">\n        EINKORN\n        <div class="bolder-sm"></div>\n      </ion-segment-button>\n      <ion-segment-button value="four">\n        LIFESTYLE\n        <div class="bolder-sm"></div>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [hidden]="vm.selectedSegment != \'one\'" class="wheel">\n    <!-- <ion-slides centeredSlides="true" slidesPerView="2" initialSlide="1" zoom="false"  *ngIf="vm.dessertSlides && vm.dessertSlides.length>0">\n      <ion-slide *ngFor="let item of vm.dessertSlides">\n        <img [src]="item.src" />\n      </ion-slide>\n    </ion-slides>      -->\n    <div class="swiper-container">\n      <div class="swiper-wrapper">\n        <div class="swiper-slide" *ngFor="let item of vm.dessertSlides">\n          <div class="slide-zoom">\n            <img data-src="{{item.src}}" />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div text-center *ngFor="let item of vm.dessertList" padding-left padding-right>\n      <h5>\n        <strong>{{item.title}}</strong>\n      </h5>\n      <p>{{item.desc}}</p>\n      <img [src]="item.src" style="height: 140px; width: 100%;" />\n    </div>\n  </div>\n  <div [hidden]="vm.selectedSegment !=\'two\'">\n    <div text-center *ngFor="let item of dessertList">\n      <h5>{{item.title}}</h5>\n      <p>{{item.desc}}</p>\n      <img [src]="item.src" style="height: 140px; width: 100%;" />\n    </div>\n  </div>\n  <div [hidden]="vm.selectedSegment != \'three\'">\n    三\n  </div>\n  <div [hidden]="vm.selectedSegment != \'four\'">\n    四\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_about_about__["a" /* AboutProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopupMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopupMenuComponent = (function () {
    function PopupMenuComponent(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.menus = params.data;
    }
    PopupMenuComponent.prototype.onManuClick = function (menu) {
        this.viewCtrl.dismiss(menu);
    };
    PopupMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'popup-menu',template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/components/popup-menu/popup-menu.html"*/`<!-- Generated template for the PopupMenuComponent component -->\n<ion-list>\n  <ion-item *ngFor="let menu of menus" tappable (click)="onManuClick(menu)">{{menu}}</ion-item>\n</ion-list>\n`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/components/popup-menu/popup-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PopupMenuComponent);
    return PopupMenuComponent;
}());

//# sourceMappingURL=popup-menu.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutProvider = (function () {
    function AboutProvider(httpProvider) {
        this.httpProvider = httpProvider;
        console.log('Hello AboutProvider Provider');
    }
    /**
     * 获取甜点轮播图片
     */
    AboutProvider.prototype.getDessertSlides = function () {
        return this.httpProvider.get("../assets/data/dessert-slides.json", false);
    };
    /**
     * 获取甜点列表
     */
    AboutProvider.prototype.getDessertList = function () {
        return this.httpProvider.get("../assets/data/dessert-list.json", false);
    };
    AboutProvider.prototype.getPage = function (url) {
        var h = new Headers({ 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8', 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36' });
        var option = { headers: h };
        return this.httpProvider.get(url, true, option);
    };
    AboutProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_common_http__["a" /* HttpProvider */]])
    ], AboutProvider);
    return AboutProvider;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SideMenuComponent = (function () {
    function SideMenuComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        console.log('Hello SideMenuComponent Component');
        this.text = 'Hello World';
    }
    SideMenuComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SideMenuComponent.prototype.onOK = function () {
        this.viewCtrl.dismiss({ result: 'test' });
    };
    SideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'side-menu',template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/components/side-menu/side-menu.html"*/`<!-- Generated template for the SideMenuComponent component -->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title>食物分类</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">取消</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <div text-center>\n    <div>\n      {{text}}\n    </div>\n    <button ion-button (click)="onOK()">确定</button>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/components/side-menu/side-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["t" /* ViewController */]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());

//# sourceMappingURL=side-menu.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.vm = {
            selectedSegment: 'one',
            chatList: [{
                    firendId: '210000198410281948',
                    friendName: 'Hancock',
                    message: 'If at first you don’t succeed, call it version 1.0'
                }, {
                    firendId: '210000198410281948',
                    friendName: 'Hancock',
                    message: 'If at first you don’t succeed, call it version 1.0'
                }, {
                    firendId: '210000198410281948',
                    friendName: 'Hancock',
                    message: 'If at first you don’t succeed, call it version 1.0'
                }]
        };
    }
    ContactPage.prototype.onNext = function (friend) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], friend);
        // this.navCtrl.push("ChatDetailPage");
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/pages/contact/contact.html"*/`<ion-header no-border>\n  <ion-toolbar>\n    <ion-segment mode="md" [(ngModel)]="vm.selectedSegment">\n      <ion-segment-button value="one">\n        EXPLAIN\n        <div class="bolder-sm"></div>\n      </ion-segment-button>\n      <ion-segment-button value="two">\n        GROUP CHAT\n        <div class="bolder-sm"></div>\n      </ion-segment-button>\n      <ion-segment-button value="three">\n        CONTACTS\n        <div class="bolder-sm"></div>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of vm.chatList" tappable (click)="onNext(item)">\n      <ion-avatar item-left>\n        <img src="./assets/imgs/to-user.jpg">\n      </ion-avatar>\n      <h2>{{item.friendName}}</h2>\n      <p>{{item.message}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_file__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatPage = (function () {
    function ChatPage(navParams, chatService, events, fileProvider) {
        this.navParams = navParams;
        this.chatService = chatService;
        this.events = events;
        this.fileProvider = fileProvider;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        // Get the navParams toUserId parameter
        this.toUser = {
            id: navParams.get('friendId'),
            name: navParams.get('friendName')
        };
    }
    ChatPage.prototype.ionViewDidLeave = function () {
        // unsubscribe
        this.events.unsubscribe('chat:received');
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Subscribe to received  new message events
        this.events.subscribe('chat:received', function (msg) {
            _this.pushNewMsg(msg);
        });
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Get mock user information
        this.chatService.getUserInfo()
            .then(function (res) {
            _this.user = res;
            //get message list
            _this.getMsg()
                .then(function () {
                _this.scrollToBottom();
            });
        });
    };
    ChatPage.prototype.photoBrowser = function ($event) {
    };
    ChatPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    ChatPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    /**
     * @name getMsg
     * @returns {Promise<ChatMessage[]>}
     */
    ChatPage.prototype.getMsg = function () {
        var _this = this;
        // Get mock message list
        return this.chatService
            .getMsgList()
            .then(function (res) {
            _this.msgList = res.result;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    /**
     * @name sendMsg
     */
    ChatPage.prototype.sendMsg = function (newMsg) {
        var _this = this;
        if (!this.editorMsg.trim())
            return;
        // Mock message
        var id = Date.now().toString();
        if (!newMsg) {
            newMsg = {
                messageId: Date.now().toString(),
                userId: this.user.id,
                userName: this.user.name,
                userAvatar: this.user.avatar,
                toUserId: this.toUser.id,
                time: Date.now(),
                message: this.editorMsg,
                status: 'pending',
                photo: ''
            };
        }
        this.pushNewMsg(newMsg);
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.chatService.sendMsg(newMsg)
            .then(function () {
            var index = _this.getMsgIndexById(id);
            if (index !== -1) {
                _this.msgList[index].status = 'success';
            }
        });
    };
    /**
     * @name pushNewMsg
     * @param msg
     */
    ChatPage.prototype.pushNewMsg = function (msg) {
        var userId = this.user.id, toUserId = this.toUser.id;
        // Verify user relationships
        if ((msg.userId === userId && msg.toUserId === toUserId) || (msg.toUserId === userId && msg.userId === toUserId)) {
            this.msgList.push(msg);
        }
        this.scrollToBottom();
    };
    ChatPage.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatPage.prototype.sendImage = function () {
        var _this = this;
        this.fileProvider.mutiImagePick(function (results) {
            if (Array.isArray(results)) {
                results.forEach(function (item) {
                    var msg = new __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatMessage */]();
                    msg.photo = item;
                    _this.sendMsg(msg);
                });
            }
        }, function (err) {
            //
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* TextInput */])
    ], ChatPage.prototype, "messageInput", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/pages/contact/chat/chat.html"*/`<!--\n  Generated template for the Chat page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{toUser.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content #content>\n\n  <div class="message-wrap">\n\n    <div *ngFor="let msg of msgList" class="message" [ngClass]="{\'left\': msg.userId !== user.id, \'right\': msg.userId === user.id}">\n      <img class="user-img" [src]="msg.userAvatar" alt="" src="">\n      <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>\n            {{msg.userName}}&nbsp;&nbsp;&nbsp;{{msg.time | relativeTime}}</p>\n        </div>\n        <div class="msg-content">\n          <span class="triangle"></span>\n          <img *ngIf="msg.photo" (click)="photoBrowser(msg)" [src]="msg.photo" />\n          <div *ngIf="!msg.photo" [innerHTML]="msg.message"></div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'" [keyboardAttach]="content">\n\n  <ion-grid class="input-wrap">\n    <ion-row>\n      <ion-col col-2>\n        <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n            <ion-icon name="md-happy"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear icon-only item-right (click)="sendImage()">\n            <ion-icon name="md-images"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <ion-textarea #chat_input placeholder="Text Input" [(ngModel)]="editorMsg" (keyup.enter)="sendMsg()" (focus)="onFocus()">\n        </ion-textarea>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear icon-only item-right (click)="sendMsg()">\n            <ion-icon name="md-send" ></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <emoji-picker *ngIf="showEmojiPicker" [(ngModel)]="editorMsg"></emoji-picker>\n</ion-footer>\n`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/pages/contact/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["b" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_common_file__["a" /* FileProvider */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessage; });
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_web_timers__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_web_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_library_web_timers__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatProvider = (function () {
    function ChatProvider(events, httpProvider) {
        this.events = events;
        this.httpProvider = httpProvider;
        this.username = null;
        this.userid = null;
        this.socket = null;
        console.log('Hello ChatProvider Provider');
    }
    ChatProvider.prototype.mockNewMsg = function (msg) {
        var _this = this;
        var mockMsg = {
            messageId: Date.now().toString(),
            userId: '210000198410281948',
            userName: 'Hancock',
            userAvatar: '../assets/imgs/to-user.jpg',
            toUserId: '140000198202211138',
            time: Date.now(),
            message: msg.message,
            status: 'success',
            photo: null
        };
        setTimeout(function () {
            _this.events.publish('chat:received', mockMsg, Date.now());
        }, Math.random() * 1800);
    };
    ChatProvider.prototype.getMsgList = function () {
        var msgListUrl = '../assets/data/msg-list.json';
        return this.httpProvider.get(msgListUrl, false);
    };
    ChatProvider.prototype.sendMsg = function (msg) {
        return __WEBPACK_IMPORTED_MODULE_4_core_js_library_web_timers__["Promise"].resolve(this.mockNewMsg(msg));
    };
    ChatProvider.prototype.getUserInfo = function () {
        var userInfo = {
            id: '140000198202211138',
            name: 'Luff',
            avatar: '../assets/imgs/user.jpg'
        };
        return new __WEBPACK_IMPORTED_MODULE_4_core_js_library_web_timers__["Promise"](function (resolve) { return resolve(userInfo); });
    };
    //
    //让浏览器滚动条保持在最低部
    ChatProvider.prototype.scrollToBottom = function () {
    };
    //退出，本例只是一个简单的刷新
    ChatProvider.prototype.logout = function () {
        //this.socket.disconnect();      
    };
    //提交聊天消息内容
    ChatProvider.prototype.submit = function (content) {
        if (content != '') {
            var obj = {
                userid: this.userid,
                username: this.username,
                content: content
            };
            this.socket.emit('message', obj);
        }
        return false;
    };
    ChatProvider.prototype.genUid = function () {
        return new Date().getTime() + "" + Math.floor(Math.random() * 899 + 100);
    };
    //更新系统消息，本例中在用户加入、退出的时候调用
    ChatProvider.prototype.updateSysMsg = function (o, action) {
        //当前在线用户列表
        var onlineUsers = o.onlineUsers;
        //当前在线人数
        var onlineCount = o.onlineCount;
        //新加入用户的信息
        var user = o.user;
        //更新在线人数
        var userhtml = '';
    };
    //第一个界面用户提交用户名
    ChatProvider.prototype.usernameSubmit = function (userID) {
        return false;
    };
    ChatProvider.prototype.init = function (userName) {
        var _this = this;
        //客户端根据时间和随机数生成uid,这样使得聊天室用户名称可以重复。实际项目中，如果是需要用户登录，那么直接采用用户的uid来做标识就可以
        this.userid = this.genUid();
        this.username = userName;
        //连接websocket后端服务器
        this.socket.connect('ws://localhost:3000');
        //告诉服务器端有用户登录
        this.socket.emit('login', { userid: this.userid, username: this.username });
        //监听新用户登录
        this.socket.on('login', function (o) {
            _this.updateSysMsg(o, 'login');
        });
        //监听用户退出
        this.socket.on('logout', function (o) {
            _this.updateSysMsg(o, 'logout');
        });
        //监听消息发送
        this.socket.on('message', function (obj) {
            var isme = (obj.userid == _this.userid) ? true : false;
        });
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_3__common_http__["a" /* HttpProvider */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the FileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileProvider = (function () {
    function FileProvider(camera, actionSheetCtrl, imagePicker) {
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imagePicker = imagePicker;
        console.log('Hello FileProvider Provider');
    }
    /**
     * 图像多选
     */
    FileProvider.prototype.mutiImagePick = function (successCallback, errorCallback, options) {
        if (!options) {
            options = {
                title: '选择相册',
                maximumImagesCount: 9,
                width: 400,
                height: 400,
                quality: 80
            };
        }
        this.imagePicker.getPictures(options).then(function (results) { return successCallback(results); }, function (error) { return errorCallback(error); });
    };
    /**
     * 显示拍照选择
     */
    FileProvider.prototype.choosePhoto = function (successCallback, errorCallback, options) {
        var _this = this;
        if (!options) {
            options = {
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                encodingType: this.camera.EncodingType.JPEG,
                saveToPhotoAlbum: true,
                mediaType: 0,
                targetWidth: 400,
                targetHeight: 400
            };
        }
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择图片来源',
            buttons: [
                {
                    text: '相册',
                    role: 'destructive',
                    handler: function () {
                        options.sourceType = _this.camera.PictureSourceType.PHOTOLIBRARY;
                        _this.getLocalImage(successCallback, errorCallback, options);
                    }
                },
                {
                    text: '拍照',
                    handler: function () {
                        options.sourceType = _this.camera.PictureSourceType.CAMERA;
                        _this.getLocalImage(successCallback, errorCallback, options);
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    /**
   * Default is CAMERA. PHOTOLIBRARY : 0, CAMERA : 1, SAVEDPHOTOALBUM : 2
   */
    FileProvider.prototype.getLocalImage = function (successCallback, errorCallback, options) {
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            successCallback(imageData);
        }, function (err) {
            // Handle error
            errorCallback(err);
        });
    };
    FileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], FileProvider);
    return FileProvider;
}());

//# sourceMappingURL=file.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_cache__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_home_home__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_util__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_swiper__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, cacheProvider, cd, homeProvider, utilProvider, keyboard) {
        this.navCtrl = navCtrl;
        this.cacheProvider = cacheProvider;
        this.cd = cd;
        this.homeProvider = homeProvider;
        this.utilProvider = utilProvider;
        this.keyboard = keyboard;
        this.frendNews = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.keyboard.show();
            // this.inputToFocus.setFocus();
        }, 2000);
        this.getFriendNews();
    };
    HomePage.prototype.getFriendNews = function () {
        var _this = this;
        this.homeProvider.getFriendNews().then(function (res) {
            if (res.success) {
                var rawSource = res.result;
                rawSource.forEach(function (element) {
                    element.background = _this.utilProvider.bypassSecurityTrustStyle("url(" + element.cover + ") center no-repeat");
                });
                _this.frendNews = rawSource;
                _this.cd.detectChanges();
                _this.initSwiper();
                // this.initVideo();
            }
            else {
                //如提示框等错误提示
                console.log(res.msg);
            }
        });
    };
    HomePage.prototype.initVideo = function () {
        this.mediaSouce.forEach(function (element) {
            element.nativeElement.width = element.nativeElement.clientWidth;
            element.nativeElement.height = element.nativeElement.clientHeight;
        });
    };
    HomePage.prototype.initSwiper = function () {
        new __WEBPACK_IMPORTED_MODULE_6_swiper__["a" /* default */]('.near-join .swiper-container', {
            paginationClickable: true,
            slidesPerView: 2,
            width: 280,
            spaceBetween: 10,
            watchActiveIndex: true,
            initialSlide: 0,
            zoom: true,
            loop: false,
            lazyLoading: true,
            lazyLoadingOnTransitionStart: true,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('myMedia'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "mediaSouce", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputToFocus'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "inputToFocus", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/pages/home/home.html"*/`<ion-header no-border class="primary-bg">\n  <ion-navbar>\n    <ion-title color="light">APPETITE</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngFor="let item of frendNews">\n      <!-- 发布人信息 -->\n      <ion-item>\n        <ion-avatar item-start>\n          <img data-src="{{item.headImg}}" onerror="assets/imgs/girl1.jpg"/>\n        </ion-avatar>\n        <h2><strong><span color="dark">{{item.name}}</span></strong></h2>\n        <ion-note item-right>{{item.createTime}}</ion-note>\n      </ion-item>\n      <!-- 视频播放器 -->\n      <vg-player class="video-container" *ngIf="item.type == 1; else elseBlock">\n        <vg-overlay-play></vg-overlay-play>\n        <vg-buffering></vg-buffering>\n        <vg-controls>\n          <vg-play-pause></vg-play-pause>\n          <vg-playback-button></vg-playback-button>\n\n          <vg-time-display vgProperty="current" vgFormat="mm:ss"></vg-time-display>\n          <vg-time-display vgProperty="left" vgFormat="mm:ss"></vg-time-display>\n          <vg-time-display vgProperty="total" vgFormat="mm:ss"></vg-time-display>\n          <vg-mute></vg-mute>\n          <vg-volume></vg-volume>\n          <vg-fullscreen></vg-fullscreen>\n        </vg-controls>\n        <!-- <div class="fullscreen-bg" [style.background]="item.background">\n          <video #myMedia [vgMedia]="myMedia" class="video-js vjs-default-skin vjs-fluid vjs-poster" height="400" width="600" preload="auto" poster="../assets/imgs/cover.png"\n            crossorigin playsinline webkit-playsinline>\n            <source *ngFor="let cItem of item.medias" src="{{cItem.src}}" type="video/mp4">\n          </video>\n        </div> -->\n        <div>\n          <video #myMedia [vgMedia]="myMedia" class="video-js vjs-default-skin vjs-fluid vjs-poster" height="400" preload="auto" \n          poster="{{item.cover}}"\n            crossorigin playsinline webkit-playsinline>\n            <source *ngFor="let cItem of item.medias" src="{{cItem.src}}" type="video/mp4">\n          </video>\n        </div>\n      </vg-player>\n      <!-- 画廊组件 -->\n      <ng-template #elseBlock>\n        <my-swiper [source]="item.medias" cssName="near-join"></my-swiper>\n      </ng-template>\n      <p padding-left padding-right>{{item.content}}</p>\n      <!-- 按钮组 -->\n      <div class="item-block">\n        <div>\n          <button ion-button clear icon-left small outline (click)="onTest()">\n            <ion-icon name="heart" ></ion-icon>\n            <div>{{item.favorites}}</div>\n          </button>\n          <button ion-button clear icon-left small>\n            <ion-icon name="text-outline"></ion-icon>\n            <div>{{item.comments}}</div>\n          </button>\n        </div>\n        <button ion-button clear icon-only small item-right>\n            <ion-icon name="more"></ion-icon>\n        </button>\n      </div>\n      <!-- 分隔符 -->\n      <div class="item-divider-sm"></div>\n    </div>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_common_cache__["a" /* CacheProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__providers_home_home__["a" /* HomeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_util__["a" /* UtilProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CacheKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 用枚举管理key值，防止字符串拼错
 */
var CacheKeys;
(function (CacheKeys) {
    CacheKeys[CacheKeys["TOKEN"] = 0] = "TOKEN";
    CacheKeys[CacheKeys["AUTO_LOGIN"] = 1] = "AUTO_LOGIN";
    CacheKeys[CacheKeys["USER_INFO"] = 2] = "USER_INFO";
})(CacheKeys || (CacheKeys = {}));
var CacheProvider = (function () {
    function CacheProvider(storage) {
        this.storage = storage;
        console.log(CacheKeys[CacheKeys.TOKEN]);
    }
    CacheProvider.prototype.get = function (key) {
        return this.storage.get(CacheKeys[key]);
    };
    CacheProvider.prototype.set = function (key, value) {
        return this.storage.set(CacheKeys[key], value);
    };
    CacheProvider.prototype.clear = function () {
        return this.storage.clear();
    };
    CacheProvider.prototype.remove = function (key) {
        return this.storage.remove(CacheKeys[key]);
    };
    CacheProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], CacheProvider);
    return CacheProvider;
}());

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HomeProvider = (function () {
    function HomeProvider(httpProvider) {
        this.httpProvider = httpProvider;
        console.log('Hello HomeProvider Provider');
    }
    HomeProvider.prototype.getFriendNews = function () {
        //第二个参数为false表示使用相对路径
        return this.httpProvider.get("../assets/data/friend-news.json", false);
    };
    HomeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_common_http__["a" /* HttpProvider */]])
    ], HomeProvider);
    return HomeProvider;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WechatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShareScene;
(function (ShareScene) {
    ShareScene[ShareScene["SESSION"] = 0] = "SESSION";
    ShareScene[ShareScene["TIMELINE"] = 1] = "TIMELINE";
    ShareScene[ShareScene["FAVORITE"] = 2] = "FAVORITE"; // 收藏
})(ShareScene || (ShareScene = {}));
/*
  Generated class for the WechatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var WechatProvider = (function () {
    function WechatProvider() {
    }
    /**
     * 检查是否安装
     */
    WechatProvider.prototype.isInstalled = function (successCallback, failCallback) {
        Wechat.isInstalled(successCallback, failCallback);
    };
    WechatProvider.prototype.checkBeforeWork = function (successCallback, failCallback) {
        this.isInstalled(function (installed) {
            //返回1或者true，所以用两个等号，不用三个
            if (installed == true) {
                successCallback();
            }
            else {
                failCallback('微信未安装');
            }
        }, function (reason) {
            failCallback(reason);
        });
    };
    /**
     * 分享文本
     * @param text 分享文本
     * @param scene 场景
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    WechatProvider.prototype.shareText = function (text, scene, successCallback, failCallback) {
        //分享自带安装检查
        Wechat.share({
            text: text,
            scene: scene //
        }, successCallback, failCallback);
    };
    /**
     * 分享多媒体(e.g. link, photo, music, video etc)
     * @param message 分享消息
     * @param scene 场景
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    WechatProvider.prototype.share = function (message, scene, successCallback, failCallback) {
        //分享自带安装检查
        Wechat.share({
            message: message,
            scene: scene
        }, successCallback, failCallback);
    };
    /**
     * 微信授权登录
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    WechatProvider.prototype.auth = function (successCallback, failCallback) {
        var scope = "snsapi_userinfo", state = "_" + (+new Date());
        Wechat.auth(scope, state, successCallback, failCallback);
    };
    /**
     * 微信支付
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    WechatProvider.prototype.payment = function (params, successCallback, failCallback) {
        this.checkBeforeWork(function () {
            Wechat.sendPaymentRequest(params, successCallback, failCallback);
        }, function (err) {
            failCallback(err);
        });
    };
    /**
     * 分享类型
     */
    WechatProvider.Type = {
        APP: 1,
        EMOTION: 2,
        FILE: 3,
        IMAGE: 4,
        MUSIC: 5,
        VIDEO: 6,
        WEBPAGE: 7
    };
    WechatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WechatProvider);
    return WechatProvider;
}());

//# sourceMappingURL=wechat.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonPage = (function () {
    function PersonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {
            name: 'Renee Byrd',
            profileImage: 'assets/imgs/girl1.jpg',
            description: 'The apricots are as simple',
            works: 59,
            followers: 2915,
            following: 125
        };
        this.vm = {
            msgNum: 0
        };
    }
    PersonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonPage');
    };
    PersonPage.prototype.onInvite = function () {
    };
    PersonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-person',template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/pages/person/person.html"*/`<ion-header no-border color="primary">\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only color="gray">\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      GASTRONOME\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="gray">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div padding text-center>\n    <ion-avatar>\n      <img [src]="user.profileImage">\n    </ion-avatar>\n    <h3>\n      <strong>{{user.name}}</strong>\n    </h3>\n    <p>{{user.description}}</p>\n  </div>\n  <ion-row text-center>\n    <ion-col col-4>\n      <span>{{user.works}}</span>\n      <p>WORKS</p>\n    </ion-col>\n    <ion-col col-4>\n      <span>{{user.followers}}</span>\n      <p>FOLLOWERS</p>\n    </ion-col>\n    <ion-col col-4>\n      <span>{{user.following}}</span>\n      <p>FOLLOWING</p>\n    </ion-col>\n  </ion-row>\n  <div id="posts">\n    <ion-card>\n\n    </ion-card>\n  </div>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Me</ion-item-divider>\n    <button ion-item>\n      <ion-icon name="chatbubbles" color="light-green"></ion-icon>\n      Leave me a message\n    </button>\n    <button ion-item>\n      <ion-icon name="heart" color="light-red"></ion-icon>\n      My favorite\n    </button>\n  </ion-item-group>\n  <ion-item-group>\n    <ion-item-divider color="light">System</ion-item-divider>\n    <button ion-item (click)="onInvite()">\n      <ion-icon name="people" color="light-blue"></ion-icon>\n      Invite friends\n    </button>\n    <button ion-item>\n      <ion-icon name="mail" color="light-yellow"></ion-icon>\n      System message\n      <ion-badge *ngIf="vm && vm.msgNum>0" item-right color="danger">{{vm.msgNum}}</ion-badge>\n    </button>\n    <button ion-item>\n      <ion-icon name="settings" color="light-green" navPush="SettingPage"></ion-icon>\n      Setting\n    </button>\n  </ion-item-group>\n</ion-content>\n`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/pages/person/person.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PersonPage);
    return PersonPage;
}());

//# sourceMappingURL=person.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the EmojiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var EmojiProvider = (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    EmojiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EmojiProvider);
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(381);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_image_picker__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_person_person__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_chat_chat__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_side_menu_side_menu__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_my_swiper_my_swiper__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_emoji_picker_emoji_picker__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_popup_menu_popup_menu__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_home_home__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_about_about__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_common_file__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_common_util__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_common_wechat__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_common_cache__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_chat_chat__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_common_emoji__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_common_auth__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_videogular2_core__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_videogular2_controls__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_videogular2_overlay_play__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_videogular2_buffering__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__directives_keyboard_attach_keyboard_attach__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pipes_first_frame_first_frame__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pipes_relative_time_relative_time__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipes_background_background__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__directives_my_mode_my_mode__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__modal_transitions__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//native





//pages







//components




//providers










//




//others






var AppModule = (function () {
    function AppModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    AppModule.prototype.setCustomTransitions = function () {
        this.config.setTransition('modal-from-top-enter', __WEBPACK_IMPORTED_MODULE_41__modal_transitions__["e" /* ModalFromTopEnter */]);
        this.config.setTransition('modal-from-top-leave', __WEBPACK_IMPORTED_MODULE_41__modal_transitions__["f" /* ModalFromTopLeave */]);
        this.config.setTransition('modal-from-left-enter', __WEBPACK_IMPORTED_MODULE_41__modal_transitions__["a" /* ModalFromLeftEnter */]);
        this.config.setTransition('modal-from-left-leave', __WEBPACK_IMPORTED_MODULE_41__modal_transitions__["b" /* ModalFromLeftLeave */]);
        this.config.setTransition('modal-from-right-enter', __WEBPACK_IMPORTED_MODULE_41__modal_transitions__["c" /* ModalFromRightEnter */]);
        this.config.setTransition('modal-from-right-leave', __WEBPACK_IMPORTED_MODULE_41__modal_transitions__["d" /* ModalFromRightLeave */]);
        this.config.setTransition('modal-scale-enter', __WEBPACK_IMPORTED_MODULE_41__modal_transitions__["g" /* ModalScaleEnter */]);
        this.config.setTransition('modal-scale-leave', __WEBPACK_IMPORTED_MODULE_41__modal_transitions__["h" /* ModalScaleLeave */]);
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_person_person__["a" /* PersonPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_37__pipes_first_frame_first_frame__["a" /* FirstFramePipe */],
                __WEBPACK_IMPORTED_MODULE_38__pipes_relative_time_relative_time__["a" /* RelativeTimePipe */],
                __WEBPACK_IMPORTED_MODULE_36__directives_keyboard_attach_keyboard_attach__["a" /* KeyboardAttachDirective */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_39__pipes_background_background__["a" /* BackgroundPipe */],
                __WEBPACK_IMPORTED_MODULE_40__directives_my_mode_my_mode__["a" /* MyModeDirective */],
                __WEBPACK_IMPORTED_MODULE_21__components_popup_menu_popup_menu__["a" /* PopupMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_my_swiper_my_swiper__["a" /* MySwiperComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_side_menu_side_menu__["a" /* SideMenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    backButtonText: '',
                    tabsHideOnSubPages: true,
                    scrollAssist: true,
                    autoFocusAssist: 'delay'
                }, {
                    links: [
                        { loadChildren: '../pages/person/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_32_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_33_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_34_videogular2_overlay_play__["VgOverlayPlayModule"],
                __WEBPACK_IMPORTED_MODULE_35_videogular2_buffering__["VgBufferingModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_person_person__["a" /* PersonPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__components_popup_menu_popup_menu__["a" /* PopupMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_my_swiper_my_swiper__["a" /* MySwiperComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_side_menu_side_menu__["a" /* SideMenuComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_image_picker__["a" /* ImagePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_common_cache__["a" /* CacheProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_common_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_chat_chat__["b" /* ChatProvider */],
                __WEBPACK_IMPORTED_MODULE_37__pipes_first_frame_first_frame__["a" /* FirstFramePipe */],
                __WEBPACK_IMPORTED_MODULE_22__providers_home_home__["a" /* HomeProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_common_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_about_about__["a" /* AboutProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_common_file__["a" /* FileProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_common_wechat__["b" /* WechatProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_common_util__["a" /* UtilProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_common_auth__["a" /* AuthProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_retry__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_timeout__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpProvider = (function () {
    function HttpProvider(authHttp) {
        this.authHttp = authHttp;
    }
    /**
     * get方法(isJoinHost是为了兼容获取应用数据)
     * @param url 请求url
     * @param isJoinHost 是否合并到主机地址
     * @param options 请求选项
     */
    HttpProvider.prototype.get = function (url, isJoinHost, options) {
        var _this = this;
        if (isJoinHost === void 0) { isJoinHost = true; }
        url = (isJoinHost && url.indexOf('http') < 0) ? __WEBPACK_IMPORTED_MODULE_6__config__["a" /* ConfigProvider */].getApiHost() + encodeURI(url) : encodeURI(url);
        return this.authHttp.get(url, options)
            .timeout(60000)
            .toPromise()
            .catch(function (resp) { return _this.handleHttpError(resp); });
    };
    /**
     * post方法
     * @param url 请求url
     * @param data 请求参数
     * @param options 请求选项
     */
    HttpProvider.prototype.post = function (url, data, options) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (options === void 0) { options = __WEBPACK_IMPORTED_MODULE_6__config__["a" /* ConfigProvider */].formOptions; }
        url = url.indexOf('http') > -1 ? url : __WEBPACK_IMPORTED_MODULE_6__config__["a" /* ConfigProvider */].getApiHost() + url;
        return this.authHttp.post(url, data, options)
            .timeout(60000)
            .toPromise()
            .catch(function (resp) { return _this.handleHttpError(resp); });
    };
    /**
   * 处理http错误
   */
    HttpProvider.prototype.handleHttpError = function (resp) {
        var errMsg = '抱歉，后台服务出错了';
        if (resp) {
            var msg = resp.message;
            if (msg && msg.toLowerCase().indexOf('timeout') > -1) {
                errMsg = '请求超时，请稍后重试！';
            }
            else {
                switch (resp.status) {
                    case 401: errMsg = '无权限访问，或许登录信息已过期，请重新登录';
                    case 404: errMsg = '抱歉，后台服务找不到对应接口';
                    case 0: errMsg = '网络无法连接';
                    default: break;
                }
            }
        }
        return { success: false, msg: errMsg, result: null };
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // rootPage:any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.getRequest = function (url) {
        var reqParams = new Object();
        var index = url.indexOf("?");
        if (index != -1) {
            var str = url.substr(index + 1);
            var keyValues = str.split("&");
            keyValues.forEach(function (keyValue) {
                var valuePairs = keyValue.split('=');
                reqParams[valuePairs[0].trim()] = valuePairs[1].trim();
            });
        }
        return reqParams;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigProvider = (function () {
    function ConfigProvider() {
    }
    ConfigProvider_1 = ConfigProvider;
    /**
    * 获取域名
    * @param versionType 版本类型，0:正式环境，1:测试环境，2: 本地
    */
    ConfigProvider.getDomainInfo = function (versionType) {
        if (versionType === void 0) { versionType = 1; }
        var domain;
        switch (versionType) {
            case 0:
                domain = "http://";
                break; //正式环境
            case 1:
                domain = "http://";
                break; //测试环境
            case 2:
                domain = "";
                break; //本地
            default:
                domain = "";
                break;
        }
        return { domain: domain, versionType: versionType };
    };
    /**
     *获取api地址
     */
    ConfigProvider.getApiHost = function () {
        return ConfigProvider_1.getDomainInfo().domain + "";
    };
    ConfigProvider.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    ConfigProvider.formHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': 'application/json' });
    ConfigProvider.uploadHeasers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'multipart/form-data' });
    //
    ConfigProvider.defaultOptions = { headers: ConfigProvider_1.defaultHeaders };
    ConfigProvider.formOptions = { headers: ConfigProvider_1.formHeaders };
    ConfigProvider.uploadOptions = { headers: ConfigProvider_1.uploadHeasers };
    ConfigProvider = ConfigProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigProvider);
    return ConfigProvider;
    var ConfigProvider_1;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySwiperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MySwiperComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MySwiperComponent = (function () {
    function MySwiperComponent() {
        this.cssName = "main"; //类名
        this.center = false; //是否居中
        this.width = 280; //宽度
        this.slidesPerView = 2; //预览歌手
        this.source = [];
        console.log('Hello MySwiperComponent Component');
    }
    MySwiperComponent.prototype.ionViewDidLoad = function () {
        //http://www.swiper.com.cn/api/index.html
        this.reset();
    };
    MySwiperComponent.prototype.reset = function () {
        // let selector = this.cssName? '.' + this.cssName + ' .swiper-container' : '.swiper-container'
        // new Swiper(selector, {
        //     paginationClickable: true,
        //     centeredSlides: this.center,
        //     slidesPerView:  this.slidesPerView,
        //     width: this.width,
        //     spaceBetween : 10,
        //     watchActiveIndex: true,
        //     initialSlide: 0,//初始化显示第几个
        //     zoom: true,//双击,手势缩放
        //     loop: false,//循环切换
        //     lazyLoading: true,//延迟加载
        //     lazyLoadingOnTransitionStart: true,//    lazyLoadingInPrevNext : true,
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('panel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MySwiperComponent.prototype, "panel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MySwiperComponent.prototype, "cssName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MySwiperComponent.prototype, "center", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MySwiperComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MySwiperComponent.prototype, "slidesPerView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MySwiperComponent.prototype, "source", void 0);
    MySwiperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-swiper',template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/components/my-swiper/my-swiper.html"*/`<!-- Generated template for the MySwiperComponent component -->\n<div [ngClass]="cssName">\n  <div class="swiper-container">\n    <div class="swiper-wrapper">\n      <div class="swiper-slide" *ngFor="let item of source">\n        <img data-src="{{item.src}}" class="swiper-lazy">\n      </div>\n    </div>\n  </div>\n</div>`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/components/my-swiper/my-swiper.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MySwiperComponent);
    return MySwiperComponent;
}());

//# sourceMappingURL=my-swiper.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_common_emoji__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmojiPickerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = (function () {
    function EmojiPickerComponent(emojiProvider) {
        this.emojiArr = [];
        this.emojiArr = emojiProvider.getEmojis();
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    EmojiPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'emoji-picker',
            providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"/Users/woodstream/Documents/git/appetite/src/components/emoji-picker/emoji-picker.html"*/`<!-- Generated template for the EmojiPickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item"\n              (click)="setValue(item)"\n              *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</div>\n`/*ion-inline-end:"/Users/woodstream/Documents/git/appetite/src/components/emoji-picker/emoji-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_common_emoji__["a" /* EmojiProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name KeyboardAttachDirective
 * @source https://gist.github.com/Manduro/bc121fd39f21558df2a952b39e907754
 * @description
 * The `keyboardAttach` directive will cause an element to float above the
 * keyboard when the keyboard shows. Currently only supports the `ion-footer` element.
 *
 * ### Notes
 * - This directive requires [Ionic Native](https://github.com/driftyco/ionic-native)
 * and the [Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugin-keyboard).
 * - Currently only tested to work on iOS.
 * - If there is an input in your footer, you will need to set
 *   `Keyboard.disableScroll(true)`.
 *
 * @usage
 *
 * ```html
 * <ion-content #content>
 * </ion-content>
 *
 * <ion-footer [keyboardAttach]="content">
 *   <ion-toolbar>
 *     <ion-item>
 *       <ion-input></ion-input>
 *     </ion-item>
 *   </ion-toolbar>
 * </ion-footer>
 * ```
 */
var KeyboardAttachDirective = (function () {
    function KeyboardAttachDirective(elementRef, keyboard, platform) {
        this.elementRef = elementRef;
        this.keyboard = keyboard;
        this.platform = platform;
    }
    KeyboardAttachDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            this.onShowSubscription = this.keyboard.onKeyboardShow().subscribe(function (e) { return _this.onShow(e); });
            this.onHideSubscription = this.keyboard.onKeyboardHide().subscribe(function () { return _this.onHide(); });
        }
    };
    KeyboardAttachDirective.prototype.ngOnDestroy = function () {
        if (this.onShowSubscription) {
            this.onShowSubscription.unsubscribe();
        }
        if (this.onHideSubscription) {
            this.onHideSubscription.unsubscribe();
        }
    };
    KeyboardAttachDirective.prototype.onShow = function (e) {
        var keyboardHeight = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
        this.setElementPosition(keyboardHeight);
        // setTimeout(()=>{
        //         window.scrollTo(0, 0) ;
        //         this.content.scrollToBottom(0);
        //         this.keyboard.disableScroll(true);
        //     });
    };
    ;
    KeyboardAttachDirective.prototype.onHide = function () {
        this.setElementPosition(0);
    };
    ;
    KeyboardAttachDirective.prototype.setElementPosition = function (pixels) {
        this.elementRef.nativeElement.style.paddingBottom = pixels + 'px';
        this.content.resize();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('keyboardAttach'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Content */])
    ], KeyboardAttachDirective.prototype, "content", void 0);
    KeyboardAttachDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[keyboardAttach]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */]])
    ], KeyboardAttachDirective);
    return KeyboardAttachDirective;
}());

//# sourceMappingURL=keyboard-attach.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstFramePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FirstFramePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FirstFramePipe = (function () {
    function FirstFramePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FirstFramePipe.prototype.transform = function (video) {
        this.video = video;
        video.removeEventListener("loadeddata", this.captureImage, false);
        video.addEventListener('loadeddata', this.captureImage);
    };
    FirstFramePipe.prototype.captureImage = function ($event) {
        var video = $event.target;
        var scale = 0.8;
        var canvas = document.createElement("canvas");
        // canvas.width = video.videoWidth * scale;
        // canvas.height = video.videoHeight * scale;
        canvas.width = 400;
        canvas.height = 300;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        var result = canvas.toDataURL("image/png");
        video.poster = result;
        // return result;
    };
    FirstFramePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'firstFrame',
        })
    ], FirstFramePipe);
    return FirstFramePipe;
}());

//# sourceMappingURL=first-frame.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the RelativeTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RelativeTimePipe = (function () {
    function RelativeTimePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativeTimePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).toNow();
    };
    RelativeTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'relativeTime',
        })
    ], RelativeTimePipe);
    return RelativeTimePipe;
}());

//# sourceMappingURL=relative-time.js.map

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 241,
	"./af.js": 241,
	"./ar": 242,
	"./ar-dz": 243,
	"./ar-dz.js": 243,
	"./ar-kw": 244,
	"./ar-kw.js": 244,
	"./ar-ly": 245,
	"./ar-ly.js": 245,
	"./ar-ma": 246,
	"./ar-ma.js": 246,
	"./ar-sa": 247,
	"./ar-sa.js": 247,
	"./ar-tn": 248,
	"./ar-tn.js": 248,
	"./ar.js": 242,
	"./az": 249,
	"./az.js": 249,
	"./be": 250,
	"./be.js": 250,
	"./bg": 251,
	"./bg.js": 251,
	"./bm": 252,
	"./bm.js": 252,
	"./bn": 253,
	"./bn.js": 253,
	"./bo": 254,
	"./bo.js": 254,
	"./br": 255,
	"./br.js": 255,
	"./bs": 256,
	"./bs.js": 256,
	"./ca": 257,
	"./ca.js": 257,
	"./cs": 258,
	"./cs.js": 258,
	"./cv": 259,
	"./cv.js": 259,
	"./cy": 260,
	"./cy.js": 260,
	"./da": 261,
	"./da.js": 261,
	"./de": 262,
	"./de-at": 263,
	"./de-at.js": 263,
	"./de-ch": 264,
	"./de-ch.js": 264,
	"./de.js": 262,
	"./dv": 265,
	"./dv.js": 265,
	"./el": 266,
	"./el.js": 266,
	"./en-au": 267,
	"./en-au.js": 267,
	"./en-ca": 268,
	"./en-ca.js": 268,
	"./en-gb": 269,
	"./en-gb.js": 269,
	"./en-ie": 270,
	"./en-ie.js": 270,
	"./en-nz": 271,
	"./en-nz.js": 271,
	"./eo": 272,
	"./eo.js": 272,
	"./es": 273,
	"./es-do": 274,
	"./es-do.js": 274,
	"./es-us": 275,
	"./es-us.js": 275,
	"./es.js": 273,
	"./et": 276,
	"./et.js": 276,
	"./eu": 277,
	"./eu.js": 277,
	"./fa": 278,
	"./fa.js": 278,
	"./fi": 279,
	"./fi.js": 279,
	"./fo": 280,
	"./fo.js": 280,
	"./fr": 281,
	"./fr-ca": 282,
	"./fr-ca.js": 282,
	"./fr-ch": 283,
	"./fr-ch.js": 283,
	"./fr.js": 281,
	"./fy": 284,
	"./fy.js": 284,
	"./gd": 285,
	"./gd.js": 285,
	"./gl": 286,
	"./gl.js": 286,
	"./gom-latn": 287,
	"./gom-latn.js": 287,
	"./gu": 288,
	"./gu.js": 288,
	"./he": 289,
	"./he.js": 289,
	"./hi": 290,
	"./hi.js": 290,
	"./hr": 291,
	"./hr.js": 291,
	"./hu": 292,
	"./hu.js": 292,
	"./hy-am": 293,
	"./hy-am.js": 293,
	"./id": 294,
	"./id.js": 294,
	"./is": 295,
	"./is.js": 295,
	"./it": 296,
	"./it.js": 296,
	"./ja": 297,
	"./ja.js": 297,
	"./jv": 298,
	"./jv.js": 298,
	"./ka": 299,
	"./ka.js": 299,
	"./kk": 300,
	"./kk.js": 300,
	"./km": 301,
	"./km.js": 301,
	"./kn": 302,
	"./kn.js": 302,
	"./ko": 303,
	"./ko.js": 303,
	"./ky": 304,
	"./ky.js": 304,
	"./lb": 305,
	"./lb.js": 305,
	"./lo": 306,
	"./lo.js": 306,
	"./lt": 307,
	"./lt.js": 307,
	"./lv": 308,
	"./lv.js": 308,
	"./me": 309,
	"./me.js": 309,
	"./mi": 310,
	"./mi.js": 310,
	"./mk": 311,
	"./mk.js": 311,
	"./ml": 312,
	"./ml.js": 312,
	"./mr": 313,
	"./mr.js": 313,
	"./ms": 314,
	"./ms-my": 315,
	"./ms-my.js": 315,
	"./ms.js": 314,
	"./my": 316,
	"./my.js": 316,
	"./nb": 317,
	"./nb.js": 317,
	"./ne": 318,
	"./ne.js": 318,
	"./nl": 319,
	"./nl-be": 320,
	"./nl-be.js": 320,
	"./nl.js": 319,
	"./nn": 321,
	"./nn.js": 321,
	"./pa-in": 322,
	"./pa-in.js": 322,
	"./pl": 323,
	"./pl.js": 323,
	"./pt": 324,
	"./pt-br": 325,
	"./pt-br.js": 325,
	"./pt.js": 324,
	"./ro": 326,
	"./ro.js": 326,
	"./ru": 327,
	"./ru.js": 327,
	"./sd": 328,
	"./sd.js": 328,
	"./se": 329,
	"./se.js": 329,
	"./si": 330,
	"./si.js": 330,
	"./sk": 331,
	"./sk.js": 331,
	"./sl": 332,
	"./sl.js": 332,
	"./sq": 333,
	"./sq.js": 333,
	"./sr": 334,
	"./sr-cyrl": 335,
	"./sr-cyrl.js": 335,
	"./sr.js": 334,
	"./ss": 336,
	"./ss.js": 336,
	"./sv": 337,
	"./sv.js": 337,
	"./sw": 338,
	"./sw.js": 338,
	"./ta": 339,
	"./ta.js": 339,
	"./te": 340,
	"./te.js": 340,
	"./tet": 341,
	"./tet.js": 341,
	"./th": 342,
	"./th.js": 342,
	"./tl-ph": 343,
	"./tl-ph.js": 343,
	"./tlh": 344,
	"./tlh.js": 344,
	"./tr": 345,
	"./tr.js": 345,
	"./tzl": 346,
	"./tzl.js": 346,
	"./tzm": 347,
	"./tzm-latn": 348,
	"./tzm-latn.js": 348,
	"./tzm.js": 347,
	"./uk": 349,
	"./uk.js": 349,
	"./ur": 350,
	"./ur.js": 350,
	"./uz": 351,
	"./uz-latn": 352,
	"./uz-latn.js": 352,
	"./uz.js": 351,
	"./vi": 353,
	"./vi.js": 353,
	"./x-pseudo": 354,
	"./x-pseudo.js": 354,
	"./yo": 355,
	"./yo.js": 355,
	"./zh-cn": 356,
	"./zh-cn.js": 356,
	"./zh-hk": 357,
	"./zh-hk.js": 357,
	"./zh-tw": 358,
	"./zh-tw.js": 358
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 504;

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_common_util__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BackgroundPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var BackgroundPipe = (function () {
    /**
     *
     */
    function BackgroundPipe(utilProvider) {
        this.utilProvider = utilProvider;
    }
    /**
     * Takes a value and makes it lowercase.
     */
    BackgroundPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var url = "background: url(" + value + ") center center / cover no-repeat;";
        return this.utilProvider.bypassSecurityTrustStyle(url);
    };
    BackgroundPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'background',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_common_util__["a" /* UtilProvider */]])
    ], BackgroundPipe);
    return BackgroundPipe;
}());

//# sourceMappingURL=background.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyModeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyModeDirective = (function () {
    function MyModeDirective(el) {
        this.el = el;
        this.setClass(this.option);
    }
    Object.defineProperty(MyModeDirective.prototype, "myMode", {
        set: function (option) {
            this.setClass(option);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MyModeDirective.prototype.setClass = function (option) {
        if (option) {
            this.el.nativeElement.classList.remove(option.old); //移除旧类名
            this.el.nativeElement.classList.add(option.new); //添加新类名
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('myMode'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MyModeDirective.prototype, "myMode", null);
    MyModeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[myMode]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], MyModeDirective);
    return MyModeDirective;
}());

//# sourceMappingURL=my-mode.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFromLeftEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalFromLeftLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalFromRightEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalFromRightLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ModalFromTopEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ModalFromTopLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ModalScaleEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ModalScaleLeave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * write by IT_晴天（woodstream)
 */
var ModalFromLeftEnter = (function (_super) {
    __extends(ModalFromLeftEnter, _super);
    function ModalFromLeftEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromLeftEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'z-index': 0, 'opacity': 0.3, 'visibility': 'visible' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateX(-100%)', 'translateX(0)');
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-content.content'));
        contentWrapper.beforeStyles({ 'width': '80%' });
        this
            .element(this.enteringView.pageRef())
            .duration(300)
            .easing('ease')
            .add(backdrop)
            .add(wrapper)
            .add(contentWrapper);
    };
    return ModalFromLeftEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* PageTransition */]));

var ModalFromLeftLeave = (function (_super) {
    __extends(ModalFromLeftLeave, _super);
    function ModalFromLeftLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromLeftLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'visibility': 'hidden' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateX(0)', 'translateX(-100%)');
        this
            .element(this.leavingView.pageRef())
            .duration(300)
            .easing('ease')
            .add(backdrop)
            .add(wrapper);
    };
    return ModalFromLeftLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* PageTransition */]));

var ModalFromRightEnter = (function (_super) {
    __extends(ModalFromRightEnter, _super);
    function ModalFromRightEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromRightEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'z-index': 0, 'opacity': 0.3, 'visibility': 'visible' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateX(100%)', 'translateX(20%)');
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-content.content'));
        contentWrapper.beforeStyles({ 'width': '80%' });
        this
            .element(this.enteringView.pageRef())
            .duration(300)
            .easing('ease')
            .add(backdrop)
            .add(wrapper)
            .add(contentWrapper);
    };
    return ModalFromRightEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* PageTransition */]));

var ModalFromRightLeave = (function (_super) {
    __extends(ModalFromRightLeave, _super);
    function ModalFromRightLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromRightLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'visibility': 'hidden' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateX(20%)', 'translateX(100%)');
        this
            .element(this.leavingView.pageRef())
            .duration(300)
            .easing('ease')
            .add(backdrop)
            .add(wrapper);
    };
    return ModalFromRightLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* PageTransition */]));

var ModalFromTopEnter = (function (_super) {
    __extends(ModalFromTopEnter, _super);
    function ModalFromTopEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromTopEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'z-index': 0, 'opacity': 0.3, 'visibility': 'visible' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateY(-100%)', 'translateY(0)');
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-content.content'));
        contentWrapper.beforeStyles({ 'height': '60%' });
        this
            .element(this.enteringView.pageRef())
            .duration(300)
            .easing('ease')
            .add(backdrop)
            .add(wrapper)
            .add(contentWrapper);
    };
    return ModalFromTopEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* PageTransition */]));

var ModalFromTopLeave = (function (_super) {
    __extends(ModalFromTopLeave, _super);
    function ModalFromTopLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromTopLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'visibility': 'hidden' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateY(0)', 'translateY(-100%)');
        this
            .element(this.leavingView.pageRef())
            .duration(300)
            .easing('ease')
            .add(backdrop)
            .add(wrapper);
    };
    return ModalFromTopLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* PageTransition */]));

var ModalScaleEnter = (function (_super) {
    __extends(ModalScaleEnter, _super);
    function ModalScaleEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'scale(0)', 'scale(1)');
        this
            .element(this.enteringView.pageRef())
            .duration(400)
            .easing('ease')
            .add(wrapper);
    };
    return ModalScaleEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* PageTransition */]));

var ModalScaleLeave = (function (_super) {
    __extends(ModalScaleLeave, _super);
    function ModalScaleLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'scale(1)', 'scale(0)');
        this
            .element(this.leavingView.pageRef())
            .duration(400)
            .easing('ease')
            .add(wrapper);
    };
    return ModalScaleLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* PageTransition */]));

//# sourceMappingURL=modal-transitions.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map