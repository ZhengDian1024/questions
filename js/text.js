/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Created by 郑典 on 2017/5/18.
 */
Mock.mock('/getData', {
    'data':{
        name: "前端笔试题",
        introduce: "布姆电竞主要业务包括布姆视频，布姆电竞学院，教学内容覆盖英雄联盟，守望先锋，王者荣耀等当下热门的电竞游戏。",
        currentPage:"1",
        quote:"666",
        questions: [
            {type: 'text',name:"name1", question: " 常用那几种浏览器测试？有哪些内核(Layout Engine)?"},
            {
                type: 'singleSelection',
                question: ' DOM怎样添加节点?',
                name:"name2",
                answers: [{answer: 'appendChild'}, {answer: 'getElementsByTagName'}, {answer: 'createTextNode'}, {answer: 'createDocumentFragment'}]
            },
            {
                type: 'MultipleSelection',
                name:"name3",
                question: '  null和undefined的区别?',
                answers: [{answer: '变量被声明了，但没有赋值时，就等于undefined。'}, {answer: '调用函数时，应该提供的参数没有提供，该参数等于undefined。'}, {answer: ' 作为函数的参数，表示该函数的参数不是对象。'}, {answer: '创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。'}]
            },
            {
                type: 'custom',
                question: '  null和undefined的区别?',
                name:"name4",
                hasAnswers: false,
                answers: [{type: 'text',name:"name5", question: " 常用那几种浏览器测试？有哪些内核(Layout Engine)?"}, {
                    type: 'MultipleSelection',
                    name:"name6",
                    question: '  null和undefined的区别?',
                    answers: [{answer: '变量被声明了，但没有赋值时，就等于undefined。'}, {answer: '调用函数时，应该提供的参数没有提供，该参数等于undefined。'}, {answer: ' 作为函数的参数，表示该函数的参数不是对象。'}, {answer: '创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。'}]
                }]
            }
        ]
    }
});

qst.controller("indexCtrl",function($scope,$http){
    $http.get("/getData").success(function(data){
        console.log(data);
        $scope.data=data.data;
        $scope.list=data.data.questions;
        $scope.submitForm=function(){
            alert($("#questionForm").serialize());
        }
    });
});

/***/ })
/******/ ]);