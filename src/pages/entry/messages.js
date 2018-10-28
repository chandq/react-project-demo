import {defineMessages} from 'react-intl';

const messages = defineMessages({
  //概览
  overviewTotelRam: {
    id: 'overview.totel.ram',
    defaultMessage: '总内存',
  },
  overviewTotelStorageCapacity: {
    id: 'overview.totel.storage',
    defaultMessage: '总存储',
  },
  overviewCanUseStorageCapacity: {
    id: 'overview.use.storage',
    defaultMessage: '可用存储',
  },
  overviewRackType: {
    id: 'overview.rack.type',
    defaultMessage: '资源池类型',
  },
  overviewVirtualMachineUsed: {
    id: 'overview.vm.used',
    defaultMessage: '虚拟机使用',
  },
  overviewCompanyGe: {
    id: 'overview.company.ge',
    defaultMessage: '个',
  },
  severity: {
    id: 'severity',
    defaultMessage: '严重性',
  },
  all: {
    id: 'all',
    defaultMessage: '全部',
  },
  //数据中心层的物理机列表
  datacenterMchinesListRefresh: {
    id: 'datacenter.mchinesList.refresh',
    defaultMessage: '刷新',
  },
  datacenterMchinesListBatchOperation: {
    id: 'datacenter.mchinesList.batchOperation',
    defaultMessage: '批量操作',
  },
  //资源池层的操作
  rack: {
    id: 'rack',
    defaultMessage: '资源池',
  },
  rackEdit: {
    id: 'rack.edit',
    defaultMessage: '编辑资源池',
  },
  rackLoadBalancing: {
    id: 'rack.load.balancing',
    defaultMessage: '负载均衡',
  },
  rackBatchSetIpmi: {
    id: 'rack.batch.set.ipmi',
    defaultMessage: '批量设置唤醒参数',
  },
  rackBatchSetIpmiSuccess: {
    id: 'rack.batch.set.ipmi.success',
    defaultMessage: '批量设置唤醒参数成功',
  },
  rackBatchSetIpmiError: {
    id: 'rack.batch.set.ipmi.error',
    defaultMessage: '批量设置唤醒参数失败',
  },
  rackDelete: {
    id: 'rack.delete',
    defaultMessage: '删除资源池',
  },
  rackDeleteConfirm: {
    id: 'rack.delete.confirm',
    defaultMessage: '您确定要删除当前选中的资源池吗?',
  },
  rackDeleteSuccess: {
    id: 'rack.delete.success',
    defaultMessage: '删除资源池成功',
  },
  rackDeleteError: {
    id: 'rack.delete.error',
    defaultMessage: '删除资源池失败',
  },
  rackEditName: {
    id: 'rack.edit.name',
    defaultMessage: '资源池名称',
  },
  rackEditNameMessage: {
    id: 'rack.edit.name.message',
    defaultMessage: '服务器池名称不能为空!',
  },
  rackEditDescription: {
    id: 'rack.edit.description',
    defaultMessage: '描述',
  },
  rackEditHa: {
    id: 'rack.edit.ha',
    defaultMessage: '高可用HA',
  },
  rackEditSuccess: {
    id: 'rack.edit.success',
    defaultMessage: '编辑资源池成功',
  },
  rackEditError: {
    id: 'rack.edit.error',
    defaultMessage: '编辑资源池失败',
  },

  rackEditLoadBalancingSuccess: {
    id: 'rack.edit.load.balancing.success',
    defaultMessage: '编辑负载均衡成功',
  },
  rackEditLoadBalancingError: {
    id: 'rack.edit.load.balancing.error',
    defaultMessage: '编辑负载均衡失败',
  },
  //应用组
  CreateApplication: {
    id: 'Create.application',
    defaultMessage: '创建应用组'
  },
  EditApplication: {
    id: 'Edit.application',
    defaultMessage: '编辑'
  },
  EditApplicationGroup: {
    id: 'Edit.application.group',
    defaultMessage: '编辑应用组'
  },
  DeleteApplication: {
    id: 'Delete.application',
    defaultMessage: '删除'
  },
  VmAppLoadBalance: {
    id: 'Vm.appLoadBalance',
    defaultMessage: '应用负载均衡'
  },
  DeploymentApplicationGroup: {
    id: 'Deployment.application.group',
    defaultMessage: '部署应用组'
  },
  UndeployApplicationGroup: {
    id: 'Undeploy.application.group',
    defaultMessage: '取消部署应用组'
  },
  ApplicationName: {
    id: 'Application.name',
    defaultMessage: '名称'
  },
  ApplicationState: {
    id: 'Application.state',
    defaultMessage: '状态'
  },
  UndeployApplicationSure: {
    id: 'Undeploy.application.sure',
    defaultMessage: '确定要取消部署吗'
  },
  DeleteApplicationSure: {
    id: 'Delete.application.sure',
    defaultMessage: '您确定要删除此应用组吗'
  },
  ApplicationNmaeNull: {
    id: 'Application.nmae.null',
    defaultMessage: '名称不能为空'
  },
  VmDatacenterVapp: {
    id: 'Vm.datacenter.vapp',
    defaultMessage: '虚拟数据中心'
  },
  VmDatacenterVappNull: {
    id: 'Vm.datacenter.vapp.null',
    defaultMessage: '虚拟数据中心不能为空'
  },
  ApplicationStateChoice: {
    id: 'Application.state.choice',
    defaultMessage: '请选择状态'
  },
  AppLoadBalanceState: {
    id: 'App.loadBalance.state',
    defaultMessage: '选择负载均衡状态'
  },
  AppLoadBalanceOpen: {
    id: 'App.loadBalance.open',
    defaultMessage: '开启'
  },
  AppLoadBalanceOff: {
    id: 'App.loadBalance.off',
    defaultMessage: '关闭'
  },
  AppLoadBalanceTemplate: {
    id: 'App.loadBalance.template',
    defaultMessage: '模板'
  },
  LoadBalanceTemplateChoice: {
    id: 'LoadBalance.template.choice',
    defaultMessage: '请选择模板'
  },
  AppTemplateChoice: {
    id: 'App.template.choice',
    defaultMessage: '选择模板'
  },
  VappLoadBalanceType: {
    id: 'Vapp.loadBalance.type',
    defaultMessage: '负载类型'
  },
  VappLoadBalanceTypeChoice: {
    id: 'Vapp.loadBalance.type.choice',
    defaultMessage: '请选择负载类型'
  },
  MaximumOnlineTraffic: {
    id: 'Maximum.online.traffic',
    defaultMessage: '最大在线访问量'
  },
  MaximumOnlineTrafficNull: {
    id: 'Maximum.online.traffic.null',
    defaultMessage: '最大在线访问量不能为空'
  },
  ApplicationPort: {
    id: 'Application.Port',
    defaultMessage: '端口'
  },
  ApplicationPortNull: {
    id: 'Application.Port.Null',
    defaultMessage: '端口不能为空'
  },
  //硬盘
  HardDiskDescription: {
    id: 'hardDisk.description',
    defaultMessage: '描述'
  },
  HardDiskAllSize: {
    id: 'HardDisk.all.size',
    defaultMessage: '总大小'
  },
  HardDiskCapacityChoose: {
    id: 'HardDisk.capacity.choose',
    defaultMessage: '容量必选'
  },
  HardDiskServiceClass: {
    id: 'HardDisk.service.class',
    defaultMessage: '服务级别'
  },
  ServiceClassChoose: {
    id: 'Service.class.choose',
    defaultMessage: '服务级别必选'
  },
  HardDiskDeleteSure: {
    id: 'HardDisk.delete.sure',
    defaultMessage: '您确定要删除此硬盘'
  },
  HardDiskVm: {
    id: 'HardDisk.vm',
    defaultMessage: '虚拟机'
  },
  HardDiskTier: {
    id: 'HardDisk.tier',
    defaultMessage: '层'
  },
  HardDiskTotalCapacity: {
    id: 'HardDisk.total.tapacity',
    defaultMessage: '总容量'
  },
  CreateHardDisk: {
    id: 'Create.HardDisk',
    defaultMessage: '创建'
  },
  EditHardDisk: {
    id: 'Edit.HardDisk',
    defaultMessage: '编辑'
  },
  HardDiskDelete: {
    id: 'HardDisk.Delete',
    defaultMessage: '删除'
  },
  AddHardDisk: {
    id: 'Add.HardDisk',
    defaultMessage: '创建硬盘'
  },
  EditHardDisks: {
    id: 'EditHard.Disks',
    defaultMessage: '编辑硬盘'
  },
  //持久模板
  PersistentBothChoose: {
    id: 'Persistent.both.choose',
    defaultMessage: '全选'
  },
  PersistentClone: {
    id: 'Persistent.clone',
    defaultMessage: '克隆'
  },
  PersistentSize: {
    id: 'Persistent.size',
    defaultMessage: '大小'
  },
  PersistentEdit: {
    id: 'Persistent.edit',
    defaultMessage: '编辑'
  },
  PersistentCancle: {
    id: 'Persistent.cancle',
    defaultMessage: '取消'
  },
  PersistentAccept: {
    id: 'Persistent.accept',
    defaultMessage: '接受'
  },
  PersistentAvailableArea: {
    id: 'Persistent.available.area',
    defaultMessage: '可用区'
  },
  PersistentStorageType: {
    id: 'Persistent.storage.type',
    defaultMessage: '选择你的存储类型'
  },
  ProductPersistentSucess: {
    id: 'Product.persistent.sucess',
    defaultMessage: '生成模板成功'
  },
  ProductPersistentError: {
    id: 'Product.persistent.error',
    defaultMessage: '生成模板失败'
  },
  PersistentDescription: {
    id: 'Persistent.description',
    defaultMessage: '描述'
  },
  PersistentDescriptionNull: {
    id: 'Persistent.description.null',
    defaultMessage: '描述不能为空'
  },
  EditPersistentHardDisks: {
    id: 'Edit.persistent.hardDisks',
    defaultMessage: '编辑硬盘'
  },
  PersistentHardDiskType: {
    id: 'Persistent.hardDisk.type',
    defaultMessage: '类型'
  },
  PersistentHardDiskClasses: {
    id: 'Persistent.hardDisk.classes',
    defaultMessage: '类别'
  },
  PersistentHardDiskClassesNull: {
    id: 'Persistent.hardDisk.classes.null',
    defaultMessage: '类别不能为空'
  },
  PersistentCPUNull: {
    id: 'Persistent.CPU.null',
    defaultMessage: 'CPU不能为空'
  },
  PersistentStorageNull: {
    id: 'Persistent.storage.null',
    defaultMessage: '内存不能为空'
  },
  PersistentStorage: {
    id: 'Persistent.storage',
    defaultMessage: '内存'
  },
  PersistentDisk: {
    id: 'Persistent.Disk',
    defaultMessage: '磁盘'
  },
  PersistentDiskNull: {
    id: 'Persistent.disk.null',
    defaultMessage: '磁盘不能为空'
  },
  PersistentDiskControl: {
    id: 'Persistent.disk.control',
    defaultMessage: '磁盘控制'
  },
  PersistentDiskControlChoose: {
    id: 'Persistent.disk.control.choose',
    defaultMessage: '请选择磁盘控制'
  },
  PersistentNetControl: {
    id: 'Persistent.net.control',
    defaultMessage: '网络控制器'
  },
  PersistentNetControlChoose: {
    id: 'Persistent.net.control.choose',
    defaultMessage: '请选择网络控制器'
  },
  PersistentCPUHot: {
    id: 'Persistent.CPU.hot',
    defaultMessage: 'CPU热添加'
  },
  PersistentStorageHot: {
    id: 'Persistent.storage.hot',
    defaultMessage: '内存热添加'
  },
  PersistentShareTemplate: {
    id: 'Persistent.share.template',
    defaultMessage: '共享模板'
  },
  PersistentEnabledChef: {
    id: 'Persistent.enabled.chef',
    defaultMessage: '启用Chef'
  },
  PersistentUser: {
    id: 'Persistent.User',
    defaultMessage: '用户'
  },
  PersistentPassWord: {
    id: 'Persistent.PassWord',
    defaultMessage: '密码'
  },
  ProductSpecifyTemplate: {
    id: 'Product.specify.template',
    defaultMessage: '生成指定模板'
  },
  ProductTemplateChoose: {
    id: 'Product.template.choose',
    defaultMessage: '选择生成模板'
  },
  PersistentCostCode: {
    id: 'Persistent.costCode',
    defaultMessage: '成本代码'
  },
  PersistentNothing: {
    id: 'Persistent.Nothing',
    defaultMessage: '没有'
  },
  EditVmTemplateSucess: {
    id: 'Edit.VmTemplate.Sucess',
    defaultMessage: '编辑虚拟模板成功'
  },
  EditVmTemplateError: {
    id: 'Edit.VmTemplate.Error',
    defaultMessage: '编辑虚拟模板失败'
  },
  PersistentTemplateDeleteSure: {
    id: 'PersistentTemplate.delete.sure',
    defaultMessage: '您确定要删除此模板吗'
  },
  PersistentTemplateDeleteSuccess: {
    id: 'PersistentTemplate.delete.success',
    defaultMessage: '删除模板成功'
  },
  PersistentTemplateDeleteError: {
    id: 'PersistentTemplate.delete.error',
    defaultMessage: '删除模板失败'
  },
  AddPersistentTemplate: {
    id: 'Add.PersistentTemplate',
    defaultMessage: '创建永久模板'
  },
  AddPersistentTemplateError: {
    id: 'Add.PersistentTemplate.Error',
    defaultMessage: '创建永久模板失败'
  },
  PersistentMainframe: {
    id: 'Persistent.Mainframe',
    defaultMessage: '主机'
  },
  PersistentApp: {
    id: 'Persistent.App',
    defaultMessage: '应用组'
  },
  CreatePersistentTemplate: {
    id: 'Create.PersistentTemplate',
    defaultMessage: '创建'
  },
  EditPersistentTemplate: {
    id: 'Edit.PersistentTemplate',
    defaultMessage: '编辑'
  },
  DeletePersistentTemplate: {
    id: 'Delete.PersistentTemplate',
    defaultMessage: '删除'
  },
  AddPersistentVmTemplate: {
    id: 'Add.Persistent.VmTemplate',
    defaultMessage: '创建永久虚拟模板'
  },
  EditPersistentVmTemplate: {
    id: 'Edit.Persistent.VmTemplate',
    defaultMessage: '编辑永久虚拟模板'
  },
  PersistentTemplateSize: {
    id: 'Persistent.template.size',
    defaultMessage: '模板大小'
  },
  PersistentTemplateState: {
    id: 'Persistent.template.state',
    defaultMessage: '状态'
  },
  PersistentVm: {
    id: 'Persistent.Vm',
    defaultMessage: '虚拟机'
  },
  PersistentLivingExample: {
    id: 'Persistent.living.example',
    defaultMessage: '实例'
  },
  //回收站
  RecycleChooseVDC: {
    id: 'Recycle.chooseVDC',
    defaultMessage: '选择VDC'
  },
  RecycleChooseVAPP: {
    id: 'Recycle.chooseVAPP',
    defaultMessage: '选择VAPP'
  },
  RecycleRestoreVm: {
    id: 'Recycle.restore.Vm',
    defaultMessage: '还原虚拟机'
  },
  RecycleRecoverVm: {
    id: 'Recycle.recover.Vm',
    defaultMessage: '该操作将使用回收站中的磁盘和配置恢复一台虚拟机'
  },
  RecycleDelete: {
    id: 'Recycle.Delete',
    defaultMessage: '删除磁盘'
  },
  RecycleDeleteBeyondRetrieve: {
    id: 'Recycle.delete.beyond.retrieve',
    defaultMessage: '删除磁盘操作不可恢复'
  },
  RecycleName: {
    id: 'Recycle.Name',
    defaultMessage: '名称'
  },
  RecycleRam: {
    id: 'Recycle.Ram',
    defaultMessage: '内存'
  },
  RecycleTime: {
    id: 'Recycle.Time',
    defaultMessage: '日期'
  },
  RecycleRedistributeDisk: {
    id: 'Recycle.redistribute.disk',
    defaultMessage: '重新分配磁盘'
  },
  DeleteRecycle: {
    id: 'Delete.Recycle',
    defaultMessage: '删除'
  },
  //管理界面
  ManagementPortalHeader: {
    id: 'ManagementPortal.header',
    defaultMessage: '欢迎使用管理界面',
  },
  manageSystemManagement: {
    id: 'manage.system.management',
    defaultMessage: '系统管理'
  },
  manageSerial: {
    id: 'manage.serial',
    defaultMessage: '序列号'
  },
  manageDCD: {
    id: 'manage.DCD',
    defaultMessage: '系统参数'
  },
  manageResourceScheduling: {
    id: 'manage.resource.scheduling',
    defaultMessage: '资源调度'
  },
  manageAccount: {
    id: 'manage.account',
    defaultMessage: '账户'
  },
  manageBusinessManagement: {
    id: 'manage.business.management',
    defaultMessage: '业务管理'
  },
  manageOrder: {
    id: 'manage.order',
    defaultMessage: '工单'
  },
  manageBilling: {
    id: 'manage.billing',
    defaultMessage: '计费'
  },
  manageOrganizational: {
    id: 'manage.organizational',
    defaultMessage: '组织管理'
  },
  manageWorkflow: {
    id: 'manage.workflow',
    defaultMessage: '工作流'
  },
  manageSafetyManagement: {
    id: 'manage.safety.management',
    defaultMessage: '安全管理'
  },
  managePasswordPolicy: {
    id: 'manage.password.policy',
    defaultMessage: '密码策略'
  },
  manageAccessPolicy: {
    id: 'manage.access.policy',
    defaultMessage: '访问策略'
  },
  manageACLPolicy: {
    id: 'manage.ACLPolicy',
    defaultMessage: 'ACL策略'
  },
  manageAntivirusPolicy: {
    id: 'manage.antivirus.policy',
    defaultMessage: '防病毒策略'
  },
  manageOperationAnalysis: {
    id: 'manage.operation.analysis',
    defaultMessage: '运营分析'
  },
  manageCommitLog: {
    id: 'manage.commitLog',
    defaultMessage: '操作日志'
  },
  manageLogstash: {
    id: 'manage.logstash',
    defaultMessage: '日志收集'
  },
  manageReport: {
    id: 'manage.report',
    defaultMessage: '报表'
  },
  manageAlarm: {
    id: 'manage.alarm',
    defaultMessage: '告警'
  },
  manageSystemMaintenance: {
    id: 'manage.system.maintenance',
    defaultMessage: '系统维护'
  },
  manageEquipmentUpgrade: {
    id: 'manage.equipment.upgrade',
    defaultMessage: '设备升级'
  },
  manageServicesAndDownloads: {
    id: 'manage.servicesAndDownloads',
    defaultMessage: '服务与下载'
  },
  manageaKeyTest: {
    id: 'manage.aKeyTest',
    defaultMessage: '一键检测'
  },
  manageAutomaticOperation: {
    id: 'manage.automatic.operation',
    defaultMessage: '自动运维管理'
  },
  //参数配置
  manageSystemParameter: {
    id: 'manage.system.parameter',
    defaultMessage: '系统参数'
  },
  manageSystemMailServer: {
    id: 'manage.system.mailServer',
    defaultMessage: '邮件服务器'
  },
	unistorageConfig: {
		id: 'manage.system.unistorageConfig',
		defaultMessage: '存储访问配置'
	},
  manageSystemRoutine: {
    id: 'manage.system.routine',
    defaultMessage: '常规'
  },
  manageSystemInteger: {
    id: 'manage.system.integer',
    defaultMessage: '列表显示的页数必须是整数'
  },
  manageSystemInformationParameter: {
    id: 'manage.system.information.parameter',
    defaultMessage: '常规信息参数'
  },
  manageSystemLogoFile: {
    id: 'manage.system.logoFile',
    defaultMessage: 'Logo文件'
  },
  manageSystemCurrentShow: {
    id: 'manage.system.currentShow',
    defaultMessage: '列表页每页显示数量'
  },
  manageSystemDisplayURL: {
    id: 'manage.system.displayURL',
    defaultMessage: '点击Logo时显示URL'
  },
  manageSystemAllowPasswordChange: {
    id: 'manage.system.allowPasswordChange',
    defaultMessage: '允许用户修改自己的密码'
  },
  manageSystemUserLogOff: {
    id: 'manage.system.userLogOff',
    defaultMessage: '允许用户注销'
  },
  manageSystemVirtualMachineDiskOptions: {
    id: 'manage.system.virtualMachineDiskOptions',
    defaultMessage: '显示虚拟机磁盘选项'
  },
  manageSystemreDirectedURL: {
    id: 'manage.system.redirectedURL',
    defaultMessage: '用户注销后重定向到URL(empty->login)'
  },
  manageSystemRedirect: {
    id: 'manage.system.redirect',
    defaultMessage: '再次登录进来默认跳转页面'
  },
  manageSystemSoftLimitReached: {
    id: 'manage.system.softLimitReached',
    defaultMessage: '当达到软限制时，提示详细信息'
  },
  manageSystemHardLimitReached: {
    id: 'manage.system.hardLimitReached',
    defaultMessage: '当达到硬限制时，提示详细信息'
  },
  manageSystemWorkflowAddress: {
    id: 'manage.system.workflowAddress',
    defaultMessage: '工作流地址'
  },
  manageSystemEnableWorkflow: {
    id: 'manage.system.enableWorkflow',
    defaultMessage: '启用工作流'
  },
  manageSystemEnableDiskRecycle: {
    id: 'manage.system.enableDiskRecycle',
    defaultMessage: '启用磁盘回收站'
  },
  manageSystemEnableFirewallPrivateVDC: {
    id: 'manage.system.enableFirewallPrivateVDC',
    defaultMessage: '为私有VDC启用防火墙'
  },
  manageSystemRightURL: {
    id: 'manage.system.rightURL',
    defaultMessage: '请输入正确的URL'
  },
  manageSystemPreserve: {
    id: 'manage.system.preserve',
    defaultMessage: '保存'
  },
  manageSystemDataCenter: {
    id: 'manage.system.dataCenter',
    defaultMessage: '数据中心'
  },
  manageAppStore: {
    id: 'manageAppStore',
    defaultMessage: '应用中心'
  },
  manageSystemDataCenterInformation: {
    id: 'manage.system.dataCenterInformation',
    defaultMessage: '数据中心信息参数'
  },
  manageSystemDefaultEsageTemplateRepository: {
    id: 'manage.system.defaultEsageTemplateRepository',
    defaultMessage: '默认esage模板仓库（如果为空将不创建）'
  },
  manageSystemRemoteTemplateDownload: {
    id: 'manage.system.remoteTemplateDownload',
    defaultMessage: '远程模板库下载进度更新间隔（秒）'
  },
  manageSystemDataCenterUpdate: {
    id: 'manage.system.dataCenterUpdate',
    defaultMessage: '数据中心数据更新间隔（秒）'
  },
  manageSystemEventLogUpdate: {
    id: 'manage.system.eventLogUpdate',
    defaultMessage: '事件日志更新间隔（秒）'
  },
  manageSystemNumberOfIPAddresses: {
    id: 'manage.system.numberOfIPAddresses',
    defaultMessage: '列表中每页显示的IP地址数量'
  },
  manageSystemRemoteToVirtualMachines: {
    id: 'manage.system.remoteToVirtualMachines',
    defaultMessage: '允许远程访问虚拟机'
  },
  manageSystemVappDeploymentUpdate: {
    id: 'manage.system.vappDeploymentUpdate',
    defaultMessage: 'vApp部署进度更新间隔（秒）'
  },
  manageSystemVappUpdateInterval: {
    id: 'manage.system.vappUpdateInterval',
    defaultMessage: 'vApp更新间隔（秒）'
  },
  manageSystemHypervisorDefaultPassword: {
    id: 'manage.system.hypervisorDefaultPassword',
    defaultMessage: '默认的hypervisor密码'
  },
  manageSystemHypervisorDefaultPort: {
    id: 'manage.system.hypervisorDefaultPort',
    defaultMessage: '默认的hypervisor端口'
  },
  manageSystemHypervisorDefaultUser: {
    id: 'manage.system.hypervisorDefaultUser',
    defaultMessage: '默认的hypervisor用户'
  },
  manageSystemPermissibleSize: {
    id: 'manage.system.permissibleSize',
    defaultMessage: '硬件管理允许的大小（GB）'
  },
  manageSystemDefaultMinimumVLANID: {
    id: 'manage.system.defaultMinimumVLANID',
    defaultMessage: '默认最小VLAN ID'
  },
  manageSystemDefaultMaximumVLANID: {
    id: 'manage.system.defaultMaximumVLANID',
    defaultMessage: '默认最大VLAN ID'
  },
  manageSystemLostVirtualTransformationUpdate: {
    id: 'manage.system.lostVirtualTransformationUpdate',
    defaultMessage: '丢失的虚拟镜像转换更新间隔（秒）'
  },
  manageSystemNetWork: {
    id: 'manage.system.network',
    defaultMessage: '网络'
  },
  manageSystemNetworkInformationParameters: {
    id: 'manage.system.networkInformationParameters',
    defaultMessage: '网络信息参数'
  },
  manageSystemNetWorkName: {
    id: 'manage.system.netWorkName',
    defaultMessage: '名称'
  },
  manageSystemNetmask: {
    id: 'manage.system.netmask',
    defaultMessage: '网络掩码'
  },
  manageSystemNetworkAdress: {
    id: 'manage.system.networkAdress',
    defaultMessage: '网络地址'
  },
  manageSystemGateway: {
    id: 'manage.system.gateway',
    defaultMessage: '网关'
  },
  manageSystemChieflyDNS: {
    id: 'manage.system.chieflyDNS',
    defaultMessage: '首要DNS'
  },
  manageSystemSubordinationDNS: {
    id: 'manage.system.subordinationDNS',
    defaultMessage: '次要DNS'
  },
  manageSystemDNSPostfix: {
    id: 'manage.system.DNSpostfix',
    defaultMessage: 'DNS后缀'
  },
  manageSystemMailServerParameters: {
    id: 'manage.system.mailServerParameters',
    defaultMessage: '邮件服务器参数'
  },
  manageSystemServerAddress: {
    id: 'manage.system.serverAddress',
    defaultMessage: '服务器地址'
  },
  manageSystemPortNumber: {
    id: 'manage.system.portNumber',
    defaultMessage: '端口号'
  },
  manageSystemServerRequiresAuthentication: {
    id: 'manage.system.serverRequiresAuthentication',
    defaultMessage: '服务器要求身份验证'
  },
  manageSystemSenderName: {
    id: 'manage.system.senderName',
    defaultMessage: '发件人姓名'
  },
  manageSystemSenderEmailAddress: {
    id: 'manage.system.senderEmailAddress',
    defaultMessage: '发件人邮箱地址'
  },
  manageSystemNeedToSSIDeal: {
    id: 'manage.system.needToSSIDeal',
    defaultMessage: '是否需要SSI协议'
  },
  manageSystemReset: {
    id: 'manage.system.reset',
    defaultMessage: '重置'
  },
  manageSystemMailTest: {
    id: 'manage.system.mailTest',
    defaultMessage: '邮箱测试'
  },
  //设备升级
  manageConfigurationMaintenanceMode: {
    id: 'manage.configurationMaintenanceMode',
    defaultMessage: '配置维护模式'
  },
  manageEnableMaintenanceMode: {
    id: 'manage.enableMaintenanceMode',
    defaultMessage: '启用维护模式'
  },
  manageOpenMaintenanceMode: {
    id: 'manage.openMaintenanceMode',
    defaultMessage: '开启维护模式后，控制台/外部API不再执行任何操作，但是运行的虚拟机不受影响'
  },
  manageUpdateInformation: {
    id: 'manage.updateInformation',
    defaultMessage: '升级信息'
  },
  managePrepareToUpgradeFile: {
    id: 'manage.prepareToUpgradeFile',
    defaultMessage: '准备升级文件'
  },
  manageUpgrade: {
    id: 'manage.Upgrade',
    defaultMessage: '升级'
  },
  manageRestartUpgrade: {
    id: 'manage.restartUpgrade',
    defaultMessage: '重启主机完成升级'
  },
  manageCurrentVersionOfDevice: {
    id: 'manage.currentVersionOfDevice',
    defaultMessage: '设备当前版本'
  },
  manageLatestVersion: {
    id: 'manage.latestVersion',
    defaultMessage: '您的设备已经是最新版本'
  },
  manageUpgradeToOtherVersions: {
    id: 'manage.upgradeToOtherVersions',
    defaultMessage: '升级到其他版本'
  },
  manageGetFile: {
    id: 'manage.getFile',
    defaultMessage: '你可以通过以下方式获取升级文件'
  },
  manageDownloadUpgradeFileBrowser: {
    id: 'manage.downloadUpgradeFileBrowser',
    defaultMessage: '步骤1：通过浏览器下载升级文件'
  },
  manageUpdateFileToServer: {
    id: 'manage.updateFileToServer',
    defaultMessage: '步骤2：升级文件上传到服务器'
  },
  manageDownloadUpgradeFile: {
    id: 'manage.downloadUpgradeFile',
    defaultMessage: '下载升级文件'
  },
  manageUploadFiles: {
    id: 'manage.uploadFiles',
    defaultMessage: '上传文件...'
  },
  manageBrowse: {
    id: 'manage.browse',
    defaultMessage: '浏览'
  },
  manageBeingUpdated: {
    id: 'manage.beingUpdated',
    defaultMessage: '正在升级'
  },
  manageUpgradeDetails: {
    id: 'manage.upgradeDetails',
    defaultMessage: '升级详情'
  },
  manageAllRolledBack: {
    id: 'manage.allRolledBack',
    defaultMessage: '全部回滚'
  },
  manageFailedTryAgain: {
    id: 'manage.failedTryAgain',
    defaultMessage: '失败重试'
  },
  manageRollBackPatch: {
    id: 'manage.rollBackPatch',
    defaultMessage: '回滚补丁包'
  },
  manageStatus: {
    id: 'manage.status',
    defaultMessage: '状态'
  },
  manageHostname: {
    id: 'manage.hostname',
    defaultMessage: '主机名称'
  },
  manageIPAdress: {
    id: 'manage.IPAdress',
    defaultMessage: 'IP地址'
  },
  manageCurrentVersion: {
    id: 'manage.currentVersion',
    defaultMessage: '当前版本'
  },
  manageUpdateStatus: {
    id: 'manage.updateStatus',
    defaultMessage: '升级状态'
  },
  //资源调度
  manageResourceAddBalancerPolicy: {
    id: 'manage.resource.addBalancerPolicy',
    defaultMessage: '添加全局负载均衡策略'
  },
  manageResourceAddBalancerPolicyTitle: {
    id: 'manage.resource.addBalancerPolicy.title',
    defaultMessage: '全局负载均衡策略'
  },
  manageResourceAddBalancerPolicySuccess: {
    id: 'manage.resource.addBalancerPolicy.success',
    defaultMessage: '添加全局负载均衡策略成功'
  },
  manageResourceAddBalancerPolicyError: {
    id: 'manage.resource.addBalancerPolicy.error',
    defaultMessage: '添加全局负载均衡策略失败'
  },
  manageResourceAddSharedHostPolicy: {
    id: 'manage.resource.addSharedHostPolicy',
    defaultMessage: '添加共享主机策略'
  },
  manageResourceDelete: {
    id: 'manage.resource.delete',
    defaultMessage: '删除'
  },
  manageResourceDeleteBalancerPolicyTitle: {
    id: 'manage.resource.delete.BalancerPolicy.title',
    defaultMessage: '删除全局负载均衡策略'
  },
  manageResourceDeleteBalancerPolicySuccess: {
    id: 'manage.resource.delete.BalancerPolicy.success',
    defaultMessage: '删除全局负载均衡策略成功'
  },
  manageResourceDeleteBalancerPolicyConfirm: {
    id: 'manage.resource.delete.BalancerPolicy.confirm',
    defaultMessage: '您确认删除这个全局负载均衡策略吗?'
  },
  manageResourceDeleteBalancerPolicyError: {
    id: 'manage.resource.delete.BalancerPolicy.error',
    defaultMessage: '删除全局负载均衡策略失败'
  },
  manageResourceFitPolicy: {
    id: 'manage.resource.fitPolicy',
    defaultMessage: '负载均衡'
  },
  manageResourceType: {
    id: 'manage.resource.type',
    defaultMessage: '类型'
  },
  manageResourceDescription: {
    id: 'manage.resource.description',
    defaultMessage: '描述'
  },
  manageResourceAddfitPolicy: {
    id: 'manage.resource.add.fitPolicy',
    defaultMessage: '策略类型'
  },
  manageResourceAddDatacenter: {
    id: 'manage.resource.add.datacenter',
    defaultMessage: '数据中心'
  },
  manageResourceAddDatacenterAll: {
    id: 'manage.resource.add.datacenter.all',
    defaultMessage: '所有'
  },
  manageResourceAddLoadbalancetype: {
    id: 'manage.resource.add.Loadbalancetype',
    defaultMessage: '自动化调度策略'
  },
  manageResourceAddLoadbalancetypePROGRESSIVE: {
    id: 'manage.resource.add.Loadbalancetype.PROGRESSIVE',
    defaultMessage: '贪婪模式'
  },
  manageResourceAddLoadbalancetypePERFORMANCE: {
    id: 'manage.resource.add.Loadbalancetype.PERFORMANCE',
    defaultMessage: '轮询模式'
  },
  manageResourceAddLoadbalancetypeChose: {
    id: 'manage.resource.add.Loadbalancetype.chose',
    defaultMessage: '请选择'
  },
  //访问策略界面
  accessPolicyHeader: {
    id: 'access.policy.header',
    defaultMessage: '访问策略'
  },
  accessPolicyButtonRefresh: {
    id: 'access.policy.button.refresh',
    defaultMessage: '刷新'
  },
  accessPolicyButtonAdd: {
    id: 'access.policy.button.add',
    defaultMessage: '增加访问策略'
  },
  accessPolicyButtonView: {
    id: 'access.policy.button.view',
    defaultMessage: '查看访问策略'
  },
  accessPolicyButtonEdit: {
    id: 'access.policy.button.edit',
    defaultMessage: '编辑访问策略'
  },
  accessPolicyButtonDelete: {
    id: 'access.policy.button.delete',
    defaultMessage: '删除访问策略'
  },
  //序列号
  //角色
  roleRefresh: {
    id: 'role.refresh',
    defaultMessage: '刷新'
  },
  createRole: {
    id: 'role.create',
    defaultMessage: '创建角色'
  },
  editRole: {
    id: 'role.edit',
    defaultMessage: '编辑角色'
  },
  deleteRole: {
    id: 'role.delete',
    defaultMessage: '删除'
  },
  copyRole: {
    id: 'role.copy',
    defaultMessage: '克隆角色'
  },
  roleInformation: {
    id: 'role.information',
    defaultMessage: '基本信息'
  },
  roleAuthorization: {
    id: 'role.authorization',
    defaultMessage: '权限设置'
  },
  roleName: {
    id: 'role.name',
    defaultMessage: '名称'
  },
  roleExprise: {
    id: 'role.exprise',
    defaultMessage: '虚拟组织'
  },
  globalAdministratorRole: {
    id: 'global.administratorRole',
    defaultMessage: '使角色为全局角色'
  },
  roleRemoved: {
    id: 'role.removed',
    defaultMessage: '您确定要删除这个角色吗'
  },
  roleChoice: {
    id: 'role.choice',
    defaultMessage: '请选择一个角色'
  },
  //报表
  monitorReport: {
    id: "report.monitorReport",
    defaultMessage: "监控报表"
  },
  resourceUseAnalysis: {
    id: "report.resourceUseAnalysis",
    defaultMessage: "资源使用分析"
  },
  //监控报表
  serverReport: {
    id: "monitor.serverReport",
    defaultMessage: "服务器报表"
  },
  vmReport: {
    id: "monitor.vmReport",
    defaultMessage: "虚拟机报表"
  },
  topnReport: {
    id: "monitor.topnReport",
    defaultMessage: "TopN统计报表"
  },
  selectQueryCondition: {
    id: "monitor.selectQueryCondition",
    defaultMessage: "选择您的查询条件"
  },
  monitorServer: {
    id: "monitor.monitorServer",
    defaultMessage: "服务器"
  },
  statisticalCycle: {
    id: "monitor.statisticalCycle",
    defaultMessage: "统计周期"
  },
  startTime: {
    id: "monitor.startTime",
    defaultMessage: "开始时间"
  },
  endTime: {
    id: "monitor.endTime",
    defaultMessage: "截止时间"
  },
  statisticalType: {
    id: "monitor.statisticalType",
    defaultMessage: "统计类型"
  },
  query: {
    id: "monitor.query",
    defaultMessage: "查询"
  },
  reset: {
    id: "monitor.reset",
    defaultMessage: "重置"
  },
  queryResult: {
    id: "monitor.queryResult",
    defaultMessage: "您的查询结果"
  },
  diskWriteSpeed: {
    id: "monitor.diskWriteSpeed",
    defaultMessage: "磁盘写速度"
  },
  memoryUtilization: {
    id: "monitor.memoryUtilization",
    defaultMessage: "内存利用率"
  },
  diskReadSpeed: {
    id: "monitor.diskReadSpeed",
    defaultMessage: "磁盘读速度"
  },
  queryCondition: {
    id: "monitor.queryCondition",
    defaultMessage: "查询条件"
  },
  monitorName: {
    id: "monitor.monitorName",
    defaultMessage: "名称"
  },
  monitorIpAddress: {
    id: "monitor.monitorIpAddress",
    defaultMessage: "IP地址"
  },
  hourlySearch: {
    id: "monitor.hourlySearch",
    defaultMessage: "按小时搜索"
  },
  daylySearch: {
    id: "monitor.daylySearch",
    defaultMessage: "按天搜索"
  },
  weeklySearch: {
    id: "monitor.weeklySearch",
    defaultMessage: "按周搜索"
  },
  monthlySearch: {
    id: "monitor.monthlySearch",
    defaultMessage: "按月搜索"
  },
  yearlySearch: {
    id: "monitor.yearlySearch",
    defaultMessage: "按年搜索"
  },
  cycleSelect: {
    id: "monitor.cycleSelect",
    defaultMessage: "周期选择"
  },
  cpuRate: {
    id: "monitor.cpuRate",
    defaultMessage: "CPU使用率"
  },
  hardDiskTotalRate: {
    id: "monitor.hardDiskTotalRate",
    defaultMessage: "硬盘总利用率"
  },
  networkTotalTraffic: {
    id: "monitor.networkTotalTraffic",
    defaultMessage: "网络总流量"
  },
  networkReadTraffic: {
    id: "monitor.networkReadTraffic",
    defaultMessage: "网络读流量"
  },
  networkWriteTraffic: {
    id: "monitor.networkWriteTraffic",
    defaultMessage: "网络写流量"
  },
  monitorVM: {
    id: "monitor.monitorVM",
    defaultMessage: "虚拟机"
  },
  monitorServerPool: {
    id: "monitor.monitorServerPool",
    defaultMessage: "服务器池"
  },
  diskIO: {
    id: "monitor.diskIO",
    defaultMessage: "磁盘IO"
  },

  virtualMachine: {
    id: 'virtualMachine',
    defaultMessage: '虚拟机',
  },
  server: {
    id: 'server',
    defaultMessage: '服务器'
  },
  applicationGroup: {
    id: 'applicationGroup',
    defaultMessage: '应用组'
  },
  usageOfCPU: {
    id: 'usageOfCPU',
    defaultMessage: "CPU使用"
  },
  usageOfMemory: {
    id: 'usageOfMemory',
    defaultMessage: '内存利用'
  },
  memory: {
    id: 'memory',
    defaultMessage: '内存'
  },
  usageOfDisk: {
    id: 'usageOfDisk',
    defaultMessage: '磁盘利用'
  },
  storage: {
    id: "storage",
    defaultMessage: "存储"
  },
  dataCenter: {
    id: "dataCenter",
    defaultMessage: "数据中心"
  },
  user: {
    id: "user",
    defaultMessage: "用户"
  },
  journal: {
    id: "journal",
    defaultMessage: "日志"
  },
  used: {
    id: 'used',
    defaultMessage: '已用'
  },
  available: {
    id: 'available',
    defaultMessage: "可用"
  },
  total: {
    id: 'total',
    defaultMessage: '总共'
  },
  //操作日志
  operationLog: {
    id: "operationLog",
    defaultMessage: "操作日志"
  },
  operationLogSummary: {
    id: "operationLogSummary",
    defaultMessage: "操作日志总览"
  },
  allEvent: {
    id: "allEvent",
    defaultMessage: "全部事件"
  },
  errorEvent: {
    id: "errorEvent",
    defaultMessage: "严重事件"
  },
  warnEvent: {
    id: "warnEvent",
    defaultMessage: "警告事件"
  },
  infoEvent: {
    id: "infoEvent",
    defaultMessage: "正常事件"
  },
  source: {
    id: "source",
    defaultMessage: "来源"
  },
  logseverity: {
    id: "logseverity",
    defaultMessage: "严重性"
  },
  executionType: {
    id: "executionType",
    defaultMessage: "执行类型"
  },
  operator: {
    id: "operator",
    defaultMessage: "操作者"
  },
  time: {
    id: "time",
    defaultMessage: "时间"
  },
  account: {
    id: "account",
    defaultMessage: "账户"
  },
  stacktrace: {
    id: "stacktrace",
    defaultMessage: "追踪"
  },
  untreated: {
    id: "untreated",
    defaultMessage: "未处理"
  },
  refresh: {
    id: "refresh",
    defaultMessage: "刷新"
  },
  filter: {
    id: "filter",
    defaultMessage: "过滤"
  },
  markedRead: {
    id: "markedRead",
    defaultMessage: "标为已读"
  },
  allMarkRead: {
    id: "allMarkRead",
    defaultMessage: "全部标为已读"
  },

  //日志收集
  logScreen: {
    id: "logScreen",
    defaultMessage: "日志文件条件筛选"
  },
  serverLogTimeRange: {
    id: "serverLogTimeRange",
    defaultMessage: "服务器日志时间范围"
  },
  oneDay: {
    id: "oneDay",
    defaultMessage: "1天"
  },
  twoDay: {
    id: "twoDay",
    defaultMessage: "2天"
  },
  threeDay: {
    id: "threeDay",
    defaultMessage: "3天"
  },
  fourDay: {
    id: "fourDay",
    defaultMessage: "4天"
  },
  fiveDay: {
    id: "fiveDay",
    defaultMessage: "5天"
  },
  sixDay: {
    id: "sixDay",
    defaultMessage: "6天"
  },
  oneWeek: {
    id: "oneWeek",
    defaultMessage: "1周"
  },
  oneMonth: {
    id: "oneMonth",
    defaultMessage: "1月"
  },
  serverLogFileSize: {
    id: "serverLogFileSize",
    defaultMessage: "服务器日志文件大小"
  },
  collectServerList: {
    id: "collectServerList",
    defaultMessage: "需收集的服务器列表"
  },
  queriedResult: {
    id: "queriedResult",
    defaultMessage: "查询结果"
  },
  exports: {
    id: "exports",
    defaultMessage: "导出"
  },
  idName: {
    id: "idName",
    defaultMessage: "ID名"
  },
  loginName: {
    id: "loginName",
    defaultMessage: "登录名"
  },

  //服务与下载界面
  service: {
    id: "service",
    defaultMessage: "服务"
  },
  productDownload: {
    id: "productDownload",
    defaultMessage: "产品下载"
  },
  //服务
  remoteAssistance: {
    id: "remoteAssistance",
    defaultMessage: "远程协助"
  },
  remoteTips1: {
    id: "remoteTips1",
    defaultMessage: "1.远程协助可以远程帮助客户协助解决技术问题，问题诊断、排查与恢复等，改善系统运行情况。"
  },
  remoteTips2: {
    id: "remoteTips2",
    defaultMessage: "2.获取远程协助授权号请拨打热线(400-630-6430)。"
  },
  telephoneTechnicalSupport: {
    id: "telephoneTechnicalSupport",
    defaultMessage: "电话技术支持"
  },
  telephoneTips1: {
    id: "telephoneTips1",
    defaultMessage: "1.软件应用指导:指导客户进行软件设置、提升客户软件应用能力。"
  },
  telephoneTips2: {
    id: "telephoneTips2",
    defaultMessage: "2.提供方式:客户服务中心热线(400-630-6430)。"
  },
  telephoneTips3: {
    id: "telephoneTips3",
    defaultMessage: "3.服务说明:免费版仅提供电话技术咨询，企业版服务包含远程操作及故障排查支持(企业版电话支持需提供客服服务号)。"
  },
  communityService: {
    id: "communityService",
    defaultMessage: "社区服务"
  },
  communityTips1: {
    id: "communityTips1",
    defaultMessage: "1.在线知识查询:客户随时可在我司科技社区知识库中查询并获得自己所需的技术材料(如问题解决方案、应用技巧等)。"
  },
  communityTips2: {
    id: "communityTips2",
    defaultMessage: "2.用户社区支持:客户可登陆用户社区，与其他用户、我司科技技术支持人员交流我司科技软件应用及使用技巧等方面的问题。"
  },
  communityTips3: {
    id: "communityTips3",
    defaultMessage: "3.安全补丁更新:客户随时可在我司科技在线客户服务中心下载安全补丁包。"
  },
  communityTips4: {
    id: "communityTips4",
    defaultMessage: "4.提供方式:社区及网络服务(我司科技社区)"
  },
  productUpgrade: {
    id: "productUpgrade",
    defaultMessage: "产品升级"
  },
  productTips: {
    id: "productTips",
    defaultMessage: "免费版用于仅能获取部分升级版本，企业版用户可获取所有可升级版本。"
  },
  fieldSupportService: {
    id: "fieldSupportService",
    defaultMessage: "现场支持服务"
  },
  supportTips1: {
    id: "supportTips1",
    defaultMessage: "1.现场支持服务可以让客户获得与技术专家面对面的技术交流机会及现场技术协助。购买了现场支持服务后，您可以根据需要，随时申请我司科技的技术专家到现场为您进行产品安装、调试、问题排查以及使用方案优化等工作，我们会根据您的要求，制定最合适的技术方案，现场帮助您解决技术问题，并改善业务系统的运行情况。"
  },
  supportTips2: {
    id: "supportTips2",
    defaultMessage: "2.现场服务分为三个类型，具体如下:"
  },
  supportTips2_1: {
    id: "supportTips2_1",
    defaultMessage: "现场安装服务：我司科技派遣服务经理为用户做现场产品安装配置、测试验收。"
  },
  supportTips2_2: {
    id: "supportTips2_2",
    defaultMessage: "专业化现场服务：在收到用户要求后，我司科技奖派遣服务经理到达用户现场，提供用户系统问题诊断、故障恢复、系统优化咨询等服务。"
  },
  supportTips2_3: {
    id: "supportTips2_3",
    defaultMessage: "现场培训服务：在收到用户要求后，我司科技奖派遣服务经理到达用户现场，提供我司科技产品培训服务。"
  },
  supportTips3: {
    id: "supportTips3",
    defaultMessage: "3.现场服务可能授权给我司科技的授权技术服务中心提供。"
  },
  supportTips4: {
    id: "supportTips4",
    defaultMessage: "4.现场服务按工作日收费，最少购买1个工作日。"
  },
  exitUserExperiencePlan: {
    id: "exitUserExperiencePlan",
    defaultMessage: "退出用户体验计划"
  },
  exitExperPlanThank: {
    id: "exitExperPlanThank",
    defaultMessage: "已参加了用户体验计划，感谢您对我们产品的支持！"
  },
  experiPlanTips1: {
    id: "experiPlanTips1",
    defaultMessage: '为了大家在使用虚拟机管理系统过程中操作更方便、体验更好，我们邀请您参加虚拟机管理系统用户体验计划，帮助我们提高产品的易用性和用户体验。"用户体验改善计划"所获取的信息'
  },
  experiPlanTips2: {
    id: "experiPlanTips2",
    defaultMessage: '仅用于改善我们的产品和服务，不会用于广告目的或被共享于广告目的。我们将严格保护您的信息与隐私安全。'
  },
  experiPlanTips3: {
    id: "experiPlanTips3",
    defaultMessage: '当您加入用户体验计划后，我们不会强制您参与我们的活动，仅在开展用户研究或用户体验活动时，我们才能在体验计划数据库中寻找适当的人选，如果您如何我们的要求，工作人员会使用邮件或电话正式发出邀请，并在您同意参与后与您商讨具体事宜。'
  },
  serviceSupport: {
    id: "serviceSupport",
    defaultMessage: "服务与支持"
  },
  joinExperiPlan: {
    id: "joinExperiPlan",
    defaultMessage: "加入体验计划"
  },

//数据中心界面
  //集群文件系统
  systemEdit: {
    id: "systemEdit",
    defaultMessage: "编辑"
  },
  systemDelete: {
    id: "systemDelete",
    defaultMessage: "删除"
  },
  systemAdd: {
    id: "systemAdd",
    defaultMessage: "添加"
  },
  systemFormat: {
    id: "systemFormat",
    defaultMessage: "格式化"
  },
  systemSynchronization: {
    id: "systemSynchronization",
    defaultMessage: "同步"
  },
  choiceFileSystem: {
    id: "choiceFileSystem",
    defaultMessage: "请选择一个文件系统"
  },
  choicePhysicalMachine: {
    id: "choicePhysicalMachine",
    defaultMessage: "请选择至少一个物理机"
  },
  fileSystem: {
    id: "fileSystem",
    defaultMessage: "集群文件系统"
  },
  fileSystemName: {
    id: "fileSystemName",
    defaultMessage: "名称"
  },
  fileSystemType: {
    id: "fileSystemType",
    defaultMessage: "类型"
  },
  fileSystemCapacity: {
    id: "fileSystemCapacity",
    defaultMessage: "容量"
  },
  fileSystemActiveVolume: {
    id: "fileSystemActiveVolume",
    defaultMessage: "可用容量"
  },
  fileSystemPath: {
    id: "fileSystemPath",
    defaultMessage: "路径"
  },
  fileSystemCreate: {
    id: "fileSystemCreate",
    defaultMessage: "添加集群文件系统"
  },
  fileSystemDescription: {
    id: "fileSystemDescription",
    defaultMessage: "描述"
  },
  fileSystemSure: {
    id: "fileSystemSure",
    defaultMessage: "确定"
  },
  fileSystemCancel: {
    id: "fileSystemCancel",
    defaultMessage: "取消"
  },
  fileSystemStorageType: {
    id: "fileSystemStorageType",
    defaultMessage: "请选择一个存储类型"
  },
  fileSystemServerIp: {
    id: "fileSystemServerIp",
    defaultMessage: "服务IP"
  },
  fileSystemServerSecondIp: {
    id: "fileSystemServerSecondIp",
    defaultMessage: "服务备用IP"
  },
  fileSystemEdit: {
    id: "fileSystemEdit",
    defaultMessage: "编辑集群文件系统"
  },
  fileSystemPort: {
    id: "fileSystemPort",
    defaultMessage: "端口"
  },
  deleteFileSystem: {
    id: "deleteFileSystem",
    defaultMessage: "您确定要删除这个群文件系统吗"
  },
  fileMaximumNumber: {
    id: "fileMaximumNumber",
    defaultMessage: "集群允许的最大节点数"
  },
  fileSystemHost: {
    id: "fileSystemHost",
    defaultMessage: "使用集群文件系统的主机"
  },
  fileSystemBatchOperation: {
    id: "fileSystemBatchOperation",
    defaultMessage: "批量操作"
  },
  fileSystemEnabled: {
    id: "fileSystemEnabled",
    defaultMessage: "启用集群文件系统"
  },
  fileSystemStop: {
    id: "fileSystemStop",
    defaultMessage: "停止集群文件系统"
  },
  fileSystemHostDelete: {
    id: "fileSystemHostDelete",
    defaultMessage: "从主机上删除集群文件系统"
  },
  fileSystemState: {
    id: "fileSystemState",
    defaultMessage: "状态"
  },
  fileSystemSucsses: {
    id: "fileSystemSucsses",
    defaultMessage: "集群存储是否成功"
  },
  fileSystemHostSatrt: {
    id: "fileSystemHostSatrt",
    defaultMessage: "启动"
  },
  fileSystemHostStop: {
    id: "fileSystemHostStop",
    defaultMessage: "停止"
  },
  fileHostStart: {
    id: "fileHostStart",
    defaultMessage: "您确定要启动集群文件管理系统"
  },
  fileHostDelete: {
    id: "fileHostDelete",
    defaultMessage: "您确定要从主机上删除集群文件管理系统"
  },
  fileHostStop: {
    id: "fileHostStop",
    defaultMessage: "您确定要停止集群文件管理系统"
  },
  fileSystemAddHost: {
    id: "fileSystemAddHost",
    defaultMessage: "为集群文件系统增加主机"
  },
  fileSystemNotNull: {
    id: "fileSystemNotNull",
    defaultMessage: "集群的最大节点数不能为空"
  },
  fileDescriptionNotNull: {
    id: "fileDescriptionNotNull",
    defaultMessage: "集群文件系统描述不能为空"
  },
  filePortNotNull: {
    id: "filePortNotNull",
    defaultMessage: "端口不能为空"
  },
  fileSystemFormat: {
    id: "fileSystemFormat",
    defaultMessage: "是否格式化"
  },
  fileSystemTypeNull: {
    id: "fileSystemTypeNull",
    defaultMessage: "类型不能为空"
  },
  choiceLun: {
    id: "choiceLun",
    defaultMessage: "请选择一个lunIqn"
  },
  fileSystemIPNull: {
    id: "fileSystemIPNull",
    defaultMessage: "集群文件系统IP不能为空"
  },
  fileSystemUserName: {
    id: "fileSystemUserName",
    defaultMessage: "用户名"
  },
  fileSystemUserPassWord: {
    id: "fileSystemUserPassWord",
    defaultMessage: "密码"
  },
  fileSystemNameNotEmpty: {
    id: "fileSystemNameNotEmpty",
    defaultMessage: "集群文件系统名称不能为空"
  },
  fileSystemTypeNotEmpty: {
    id: "fileSystemTypeNotEmpty",
    defaultMessage: "集群文件系统类型不能为空"
  },
  choiceStorageTypeNotEmpty: {
    id: "choiceStorageTypeNotEmpty",
    defaultMessage: "请选择一个存储类型"
  },
  fileSystemHostName: {
    id: "fileSystemHostName",
    defaultMessage: "主机名称"
  },
  fileSystemResoucePool: {
    id: "fileSystemResoucePool",
    defaultMessage: "资源池"
  },
  choiceResoucePool: {
    id: "choiceResoucePool",
    defaultMessage: "请选择一个资源池"
  },

//备份配置
  backUpConfigName: {
    id: "backUpConfigName",
    defaultMessage: "名称"
  },
  configNameNotEmpty: {
    id: "configNameNotEmpty",
    defaultMessage: "名称不能为空"
  },
  configDescription: {
    id: "configDescription",
    defaultMessage: "描述"
  },
  backUpConfigDelete: {
    id: "backUpConfigDelete",
    defaultMessage: "删除"
  },
  configDeleteSure: {
    id: "configDeleteSure",
    defaultMessage: "您确定要删除此策略吗"
  },
  configEncoding: {
    id: "configEncoding",
    defaultMessage: "编码"
  },
  backUpConfig: {
    id: "backUpConfig",
    defaultMessage: "备份策略"
  },
  configEditAttribute: {
    id: "configEditAttribute",
    defaultMessage: "编辑属性"
  },
  backupManagers: {
    id: "backupManagers",
    defaultMessage: "备份管理器"
  },
  backUpConfigEdit: {
    id: "backUpConfigEdit",
    defaultMessage: "编辑"
  },
  backUpConfigAdd: {
    id: "backUpConfigAdd",
    defaultMessage: "添加"
  },
  createBackUpConfig: {
    id: "createBackUpConfig",
    defaultMessage: "创建备份策略"
  },
  configBasicInfo: {
    id: "configBasicInfo",
    defaultMessage: "基本信息"
  },
  configSnapProtect: {
    id: "configSnapProtect",
    defaultMessage: "快照备份"
  },
  fileSystemBackup: {
    id: "fileSystemBackup",
    defaultMessage: "文件系统备份"
  },
  backUpConfigFullBackup: {
    id: "backUpConfigFullBackup",
    defaultMessage: "完整的备份"
  },
  editBackUpConfig: {
    id: "editBackUpConfig",
    defaultMessage: "编辑备份策略"
  },
  editBackupManager: {
    id: "editBackupManager",
    defaultMessage: "编辑备份管理器"
  },
  BackupCorrectFormatName: {
    id: "Backup.correct.format.name",
    defaultMessage: "请输入正确格式的名称"
  },
  BackupIPNull: {
    id: "Backup.IP.Null",
    defaultMessage: "IP不能为空"
  },
  BackupCorrectFormatIP: {
    id: "Backup.correct.format.IP",
    defaultMessage: "请输入正确格式的IP"
  },
  BackupUser: {
    id: "Backup.User",
    defaultMessage: "用户"
  },
  BackupUserNull: {
    id: "Backup.User.Null",
    defaultMessage: "用户不能为空"
  },
  BackupCorrectFormatUserName: {
    id: "Backup.correct.format.UserName",
    defaultMessage: "请输入正确格式的用户名"
  },
  BackupPassword: {
    id: "Backup.Password",
    defaultMessage: "密码"
  },
  BackupPasswordNull: {
    id: "Backup.Password.null",
    defaultMessage: "密码不能为空"
  },
  BackupCorrectFormatPassword: {
    id: "Backup.CorrectFormat.Password",
    defaultMessage: "请输入正确格式的密码"
  },
  DeleteBackupManager: {
    id: "Delete.backupManager",
    defaultMessage: "删除备份管理器"
  },


  virtualMachinetemplate: {
    id: "virtualMachinetemplate",
    defaultMessage: "虚拟机模板"
  },
  applicationGroupTemplate: {
    id: "applicationGroupTemplate",
    defaultMessage: "应用组模板"
  },
  OVFTemplate: {
    id: "OVFTemplate",
    defaultMessage: "OVF模板"
  },
  OVATemplate: {
    id: "OVATemplate",
    defaultMessage: "OVA模板"
  },
  addVMtemplateCategory: {
    id: "addVMtemplateCategory",
    defaultMessage: "添加虚拟机模板类别"
  },
  addVMtemplateCategorySucc: {
    id: "addVMtemplateCategorySucc",
    defaultMessage: "添加虚拟机模板类别成功"
  },
  addVMtemplateCategoryErr: {
    id: "addVMtemplateCategoryErr",
    defaultMessage: "添加虚拟机模板类别失败"
  },
  deleteCategory: {
    id: "deleteCategory",
    defaultMessage: "删除类别"
  },
  AreYouSureYouWantToDeleteTheCurrentCategory: {
    id: "AreYouSureYouWantToDeleteTheCurrentCategory",
    defaultMessage: "您确定要删除当前类别吗"
  },
  deleteCategorySucc: {
    id: "deleteCategorySucc",
    defaultMessage: "删除类别成功"
  },
  deleteCategoryErr: {
    id: "deleteCategoryErr",
    defaultMessage: "删除类别失败"
  },
  showAllTemplates: {
    id: "showAllTemplates",
    defaultMessage: "显示全部模板"
  },
  thisCategoryCanNotBeDeleted: {
    id: "thisCategoryCanNotBeDeleted",
    defaultMessage: "该分类不可删除"
  },
  disk: {
    id: "disk",
    defaultMessage: "磁盘"
  },
  createCategory: {
    id: "createCategory",
    defaultMessage: "创建类别"
  },
  category: {
    id: "category",
    defaultMessage: "类别"
  },
  PleaseEnterTheContent: {
    id: "PleaseEnterTheContent",
    defaultMessage: "请输入内容"
  },
  editTemplate: {
    id: "editTemplate",
    defaultMessage: "编辑模板"
  },
  editTemplateSucc: {
    id: "editTemplateSucc",
    defaultMessage: "编辑模板成功"
  },
  editTemplateErr: {
    id: "editTemplateErr",
    defaultMessage: "编辑模板失败"
  },
  deleteTemplate: {
    id: "deleteTemplate",
    defaultMessage: "删除模板"
  },
  areYouSureYouWantDeleteTheCurrentTemplate: {
    id: "areYouSureYouWantDeleteTheCurrentTemplate",
    defaultMessage: "您确定要删除当前模板吗"
  },
  deleteTemplateSucc: {
    id: "deleteTemplateSucc",
    defaultMessage: "删除模板成功"
  },
  deleteTemplateErr: {
    id: "deleteTemplateErr",
    defaultMessage: "删除模板失败"
  },
  advanced: {
    id: "advanced",
    defaultMessage: "高级"
  },
  conversionTemplate: {
    id: "conversionTemplate",
    defaultMessage: "转换模板"
  },
  templateStatus: {
    id: "templateStatus",
    defaultMessage: "模板状态"
  },
  conversion: {
    id: "conversion",
    defaultMessage: "转换"
  },
  createdLocally: {
    id: "createdLocally",
    defaultMessage: "从本地创建"
  },
  createdISO: {
    id: "createdISO",
    defaultMessage: "从ISO创建"
  },
  addMirror: {
    id: "addMirror",
    defaultMessage: "添加镜像"
  },
  isoDisk: {
    id: "isoDisk",
    defaultMessage: "ISO磁盘"
  },
  pleaseEnterNumberCPUs: {
    id: "pleaseEnterNumberCPUs",
    defaultMessage: "请输入CPU数量"
  },
  pleaseEnterNumberRams: {
    id: "pleaseEnterNumberRams",
    defaultMessage: "请输入内存数量"
  },
  pleaseEnterName: {
    id: "pleaseEnterName",
    defaultMessage: "请输入名称"
  },
  pleaseSelectCategory: {
    id: "pleaseSelectCategory",
    defaultMessage: "请选择类别"
  },
  CPUHotAdd: {
    id: "CPUHotAdd",
    defaultMessage: "CPU热添加"
  },
  RAMHotAdd: {
    id: "RAMHotAdd",
    defaultMessage: "内存热添加"
  },
  name: {
    id: "name",
    defaultMessage: "名称"
  },
  rackEditDescriptionTemplate: {
    id: "rackEditDescription",
    defaultMessage: "描述"
  },
  pleaseEnterDesc: {
    id: "pleaseEnterDesc",
    defaultMessage: "请输入描述"
  },

  //登录
  loginUserName: {
    id: "loginUserName",
    defaultMessage: "用户名"
  },
  loginDevicePID: {
    id: "login.device.pid",
    defaultMessage: "Device ID"
  },
  loginPassword: {
    id: "loginPassword",
    defaultMessage: "密码"
  },
  choiceLanguage: {
    id: "choiceLanguage",
    defaultMessage: "选择语言"
  },
  authType: {
    id: "auth.type",
    defaultMessage: "登录方式"
  },
  authTypePassword: {
    id: "auth.type.password",
    defaultMessage: "密码"
  },
  authTypeUsb: {
    id: "auth.type.usb",
    defaultMessage: "USB 密钥"
  },
  login: {
    id: "login",
    defaultMessage: "登录"
  },
  connectUSBKey:{
    id: "connect.usb.key",
    defaultMessage: "Connect USBKey"
  },
  unlockUSBKey:{
    id:"unlock.usb.key",
    defaultMessage:"Unlock USBKey"
  },
  rememberPassword: {
    id: "rememberPassword",
    defaultMessage: "记住密码"
  },
  enterUSBPIN:{
    id:"enter.usb.pin",
    defaultMessage: "Enter PIN"
  },
  missingExtension:{
    id: "missing.extension",
    defaultMessage: "Extension missing, please install extension"
  },
  missingUSBKey:{
    id: "missing.usb.key",
    defaultMessage: "Cannot find USB Key, make sure it's connected and pid is correct"
  },
  missingUSBKeyConfig:{
    id: "missing.usb.key.config",
    defaultMessage: "Cannot find USB Key config data, please contact your system admin"
  },
  usbVerifyFailed:{
    id: "usb.user.verify.failed",
    defaultMessage: "Failed to verify USBKey"
  },
  enableUSBKey:{
    id:"usb.enable.usb.key",
    defaultMessage: "Enable USBKey"
  },
  selectUSBKeyAuthMode:{
    id: "select.usb.key.auth.mode",
    defaultMessage: "Select Mode"
  },
  usbKeyLabelSeed:{
    id: "usb.key.label.seed",
    defaultMessage: "Seed"
  },
  usbKeyLabelMasterPin:{
    id: "usb.key.label.master.pin",
    defaultMessage: "Master PIN"
  },
  usbKeyLabelPid:{
    id: "usb.key.label.pid",
    defaultMessage: "PID"
  },
  usbKeyLabelUserPin:{
    id: "usb.key.label.user.pin",
    defaultMessage: "PIN"
  },
  usbKeyLabelUserNewPin:{
    id: "usb.key.label.user.new.pin",
    defaultMessage: "New PIN"
  },
  usbKeyLabelSecreteKey: {
    id: "usb.key.label.secrete.key",
    defaultMessage: "Secrete Key"
  },
  usbKeyLabelModeFactory:{
    id: "usb.key.label.mode.factory",
    defaultMessage: "Factory"
  },
  usbKeyLabelModeMaster:{
    id: "usb.key.label.mode.master",
    defaultMessage: "Master"
  },
  usbKeyLabelModeUser:{
    id: "usb.key.label.mode.user",
    defaultMessage: "User'"
  },
  usbKeySeedMessage:{
    id: "usb.key.seed.message",
    defaultMessage: "Must enter alphanumeric string between 2-20 characters"
  },
  usbKeySecreteKeyMessage:{
    id: "usb.key.secrete.key.message",
    defaultMessage: "Must enter alphanumeric string between 2-20 characters"
  },
  usbKeyPidMessage:{
    id: "usb.key.pid.message",
    defaultMessage: "Must enter alphanumeric string 8 characters long"
  },
  usbKeyPinMessage:{
    id: "usb.key.pin.message",
    defaultMessage: "Must enter alphanumeric string 16 characters long"
  },

    //  审计日志
    success:{
        id: "audit.log.success",
        defaultMessage: "成功"
    },
    failure:{
        id: "audit.log.failure",
        defaultMessage: "失败"
    },
    INFO:{
        id: "audit.log.info",
        defaultMessage: "提示"
    },
    WARN:{
        id: "audit.log.warn",
        defaultMessage: "告警"
    },
    ERROR:{
        id: "audit.log.error",
        defaultMessage: "重要"
    },
    DATACENTER:{
        id: "audit.log.datacenter",
        defaultMessage: "数据中心"
    },
    RACK:{
        id: "audit.log.rack",
        defaultMessage: "资源池"
    },
    MACHINE:{
        id: "audit.log.machine",
        defaultMessage: "服务器"
    },
    VIRTUAL_DATACENTER:{
        id: "audit.log.virtual.datacenter",
        defaultMessage: "虚拟数据中心"
    },
    VIRTUAL_APPLIANCE:{
        id: "audit.log.virtual.appliance",
        defaultMessage: "应用组"
    },
    VIRTUAL_MACHINE:{
        id: "audit.log.virtual.machine",
        defaultMessage: "虚拟机"
    },
    ENTERPRISE:{
        id: "audit.log.enterprise",
        defaultMessage: "企业"
    },
    USER:{
        id: "audit.log.user",
        defaultMessage: "用户"
    },
    UNKNOWN:{
        id: "audit.log.unkown",
        defaultMessage: "未知"
    },
    PLATFORM:{
        id: "audit.log.platform",
        defaultMessage: "平台"
    },
    REPOSITORY:{
        id: "audit.log.license.repository",
        defaultMessage: "模板库"
    },
    STORAGE_POOL:{
        id: "audit.log.storage.pool",
        defaultMessage: "存储池"
    },
    VIRTUAL_STORAGE:{
        id: "audit.log.virtual.storage",
        defaultMessage: "虚拟存储"
    },
    VOLUME:{
        id: "audit.log.volume",
        defaultMessage: "大小"
    },
    NETWORK:{
        id: "audit.log.network",
        defaultMessage: "网络"
    },
    SECURITY:{
        id: "audit.log.security",
        defaultMessage: "安全"
    },
    APPLIANCE_MANAGER:{
        id: "audit.log.appliance.manager",
        defaultMessage: "APPLIANCE_MANAGER"
    },
    PERSISTENT_CONVERTER:{
        id: "audit.log.persistent.converter",
        defaultMessage: "PERSISTENT_CONVERTER"
    },
    API:{
        id: "audit.log.api",
        defaultMessage: "接口"
    },
    WORKLOAD:{
        id: "audit.log.workload",
        defaultMessage: "WORKLOAD"
    },
    ROLE:{
        id: "audit.log.role",
        defaultMessage: "角色"
    },
    ROLE_LDAP:{
        id: "audit.log.role.ldap",
        defaultMessage: "ROLE_LDAP"
    },
    SCOPE:{
        id: "audit.log.scope",
        defaultMessage: "SCOPE"
    },
    HIGH_AVAILABILITY:{
        id: "audit.log.high.availability",
        defaultMessage: "HIGH_AVAILABILITY"
    },
    PRICING_TEMPLATE:{
        id: "audit.log.pricing.template",
        defaultMessage: "PRICING_TEMPLATE"
    },
    COSTCODE_CURRENCY:{
        id: "audit.log.costcode.currency",
        defaultMessage: "COSTCODE_CURRENCY"
    },
    COSTCODE:{
        id: "audit.log.costcode",
        defaultMessage: "COSTCODE"
    },
    STORAGE_DEVICE:{
        id: "audit.log.storage.device",
        defaultMessage: "STORAGE_DEVICE"
    },
    SHARE_FILE_SYSTEM:{
        id: "audit.log.share.file.system",
        defaultMessage: "共享文件系统"
    },
    INSTANCE_CONVERTER:{
        id: "audit.log.instance.converter",
        defaultMessage: "INSTANCE_CONVERTER"
    },
    ALARM_WARNING:{
        id: "audit.log.alarm.warning",
        defaultMessage: "告警"
    },
    REMOTE_SERVICE:{
        id: "audit.log.remote.service",
        defaultMessage: "远程服务"
    },
    LICENSES_MANAGE:{
        id: "audit.log.license.manager",
        defaultMessage: "许可证"
    },


    //------------vdc,dc任务列表(操作分类)
    // VIRTUAL_MACHINE:{
    //     id: "task.virtual.machine",
    //     defaultMessage: "虚拟机"
    // },
    // VIRTUAL_APPLIANCE:{
    //     id: "task.virtual.appliance",
    //     defaultMessage: "虚拟应用"
    // },
    VIRTUAL_MACHINE_TEMPLATE:{
        id: "task.virtual.machine.template",
        defaultMessage: "虚拟机模板"
    },
    // MACHINE:{
    //     id: "task.machine",
    //     defaultMessage: "物理机"
    // },
    CONVERSION:{
        id: "task.conversion",
        defaultMessage: "转换"
    },
    // REPOSITORY:{
    //     id: "task.repository",
    //     defaultMessage: "模板库"
    // },
    // SHARE_FILE_SYSTEM:{
    //     id: "task.share.file.system",
    //     defaultMessage: "共享文件系统"
    // },
    // VIRTUAL_DATACENTER:{
    //     id: "task.virtual.datacenter",
    //     defaultMessage: "虚拟数据中心"
    // },
    DESKTOP:{
        id: "task.desktop",
        defaultMessage: "桌面"
    },
    // RACK:{
    //     id: "task.rack",
    //     defaultMessage: "资源池"
    // },
    SECURITYAUDITLOG:{
        id: "task.securityauditlog",
        defaultMessage: "审计日志"
    },
    // DATACENTER:{
    //     id: "task.datacenter",
    //     defaultMessage: "数据中心"
    // },
    ACLPOLICY:{
        id: "task.aclpolicy",
        defaultMessage: "ACL策略"
    },

    //------------操作描述
    DEPLOY:{
        id: "task.deploy",
        defaultMessage: "部署"
    },
    UNDEPLOY:{
        id: "task.undeploy",
        defaultMessage: "取消部署"
    },
    RECONFIGURE:{
        id: "task.reconfigure",
        defaultMessage: "重新配置"
    },
    POWER_STATE:{
        id: "task.power.state",
        defaultMessage: "电源状态"
    },
    CONNECTUSB:{
        id: "task.connectusb",
        defaultMessage: "连接USB"
    },
    CONNECTPCI:{
        id: "task.connectpci",
        defaultMessage: "连接PCI"
    },
    POWER_ON:{
        id: "task.power.on",
        defaultMessage: "开机"
    },
    POWER_OFF:{
        id: "task.power.off",
        defaultMessage: "关机"
    },
    PAUSE:{
        id: "task.pause",
        defaultMessage: "暂停"
    },
    RESUME:{
        id: "task.resume",
        defaultMessage: "恢复"
    },
    RESET:{
        id: "task.reset",
        defaultMessage: "重置"
    },
    INSTANCE:{
        id: "task.instance",
        defaultMessage: "实例化模板"
    },
    ACTION_PLAN:{
        id: "task.action.plan",
        defaultMessage: "计划任务"
    },
    HA_DEPLOY:{
        id: "task.ha.deploy",
        defaultMessage: "因高可用部署虚拟机"
    },
    HA_UNDEPLOY:{
        id: "task.ha.undeploy",
        defaultMessage: "因高可用取消部署虚拟机"
    },
    REFRESH:{
        id: "task.refresh",
        defaultMessage: "刷新"
    },
    MIGRATE:{
        id: "task.migrate",
        defaultMessage: "迁移"
    },
    CLONE:{
        id: "task.clone",
        defaultMessage: "克隆"
    },
    MIGRATEDISK:{
        id: "task.migratedisk",
        defaultMessage: "磁盘迁移"
    },
    BACKUP:{
        id: "task.backup",
        defaultMessage: "备份"
    },
    REVERT:{
        id: "task.revert",
        defaultMessage: "恢复"
    },
    SNAPSHOT:{
        id: "task.snapshot",
        defaultMessage: "快照"
    },
    DELETEBACKUP:{
        id: "task.deletebackup",
        defaultMessage: "删除备份"
    },
    HOSTUPDATE:{
        id: "task.hostupdate",
        defaultMessage: "主机更新"
    },
    LOADVIRTIO:{
        id: "task.loadvirtio",
        defaultMessage: "loadvirtio"
    },
    RELOAD:{
        id: "task.reload",
        defaultMessage: "重新加载"
    },
    SETBIOS:{
        id: "task.setbios",
        defaultMessage: "设置BIOS"
    },
    SETQOS:{
        id: "task.setqos",
        defaultMessage: "设置QOS"
    },
    CREATE_BACKUP_POLICY:{
        id: "task.create.backup.policy",
        defaultMessage: "创建备份策略"
    },
    DELETE_BACKUP_POLICY:{
        id: "task.delete.backup.policy",
        defaultMessage: "删除备份策略"
    },
    UNAVAILABLE_TASK:{
        id: "task.unavailable.task",
        defaultMessage: "不可用的任务"
    },
    FORMAT:{
        id: "task.format",
        defaultMessage: "格式化"
    },
    MOUNT:{
        id: "task.mount",
        defaultMessage: "挂载"
    },
    UMOUNT:{
        id: "task.umount",
        defaultMessage: "卸载"
    },
    CONFIGSECURITYGROUP:{
        id: "task.configsecuritygroup",
        defaultMessage: "配置安全组"
    },
    DECONFIGSECURITYGROUP:{
        id: "task.deconfigsecuritygroup",
        defaultMessage: "取消安全组配置"
    },
    MAKE_PERSISTENT:{
        id: "task.make.persistent",
        defaultMessage: "实例化"
    },
    CONVERT_DISK_FROM_INSTANCE:{
        id: "task.convert.disk.from.instance",
        defaultMessage: "把实例转换为磁盘"
    },
    DOWNLOAD:{
        id: "task.download",
        defaultMessage: "下载"
    },
    CONVERT_DISK:{
        id: "task.convert_disk",
        defaultMessage: "磁盘转换"
    },
    REFRESH_REPOSITORY:{
        id: "task.refresh.repository",
        defaultMessage: "重新发现模板库模板"
    },
    POWER_ON_MACHINE:{
        id: "task.power.on.machine",
        defaultMessage: "开机"
    },
    POWER_OFF_MACHINE:{
        id: "task.power.off.machine",
        defaultMessage: "关机"
    },
    MAINTAIN:{
        id: "task.maintain",
        defaultMessage: "维护"
    },
    START:{
        id: "task.start",
        defaultMessage: "开始"
    },
    HALTED:{
        id: "task.halted",
        defaultMessage: "停止"
    },
    DISCOVER_MACHINE:{
        id: "task.discover.machine",
        defaultMessage: "发现物理机"
    },
    DELETE_MACHINE:{
        id: "task.delete.machine",
        defaultMessage: "删除物理机"
    },
    RESET_MACHINE:{
        id: "task.reset.machine",
        defaultMessage: "重置物理机"
    },
    EXIT_MAINTAIN_MACHINE:{
        id: "task.exit.maintain.machine",
        defaultMessage: "退出维护模式"
    },
    CREATE_RACK:{
        id: "task.create.rack",
        defaultMessage: "创建资源池"
    },
    UPDATE_RACK:{
        id: "task.update.rack",
        defaultMessage: "修改资源池"
    },
    DELETE_RACK:{
        id: "task.delete.rack",
        defaultMessage: "删除资源池"
    },
    DESKTOP_ON:{
        id: "task.desktop.on",
        defaultMessage: "开机更新虚拟机"
    },
    DESKTOP_OFF:{
        id: "task.desktop.off",
        defaultMessage: "关机更新虚拟机"
    },
    DESKTOP_SHUTOFF:{
        id: "task.desktop.shutoff",
        defaultMessage: "强制关机更新虚拟机"
    },
    DESKTOP_PAUSED:{
        id: "task.desktop.paused",
        defaultMessage: "暂停更新虚拟机"
    },
    DESKTOP_RESTORE:{
        id: "task.desktop.restore",
        defaultMessage: "恢复更新虚拟机"
    },
    DESKTOP_RESET:{
        id: "task.desktop.reset",
        defaultMessage: "桌面重启"
    },
    DEPLOY_DESKTOP:{
        id: "task.deploy.desktop",
        defaultMessage: "部署更新虚拟机"
    },
    UNDEPLOY_DESKTOP:{
        id: "task.undeploy.desktop",
        defaultMessage: "去下部署虚拟机"
    },
    UPDATE_DESKTOP:{
        id: "task.update.desktop",
        defaultMessage: "编辑更新虚拟机"
    },
    DELETE_DESKTOP:{
        id: "task.delete.desktop",
        defaultMessage: "删除更新虚拟机"
    },
    OU_CREATE:{
        id: "task.ou.create",
        defaultMessage: "创建组织单元"
    },
    OU_DELETE:{
        id: "task.ou.delete",
        defaultMessage: "删除组织单元"
    },
    USER_CREATE:{
        id: "task.user.create",
        defaultMessage: "创建用户"
    },
    USER_DELETE:{
        id: "task.user.delete",
        defaultMessage: "删除用户"
    },
    USER_UPDATE:{
        id: "task.user.update",
        defaultMessage: "修改用户"
    },
    ADDAREA:{
        id: "task.addarea",
        defaultMessage: "ADDAREA"
    },
    ALLOCATEUSER:{
        id: "task.allocateuser",
        defaultMessage: "ALLOCATEUSER"
    },
    ALLOCATEDESKTOP:{
        id: "task.allocatedesktop",
        defaultMessage: "ALLOCATEDESKTOP"
    },
    CREATE_ACCESS_POLICY:{
        id: "task.create.access.policy",
        defaultMessage: "创建ACCESS策略"
    },
    MODIFY_ACCESS_POLICY:{
        id: "task.modify.access.policy",
        defaultMessage: "修改ACCESS策略"
    },
    DELETE:{
        id: "task.delete",
        defaultMessage: "删除"
    },
    UPDATE:{
        id: "task.update",
        defaultMessage: "修改"
    },
    CREATE:{
        id: "task.create",
        defaultMessage: "创建"
    },
    CREATE_BACKUP_CONFIG:{
        id: "task.create.backup.config",
        defaultMessage: "创建备份配置"
    },
    DELETE_BACKUP_CONFIG:{
        id: "task.delete.backup.config",
        defaultMessage: "删除备份配置"
    },
    UPDATE_BACKUP_CONFIG:{
        id: "task.update.backup.config",
        defaultMessage: "修改备份配置"
    },
    UPDATE_BACKUP_MANAGER:{
        id: "task.update.backup.manager",
        defaultMessage: "修改备份配置"
    },
    UPDATE_BACKUP_PROPERTY:{
        id: "task.update.backup.property",
        defaultMessage: "UPDATE_BACKUP_PROPERTY"
    },
    DELETE_ACCESS_POLICY:{
        id: "task.delete.access.policy",
        defaultMessage: "删除ACCESS策略"
    },
    COMPRESSION_AUDITLOG:{
        id: "task.compression.auditlog",
        defaultMessage: "压缩审计日志"
    },
    CONFIGURE_MACHINE_ACLPOLICY:{
        id: "task.configure.machine.aclpolicy",
        defaultMessage: "物理机应用ACL策略"
    },
    DECONFIGURE_MACHINE_ACLPOLICY:{
        id: "task.deconfigure.machine.aclpolicy",
        defaultMessage: "物理机取消应用ACL策略"
    },
    MATERIALIZE_SPEC:{
        id: "task.materialize.spec",
        defaultMessage: "创建应用组模板"
    }



});

export default messages;