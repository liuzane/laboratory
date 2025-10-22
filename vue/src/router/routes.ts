const baseURL: string = "/vue";

const routes = [
  {
    path: baseURL + "/",
    name: "App",
    component: () => import("@/App.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // component: () => import("@/Home.vue"),
        component: () => import("@/Home.vue"),
      },
      {
        path: "foo",
        name: "Foo",
        component: () => import("@/components/Foo.vue"),
      },
      {
        path: "bar",
        name: "Bar",
        component: () => import("@/components/Bar.vue"),
      },
      {
        path: "interview",
        name: "Interview",
        component: () => import("@/components/Interview.vue"),
      },
    ]
  }
  // {
  //   path: baseURL + "/",
  //   name: "Home",
  //   // component: () => import("@/Home.vue"),
  //   component: () => import("@/Home.vue"),
  // },
  // {
  //   path: baseURL + "/foo",
  //   name: "Foo",
  //   component: () => import("@/components/Foo.vue"),
  // },
  // {
  //   path: baseURL + "/bar",
  //   name: "Bar",
  //   component: () => import("@/components/Bar.vue"),
  // },
  // {
  //   path: baseURL + "/interview",
  //   name: "Interview",
  //   component: () => import("@/components/Interview.vue"),
  // },
];

export default routes;