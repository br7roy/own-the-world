module.exports = [{
    name: '业务',
    icon: 'el-icon-message',
    id: '1',
    sub: [{
        idx: 1,
        name: '客流工具',
        componentName: 'flow_tool',
        icon: 'el-icon-info'
    }, {
        idx: 2,
        name: '待编辑',
        componentName: 'wait_edit',
        icon: 'el-icon-edit'
    }]
}, {
    name: '集群',
    icon: 'el-icon-star-on',
    id: '2',
    sub: [{
        idx: 3,
        name: '队列抢占',
        componentName: 'balance',
        icon: 'el-icon-refresh'
    }, {
        idx: 4,
        name: '任务查看',
        componentName: 'task_query',
        icon: 'el-icon-view'
    }]
}]
