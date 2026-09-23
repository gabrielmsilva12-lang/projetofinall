import { Routes } from '@angular/router';

import { Home } from './home/home';
import { English } from './english/english';
import { Tutorials } from './tutorials/tutorials';
import { Privacy } from './privacy/privacy';
import { Login } from './login/login';
import { Progress } from './progress/progress';
import { Premium } from './premium/premium';
import { Register } from './register/register';
import { Quizz } from './quizz/quizz';

export const routes: Routes = [

    {
  path: '',
  component: Home
},

  {
    path: 'english',
    component: English
  },

  {
    path: 'tutorials',
    component: Tutorials
  },

  {
    path: 'privacy',
    component: Privacy
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'progress',
    component: Progress
  },

  {
    path: 'quiz',
    component: Quizz
  },

  {
    path: 'premium',
    component: Premium
  },

  {
    path: 'register',
    component: Register
  }

];