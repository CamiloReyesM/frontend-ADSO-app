import {createRouter, createWebHistory} from 'vue-router'
import proveedores from '../views/proveedores/proveedores.vue'
import Orden_Compra from '../views/orden_compra/compras.vue'
import Inventarios from '../views/inventario/inventarios.vue'
import Facturacion from '../views/facturacion/facturacion.vue'
import Clientes from '../views/clientes/clientes.vue'
import Actividades from '../views/actividades/actividades.vue'
import Paises from '../views/paises/paises.vue'
import Cargos from '../views/cargos/cargos.vue'
import LayoutMain from '../components/LayoutMain.vue'
import Login from '../components/Login.vue'
import Proveedores from '../views/proveedores/proveedores.vue'

const routes =[

{
    path:'/',
    name:'home',
    component:LayoutMain,
},
{
    path:'/login',
    name:'login',
    component:Login,
},
{
    path:'/Proveedores',
    name:'Proveedores',
    component: Proveedores,
},
{
    path:'/OrdenCompra',
    name:'OrdenCompra',
    component: Orden_Compra,
},
{
    path:'/Inventarios',
    name:'Inventarios',
    component: Inventarios,
},
{
    path:'/Facturacion',
    name:'Facturacion',
    component: Facturacion,
},
{
    path:'/Clientes',
    name:'Clientes',
    component: Clientes,
},
{
    path:'/Actividades',
    name:'Actividades',
    component: Actividades,
},
{
    path:'/Paises',
    name:'Paises',
    component:Paises,
},
{
    path:'/Cargos',
    name:'Cargos',
    component: Cargos,
}

]

const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router;