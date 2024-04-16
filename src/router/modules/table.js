/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  hidden: true,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '工厂',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      hidden: true,
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'DynamicTable',
      meta: { title: 'Dynamic Table' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: '生产进度日志' }
    },
    {
      path: 'inline-edit-table',
      hidden: true,
      component: () => import('@/views/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: 'Inline Edit' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: '产品' }
    }
  ]
}
export default tableRouter
