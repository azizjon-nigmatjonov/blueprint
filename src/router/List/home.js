import UsersPage from '../../views/Home/Users/index.vue'
export const HomeRouteList = [
  {
    path: 'home',
    name: "Home page",
    parent: 'home',
    component: () => import("../..//views/Home/index.vue"),
    meta: { authRequired: true },
    data: { sidebar: false },
  },
  {
    path: 'users',
    parent: 'home',
    name: "Users page",
    component: () => UsersPage,
    meta: { authRequired: true },
    data: { sidebar: true },
  },
];
