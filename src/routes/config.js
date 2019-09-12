export default {
    menus: [
        // 菜单相关路由
        { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/app/table',
            title: '表格',
            icon: 'copy',
            subs: [
                { key: '/app/table/basicTable', title: '基础表格', component: 'DemoTable' }
            ],
        },
        {
            key: '/app/cssModule',
            title: 'cssModule',
            icon: 'star',
            component: 'Cssmodule',
        }
    ],
    others: [], // 非菜单相关路由
};
