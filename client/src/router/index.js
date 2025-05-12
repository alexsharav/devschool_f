import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/mainPages/Home.view.vue'
import RegisterView from '@/views/auth/Register.view.vue';
import ProfileView from '@/views/userPages/Profile.view.vue';
import LoginView from '@/views/auth/Login.view.vue';
import CoursesView from '@/views/mainPages/Courses.view.vue';
import HelpView from '@/views/mainPages/Help.view.vue';
import TestsView from '@/views/mainPages/Tests.view.vue';
import UserPanelView from '@/views/userPages/UserPanel.view.vue';

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

const context = require.context('@/views/courses/', true, /Course\.vue$/);
const lessonPages = require.context('@/views/courses/', true, /^\.\/[^/]+\/chapters\/[0-9]+\/[0-9.]+\.vue$/);

context.keys().forEach(
  (key) => {
    const match = key.match(/^\.\/([^/]+)\/([^/]+Course)\.vue$/);
    const courseFolder = match[1];
    const component = context(key).default;

    routes.push(
      {
        path: `/courses/${courseFolder}`,
        name: `${courseFolder}-course`,
        meta: {
          title: `${courseFolder} | Список курса`
        },
        component,
      }
    );
  }
);

lessonPages.keys().forEach(
  (key) => {
    const match = key.match(/^\.\/([^/]+)\/chapters\/([0-9]+)\/([0-9.]+)\.vue$/);
    const [_, courseFolder, chapter, lesson] = match;
    const component = lessonPages(key).default;

    routes.push(
      {
        path: `/courses/${courseFolder}/${chapter}/${lesson}`,
        name: `${courseFolder}-${chapter}-${lesson}`,
        meta: { 
          title: `${courseFolder} | Урок ${lesson}`
        },
        component,
      }
    );
  }
);

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) =>{
  document.title = to.meta.title;
  next();
});

export default router