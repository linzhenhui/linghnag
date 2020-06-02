import "babel-polyfill";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "Home",
            component: resolve => require(["../components/Home/index.vue"], resolve),
            meta: {
                businessName: ""
            }
        },
        {
            path: "/kaoyan",
            name: "kaoyan",
            component: resolve =>
                require(["../components/kaoyan/index.vue"], resolve),
            meta: {
                businessName: ""
            }
        },
        {
            path: "/xq",
            name: "xq",
            component: resolve => require(["../components/xq/index.vue"], resolve),
            meta: {
                businessName: ""
            }
        },
        {
            path: "/text",
            name: "text",
            component: resolve => require(["../components/Test.vue"], resolve),
            meta: {
                businessName: ""
            }
        }
    ]
});