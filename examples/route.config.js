/* eslint-disable */
import navs from "./nav.config.json";
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const load = function(path) {
  return r => require.ensure([], () =>
    r(require(`./pages${path}.vue`))
    );
};

const loadDocs = function(path) {
  return r => require.ensure([], () =>
    r(require(`./docs${path}.md`))
    );
};

const registerRoutes = function() {
	const routes = Object.keys(navs).map(key => {
		const nav = navs[key];
		let route = {
			path: nav.path,
			component: load(nav.path),
			children: []
		}
		if(nav.groups){
			nav.groups.forEach(group => {
				const list = group.list;
				list.forEach(item => {
					route.children.push({
						path: item.path.slice(1),
						component: loadDocs(item.path),
						meta: {
							title: item.title
						}
					})
				})
				
			})
		}
		// route.push({
		//   path: '/',
		//   component: load(nav.path)
		// })
		return route;
	})
	return routes;
}


const routes = registerRoutes();
routes.push({
  path: '/', redirect: 'component'
})

//redirect
routes.push({
  path: '*', redirect: 'component'
})

console.log(routes)
export default new Router({
	routes
}) 