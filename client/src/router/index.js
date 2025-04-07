import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.view.vue'
import RegisterView from '@/views/auth/Register.view.vue';
import ProfileView from '@/views/Profile.view.vue';
// import TestView from '@/views/Test.view.vue';
import LoginView from '@/views/auth/Login.view.vue';
import CoursesView from '@/views/Courses.view.vue';
import HelpView from '@/views/Help.view.vue';
import TestsView from '@/views/Tests.view.vue';
import UserPanelView from '@/views/UserPanel.view.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'дев.школа',
    },
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'авторизация',
    },
    component: LoginView,
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {
      title: 'регистрация',
    },
    component: RegisterView,
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: 'профиль',
    },
    component: ProfileView,
  },
  // {
  //   path: '/test-train',
  //   name: 'test-train',
  //   meta: {
  //     title: 'тестирования',
  //   },
  //   component: TestView,
  // },
  {
    path: '/courses',
    name: 'courses',
    meta: {
      title: 'курсы',
    },
    component: CoursesView,
  },
  {
    path: '/help',
    name: 'help',
    meta: {
      title: 'поддержка',
    },
    component: HelpView,
  },
  {
    path: '/tests',
    name: 'tests',
    meta: {
      title: 'тесты'
    },
    component: TestsView
  },
  {
    path: '/user-panel',
    name: 'user-panel',
    meta: {
      title: 'панель пользователя'
    },
    component: UserPanelView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) =>{
  document.title = to.meta.title;
  next();
});

export default router