export default [
  {
    path: '/',
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/Index.vue'),
      },
      {
        path: '/pages/blank',
        name: 'Blank',
        component: () => import('@/views/pages/Blank.vue'),
      },
      {
        path: '/pages/book',
        name: 'Book',
        component: () => import('@/views/pages/Book.vue'),
      },
      {
        path: '/pages/customer',
        name: 'Customer',
        component: () => import('@/views/pages/Customer.vue'),
      },
      {
        path: '/pages/category',
        name: 'Category',
        component: () => import('@/views/pages/Category.vue'),
      },
      {
        path: '/pages/user',
        name: 'User',
        component: () => import('@/views/pages/User.vue'),
      },
      {
        path: '/pages/orders',
        name: 'Orders',
        component: () => import('@/views/pages/Orders.vue'),
      },
      {
        path: '/pages/review',
        name: 'Review',
        component: () => import('@/views/pages/Review.vue'),
      },
      {
        path: '/pages/author',
        name: 'Author',
        component: () => import('@/views/pages/Author.vue'),
      },
      {
        path: '/pages/orders_detail',
        name: 'Orders_detail',
        component: () => import('@/views/pages/Orders_detail.vue'),
      },

    ],
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/layouts/AuthenticationLayout.vue'),
    children: [
      {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue'),
      },
      {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register.vue'),
      },
      {
        path: '/auth/forgot-password',
        name: 'ForgotPassword',
        component: () => import('@/views/auth/ForgotPassword.vue'),
      },
      {
        path: '/auth/reset-password',
        name: 'ResetPassword',
        component: () => import('@/views/auth/ResetPassword.vue'),
      },
      {
        path: '/auth/confirm-password',
        name: 'ConfirmPassword',
        component: () => import('@/views/auth/ConfirmPassword.vue'),
      },
      {
        path: '/auth/verify-email',
        name: 'VerifyEmail',
        component: () => import('@/views/auth/VerifyEmail.vue'),
      },
    ],
  },
]
