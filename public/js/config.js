System.config({
    "bundles": {
        "app.js": [
            "node_modules/@angular/common//bundles/common.umd.js",
            "node_modules/@angular/compiler//bundles/compiler.umd.js",
            "node_modules/@angular/core//bundles/core.umd.js",
            "node_modules/@angular/platform-browser-dynamic//bundles/platform-browser-dynamic.umd.js",
            "node_modules/@angular/platform-browser//bundles/platform-browser.umd.js",
            "node_modules/rxjs/Observable.js",
            "node_modules/rxjs/Observer.js",
            "node_modules/rxjs/Subject.js",
            "node_modules/rxjs/SubjectSubscription.js",
            "node_modules/rxjs/Subscriber.js",
            "node_modules/rxjs/Subscription.js",
            "node_modules/rxjs/observable/PromiseObservable.js",
            "node_modules/rxjs/operator/toPromise.js",
            "node_modules/rxjs/symbol/observable.js",
            "node_modules/rxjs/symbol/rxSubscriber.js",
            "node_modules/rxjs/util/ObjectUnsubscribedError.js",
            "node_modules/rxjs/util/UnsubscriptionError.js",
            "node_modules/rxjs/util/errorObject.js",
            "node_modules/rxjs/util/isArray.js",
            "node_modules/rxjs/util/isFunction.js",
            "node_modules/rxjs/util/isObject.js",
            "node_modules/rxjs/util/root.js",
            "node_modules/rxjs/util/throwError.js",
            "node_modules/rxjs/util/toSubscriber.js",
            "node_modules/rxjs/util/tryCatch.js",
            "public/js/temp/app.component.js",
            "public/js/temp/main.js"
        ]
    },
    "map": {
        "@angular": "node_modules/@angular",
        "angular2-in-memory-web-api": "node_modules/angular2-in-memory-web-api",
        "app": "public/js",
        "rxjs": "node_modules/rxjs"
    },
    "packages": {
        "@angular/common": {
            "defaultExtension": "js",
            "main": "/bundles/common.umd.js"
        },
        "@angular/compiler": {
            "defaultExtension": "js",
            "main": "/bundles/compiler.umd.js"
        },
        "@angular/core": {
            "defaultExtension": "js",
            "main": "/bundles/core.umd.js"
        },
        "@angular/forms": {
            "defaultExtension": "js",
            "main": "/bundles/forms.umd.js"
        },
        "@angular/http": {
            "defaultExtension": "js",
            "main": "/bundles/http.umd.js"
        },
        "@angular/platform-browser": {
            "defaultExtension": "js",
            "main": "/bundles/platform-browser.umd.js"
        },
        "@angular/platform-browser-dynamic": {
            "defaultExtension": "js",
            "main": "/bundles/platform-browser-dynamic.umd.js"
        },
        "@angular/router": {
            "defaultExtension": "js",
            "main": "/bundles/router.umd.js"
        },
        "@angular/router-deprecated": {
            "defaultExtension": "js",
            "main": "/bundles/router-deprecated.umd.js"
        },
        "@angular/upgrade": {
            "defaultExtension": "js",
            "main": "/bundles/upgrade.umd.js"
        },
        "angular2-in-memory-web-api": {
            "defaultExtension": "js",
            "main": "index.js"
        },
        "app": {
            "defaultExtension": "js",
            "main": "app.js"
        },
        "rxjs": {
            "defaultExtension": "js"
        }
    }
});