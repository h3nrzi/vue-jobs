import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobDetailsView from "@/views/JobDetailsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobsView from "@/views/JobsView.vue";
import JobAddView from "@/views/JobAddView.vue";
import JobEditView from "@/views/JobEditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/add",
      name: "jobAdd",
      component: JobAddView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobDetailsView,
    },
    {
      path: "/jobs/:id/edit",
      name: "jobEdit",
      component: JobEditView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
