"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var StoreView_vue_1 = require("../views/StoreView.vue");
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: StoreView_vue_1.default,
        },
        {
            path: '/map',
            name: 'map',
            component: function () { return Promise.resolve().then(function () { return require('../views/MapView.vue'); }); },
        },
        {
            path: '/store',
            name: 'store',
            component: function () { return Promise.resolve().then(function () { return require('../views/StoreView.vue'); }); },
        },
        {
            path: '/settings',
            name: 'settings',
            component: function () { return Promise.resolve().then(function () { return require('../views/SettingsView.vue'); }); },
        },
        {
            path: '/settings/rewards',
            name: 'rewards',
            component: function () { return Promise.resolve().then(function () { return require('../views/RewardsHistoryView.vue'); }); },
        },
    ],
});
exports.default = router;
