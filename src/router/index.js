import { createRouter, createWebHistory } from "vue-router";
import { RouteList } from "./List";

function getPath(path, linked = {}) {
  let newPath = "/" + path;
  let childPath = "";
  if (linked?.parent) {
    newPath = "/" + linked.parent;
    childPath = `/${linked.parent}/${path}`;
  }

  return childPath ? childPath : newPath;
}

const List = RouteList.map((item) => {
  return {
    path: getPath(item.path),
    name: item.name,
    parent: item?.parent || "",
    component: item.component,
    meta: item.meta,
    data: item.data,
  };
});

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    meta: { authRequired: true },
    children: [
      {
        path: "/",
        redirect: "/home",
        meta: { authRequired: true },
      },
      ...List,
    ],
  },
];

function GetRoutes(list) {
  const arr = [];
  const newRoutes = [];
  for (let value of list) {
    let obj = {
      path: value.path,
      title: value.name,
      children: [],
      data: value.data ?? {},
    };

    if (!arr?.includes(value.path)) {
      newRoutes.push(obj);
      arr.push(value.path);
    }
  }

  localStorage.setItem("routes", JSON.stringify(newRoutes));
}

const handleRoutes = (callback, list = []) => {
  list.forEach((el) => {
    if (el.children) callback(el.children);
  });
};

handleRoutes(GetRoutes, routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "hash",
});

const DEFAULT_TITLE = "Demo project";
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
