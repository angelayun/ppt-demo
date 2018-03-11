<!-- page_number: true -->
# Vue Admin Template

##### a vue2.0 minimal admin template
###### Created by [PanJiaChen](https://github.com/PanJiaChen)

[minimal](https://github.com/PanJiaChen/vueAdmin-template) / [full](https://github.com/PanJiaChen/vue-element-admin)

---

# Basic Features:

+ Element UI
+ axios
+ iconfont
+ permission control
+ lint

---

# Folder Structure
```
├── build
├── config
├── src
│   ├── api
│   ├── assets
│   │   └── 404_images
│   ├── components
│   │   ├── Breadcrumb
│   │   ├── Hamburger
│   │   ├── ScrollBar
│   │   └── SvgIcon
│   ├── icons
│   │   └── svg
│   ├── router
```

---

```
│   ├── store
│   │   └── modules
│   ├── styles
│   ├── utils
│   └── views
│       ├── dashboard
│       ├── form
│       ├── layout
│       │   └── components
│       │       └── Sidebar
│       ├── login
│       ├── table
│       └── tree
└── static

28 directories

```

---


# What to add?

---


## What I added:
+ webpack resolve alias `'assets': path.resolve(__dirname, '../src/assets')`
+ complete the interceptors(loading / no loading, error hint / no error hint, pagination info, treat http status: 401...)
+ route naming convention (e.g. /mall/chooseTpl -> /views/mall/chooseTpl.vue)
+ generate menu accoiding to the **auths data** given by the api request
+ sso integrated (solve unauthorization at the response interceptor)
+ add 3 files to the root folder for deploying
+ 
	+ `nginx_app.conf`
	+ `start.sh`
	+ `Dockerfile`

---

## What I stole from full version:
+ router permission && generate menu by user roles [->for detail](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/store/modules/permission.js)
+ Multi-environment build [->for detail](https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading)

---

# How to get started?

+ vue-cli template [link](aaa)
+ Unfortunatly it doesn't support private repo like gitlab

---

# Thank you!