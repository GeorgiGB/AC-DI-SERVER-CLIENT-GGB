const routes = [{
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
        path: "",
        redirect: "login"
      }, {
        path: "login",
        component: () => import("pages/Login.vue")
      },
      {
        path: "registrarse",
        component: () => import("pages/Register.vue")
      },
      {
        path: "aboutme",
        component: () => import("pages/Aboutme.vue")
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
