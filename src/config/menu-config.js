module.exports = [{
    name: '业务',
    icon: 'el-icon-message',
    id: '1',
    sub: [{
        name: '客流工具',
        componentName: 'flow_tool',
        icon: 'el-icon-info'
    }, {
        name: '待编辑',
        componentName: 'wait_edit',
        icon: 'el-icon-edit'
    }]
}, {
    name: '集群',
    icon: 'el-icon-star-on',
    id: '2',
    sub: [{
        name: '队列抢占',
        componentName: 'balance',
        icon: 'el-icon-refresh'
    }, {
        name: '任务查看',
        componentName: 'task_query',
        icon: 'el-icon-view'
    }]
}]
