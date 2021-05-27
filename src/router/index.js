import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/layouts/Dashboard";
import Player from "@/layouts/Player";
import Search from "@/views/Search";
import PlayerController from "@/views/PlayerController";
import RaspiController from "@/views/RaspiController";
import PlayerContainer from "@/components/Player/PlayerContainer";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/",
        component: Search,
      },
      {
        path: "/controller",
        component: PlayerController,
      },
      {
        path: "/raspi",
        component: RaspiController,
      },
    ],
  },
  {
    path: "/player",
    name: "Player",
    component: Player,
    children: [
      {
        path: "/",
        component: PlayerContainer,
      },
    ],
  },
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
