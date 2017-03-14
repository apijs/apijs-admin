/**
 * @file 路由
 * @author xieyaowu <fe.xiaowu@gmail.com>
 */

import Index from './components/index';
import List from './components/list';
import Data from './components/data';

export default [
    {
        name: 'Index',
        path: '/',
        component: Index
    },
    {
        name: 'ApiList',
        path: '/list',
        component: List
    },
    {
        name: 'ApiEdit',
        path: '/list/data/:id',
        component: Data
    },
    {
        name: 'ApiAdd',
        path: '/list/add',
        component: Data,
        meta: {
            test: 1
        }
    }
];
