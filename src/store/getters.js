const getters = {
  msg: state => state.sidebarx.msg,
  activeIndex: state => state.sidebarx.activeIndex,
  items: state => state.sidebarx.items,
  toggleShow: state => state.sidebarx.toggleShow
  // status: state => state.headerx.status,
  // health: state => state.headerx.health,
  // indexList: state => state.headerx.indexList,
  // githubUrl: state => state.headerx.githubUrl,
  // serverhost: state => state.headerx.serverHost,
  // statusStyleObject: state => state.headerx.statusStyleObject,
  // toggleTitle: state => state.toolsbarx.toggleTitle,
  // btnGroup: state => state.toolsbarx.btnGroup,
  // panelWidget: state => state.overviewx.panelWidget,
  // statsInfo: state => state.overviewx.statsInfo,
  // clusterInfo: state => state.overviewx.clusterInfo,
  // charts: state => state.overviewx.charts,
  // templateInfo: state => state.overviewx.templateInfo,
  // options: state => state.searchx.options,
  // result: state => state.searchx.result,
  // fields: state => state.searchx.fields,
  // showSpinner: state => state.searchx.showSpinner,
  // IndexTemplateList: state => state.overviewx.IndexTemplateList,
  // toggleMapping: state => state.mappingx.toggleMapping,
  // mappingInfo: state => state.mappingx.mappingInfo,
  // dslBody: state => state.toolsx.dslBody,
  // sqlBody: state => state.toolsx.sqlBody,
  // currentError: state => state.toolsx.currentError,
  // DeleteIndexError: state => state.headerx.DeleteIndexError,
  // DeleteIndexSuccess: state => state.headerx.DeleteIndexSuccess,
  // DeleteMappingError: state => state.mappingx.DeleteMappingError,
  // DeleteMappingSuccess: state => state.mappingx.DeleteMappingSuccess
}
export default getters

