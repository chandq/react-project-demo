import React from 'react'
const rootRoute = [{
		path: '/',
		component: require('./pages/portal/components/appPortal').default,
		childRoutes: [
			require('./pages/login'),
			require('./routes'),
			{
				path: 'error', // 没有权限时重定向到404
				component: require('./components/notFound/index').default,
			}, {
				path: '*',
				component: require('./pages/portal/components/appPortal').default,
			}
		]
	}]
export default rootRoute
