/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("let vanillaTabs = __webpack_require__(/*! ./modules/vanilla-tabs */ \"./src/js/modules/vanilla-tabs.js\");\nlet showMarkers = __webpack_require__(/*! ./modules/list-markers */ \"./src/js/modules/list-markers.js\");\nlet propertyOutput = __webpack_require__(/*! ./modules/property-output */ \"./src/js/modules/property-output.js\");\n\nwindow.onload = function () {\n    const iconMenu = document.querySelector('.menu__icon');\n    const bodyMenu = document.querySelector('.header__menu');\n\n    const toggleMenu = () => {\n        document.body.classList.toggle('lock');\n        bodyMenu.classList.toggle('active');\n        iconMenu.classList.toggle('active');\n    }\n\n    if (iconMenu) {\n        iconMenu.addEventListener('click', e => {\n            e.stopPropagation();\n            toggleMenu();\n        });\n        document.addEventListener('click', e => {\n            let target = e.target;\n            let itsMenu = target === bodyMenu || bodyMenu.contains(target);\n            let itsIconMenu = target === iconMenu;\n            let menuIsActive = bodyMenu.classList.contains('active');\n            if (!itsMenu && !itsIconMenu && menuIsActive) {\n                bodyMenu.classList.toggle('active');\n                iconMenu.classList.toggle('active');\n            }\n        });\n    }\n\n    const tabs = new vanillaTabs({\n        'selector': '#tabs-a',\n        'type': 'horizontal',\n        'responsiveBreak': 1919,\n        'activeIndex': 0\n    });\n\n    showMarkers();\n    propertyOutput();\n}\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/list-markers.js":
/*!****************************************!*\
  !*** ./src/js/modules/list-markers.js ***!
  \****************************************/
/***/ (function(module) {

eval("module.exports = () => {\n    let tabList = document.querySelectorAll('.tab__list');\n\n    tabList.forEach(tab => {\n        if (tab.offsetParent.dataset.title === 'Горный велосипед' || tab.offsetParent.offsetParent.dataset.title === 'Горный велосипед') {\n            // console.log(tab.offsetParent.dataset.title);\n            // console.log(tab.offsetParent.offsetParent.dataset.title);\n            let itemsList = tab.querySelectorAll('li');\n            itemsList.forEach(item => {\n                item.classList.add('mountain');\n            });\n        } else {\n            let itemsList = tab.querySelectorAll('li');\n            itemsList.forEach(item => {\n                item.classList.add('women');\n            });\n        }\n    });\n}\n\n\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/list-markers.js?");

/***/ }),

/***/ "./src/js/modules/property-output.js":
/*!*******************************************!*\
  !*** ./src/js/modules/property-output.js ***!
  \*******************************************/
/***/ (function(module) {

eval("module.exports = () => {\n    let tabCharact = document.querySelectorAll('.tab__charact');\n    if (tabCharact) {\n        tabCharact.forEach(tab => {\n            let textareaField = tab.querySelector('.textarea');\n            let textareaBtn = tab.querySelector('#btn-textarea');\n            let tabList = tab.querySelector('.tab__list');\n            let okBtn = tab.querySelector('#btn-ok');\n            let removeBtn = tab.querySelector('#btn-cancel');\n\n            let tabItemList = tab.querySelectorAll('.tab__item');\n            let arrTabItemList = [...tabItemList];\n            let newArrTabItemList = [];\n\n            textareaBtn.addEventListener('click', () => {\n                if (textareaField.value !== '') {\n                    let newItemList = document.createElement('li');\n                    newItemList.innerHTML = textareaField.value;\n                    tabList.append(newItemList);\n                    if (tabList.offsetParent.dataset.title === 'Горный велосипед' || tabList.offsetParent.offsetParent.dataset.title === 'Горный велосипед') {\n                        newItemList.className = 'tab__item mountain';\n                    } else {\n                        newItemList.className = 'tab__item women';\n                    }\n                    newArrTabItemList.push(newItemList);\n                    // console.log(newArrTabItemList);\n                    textareaField.value = '';\n                }\n            });\n\n            okBtn.addEventListener('click', () => {\n                arrTabItemList = arrTabItemList.concat(newArrTabItemList);\n                // console.log(arrTabItemList);\n                newArrTabItemList = [];\n                okBtn.classList.add('disabled');\n                removeBtn.classList.add('disabled');\n            });\n\n            removeBtn.addEventListener('click', () => {\n                newArrTabItemList.forEach(elem => {\n                    elem.remove();\n                })\n                newArrTabItemList = [];\n                textareaField.value = '';\n                okBtn.classList.add('disabled');\n                removeBtn.classList.add('disabled');\n            });\n\n            textareaField.addEventListener('input', () => {\n                okBtn.classList.remove('disabled');\n                removeBtn.classList.remove('disabled');\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/property-output.js?");

/***/ }),

/***/ "./src/js/modules/vanilla-tabs.js":
/*!****************************************!*\
  !*** ./src/js/modules/vanilla-tabs.js ***!
  \****************************************/
/***/ (function(module) {

eval("class VanillaTabs {\n    constructor(opts) {\n        const DEFAULTS = {\n            'selector': '.tabs',\n            'type': 'horizontal',\n            'responsiveBreak': 1919,\n            'activeIndex': 0\n        }\n        this.options = Object.assign(DEFAULTS, opts);\n        this.elems = document.querySelectorAll(this.options.selector);\n        // skip building tabs if they were already initialized\n        this.skipIfInitialized = (tabsElem) => {\n            // skip element if already initialized\n            if (tabsElem.classList.contains('tabs__initialized')) {\n                return;\n            }\n        }\n        this.buildUI();\n        this.handleNavigation();\n        this.handleResponsive();\n    }\n\n    // initialize the UI Elements\n    buildUI() {\n        let tabs = this.elems;\n        // walk on all tabs on the page\n        tabs.forEach((el, i) => {\n\n            let tabsElem = el,\n                childNodes = tabsElem.childNodes,\n                tabsTitles = [],\n                tabsStyle = this.options.type;\n            this.skipIfInitialized(tabsElem);\n            tabsElem.classList.add('style__' + this.options.type);\n            tabsElem.classList.add('tabs__initialized');\n            for (let i = 0; i < childNodes.length; i++) {\n                let tabItem = childNodes[i];\n                if (tabItem.nodeType != Node.TEXT_NODE) {\n                    // add tab__content CSS class\n                    tabItem.classList.add('tabs__content');\n                    // grab tab title from data attribute\n                    let tabTitle = tabItem.dataset.title ? tabItem.dataset.title : '';\n                    tabsTitles.push(tabTitle);\n                    // wrap tab content\n                    let tabContent = tabItem.innerHTML;\n                    tabItem.innerHTML = '<div class=\"tabs__content_wrapper\">' + tabContent + '</div>';\n                    // insert nav link for accordion navigation\n                    tabItem.insertAdjacentHTML('afterbegin', '<a class=\"tabs__nav_link\">' + tabTitle + '<span class=\"tabs__img\"><img src=\"./img/arrow.webp\" /></span></a>');\n                    // tabItem.insertAdjacentHTML('afterbegin', '<a class=\"tabs__nav_link\">' + tabTitle + '</a>');\n                }\n            }\n            // create horizontal / vertical tabs navigation elements\n            let navElemsHTML = '';\n            tabsTitles.forEach((title) => {\n                navElemsHTML = navElemsHTML + '<a class=\"tabs__nav_link\">' + title + '</a>';\n            });\n            tabsElem.insertAdjacentHTML('afterbegin', '<li class=\"tabs__nav\">' + navElemsHTML + '</li>');\n            // set initial active tab\n            let activeTabIndex = Number(this.options.activeIndex);\n            // validate active tab index. but, you can specify -1 for accordion tabs to make all of them closed by defaults\n            if (tabsStyle != 'accordion' && activeTabIndex != -1) {\n                if (activeTabIndex > (tabsTitles.length - 1)) {\n                    console.warn('VANILLA TABS: Active tab number from settings is bigger than tabs count. Please remember, that index starts from Zero! To avoid crashes, activeIndex option was reverted to 0.');\n                    activeTabIndex = 0;\n                }\n                tabsElem.querySelectorAll('.tabs__nav > .tabs__nav_link')[activeTabIndex].classList.add('is__active');\n                tabsElem.querySelectorAll('.tabs__content')[activeTabIndex].classList.add('is__active');\n                tabsElem.querySelectorAll('.tabs__content > .tabs__nav_link')[activeTabIndex].classList.add('is__active');\n                tabsElem.querySelectorAll('.tabs__content > .tabs__nav_link > .tabs__img')[activeTabIndex].classList.add('is__active'); //\n            }\n        });\n    }\n\n    // navigation: assign click events\n    handleNavigation() {\n        let tabs = this.elems,\n            tabsStyle = this.options.type;\n        // walk on all tabs on the page\n        tabs.forEach((el, i) => {\n            let tabsElem = el;\n            this.skipIfInitialized(tabsElem);\n            tabsElem.addEventListener('click', function (e) {\n                if (e.target && e.target.classList.contains('tabs__nav_link')) {\n                    e.preventDefault();\n                    let activeTabIndex;\n                    // if we click on main navigation link\n                    if (e.target.parentElement.classList == 'tabs__nav') {\n                        activeTabIndex = Array.prototype.slice.call(e.target.parentElement.children).indexOf(e.target);\n                        // if we click on accordion nav link\n                    } else {\n                        activeTabIndex = Array.prototype.slice.call(e.target.parentElement.parentElement.children).indexOf(e.target.parentElement) - 1;\n                    }\n                    let tabsContent = tabsElem.getElementsByClassName('tabs__content'),\n                        tabsImg = tabsElem.getElementsByClassName('tabs__img'), //\n                        mainNavLinks = tabsElem.querySelectorAll('.tabs__nav > .tabs__nav_link'),\n                        accordionNavLinks = tabsElem.querySelectorAll('.tabs__content > .tabs__nav_link');\n                    // toggle accordion panel\n                    if ((tabsStyle == 'accordion' || tabsElem.classList.contains('is__responsive')) && e.target.classList.contains('is__active')) {\n                        tabsContent[activeTabIndex].classList.remove('is__active');\n                        tabsImg[activeTabIndex].classList.remove('is__active');  //\n                        mainNavLinks[activeTabIndex].classList.remove('is__active');\n                        accordionNavLinks[activeTabIndex].classList.remove('is__active');\n                        return;\n                    }\n                    // remove active class for inactive tabs\n                    for (let i = 0; i < tabsContent.length; i++) {\n                        tabsContent[i].classList.remove('is__active');\n                        tabsImg[i].classList.remove('is__active'); //\n                    }\n                    // add active class for a current (active) tab\n                    tabsContent[activeTabIndex].classList.add('is__active');\n                    tabsImg[activeTabIndex].classList.add('is__active'); //\n                    // add active classes and remove inactive for main nav links\n                    mainNavLinks.forEach((el) => {\n                        el.classList.remove('is__active');\n                    });\n                    mainNavLinks[activeTabIndex].classList.add('is__active');\n\n                    // add active classes and remove inactive for accordion nav links\n                    accordionNavLinks.forEach((el) => {\n                        el.classList.remove('is__active');\n                    });\n                    accordionNavLinks[activeTabIndex].classList.add('is__active');\n                }\n            });\n        });\n    }\n\n    // responsive: tabs to accordion\n    handleResponsive() {\n        let tabs = this.elems,\n            responsiveClassName = 'is__responsive',\n            tabsStyle = this.options.type;\n\n        window.addEventListener('resize', () => {\n\n            // walk on all tabs on the page\n            tabs.forEach((el, i) => {\n\n                let tabsElem = el,\n                    tabsContent = tabsElem.getElementsByClassName('tabs__content'),\n                    mainNavLinks = tabsElem.querySelectorAll('.tabs__nav > .tabs__nav_link'),\n                    accordionNavLinks = tabsElem.querySelectorAll('.tabs__content > .tabs__nav_link');\n\n                this.skipIfInitialized(tabsElem);\n\n                if (window.innerWidth > Number(this.options.responsiveBreak)) {\n\n                    tabsElem.classList.remove(responsiveClassName);\n\n                    if (tabsStyle != 'accordion') {\n                        // set first active tab if all of tabs were closed in accordion mode\n                        let openTabs = tabsElem.querySelectorAll('.tabs__nav_link.is__active');\n                        if (openTabs.length == 0) {\n                            tabsContent[0].classList.add('is__active');\n                            mainNavLinks[0].classList.add('is__active');\n                            accordionNavLinks[0].classList.add('is__active');\n                        }\n                    }\n\n                } else {\n\n                    tabsElem.classList.add(responsiveClassName);\n                }\n            });\n        });\n        // manually fire resize event\n        window.dispatchEvent(new Event('resize'));\n    }\n}\n\nmodule.exports = VanillaTabs;\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/vanilla-tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;