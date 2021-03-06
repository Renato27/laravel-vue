import HelloWorld from '@/components/HelloWorld'
import AccountsList from '@/components/Accounts/list'
import AccountsView from '@/components/Accounts/View'
import AccountsCreate from '@/components/Accounts/create'
import AccountsEdit from '@/components/Accounts/edit'


const routes = [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/contas', component: AccountsList },
    { path: '/contas/novo', component: AccountsCreate },
    { path: '/contas/:id', component: AccountsView },
    { path: '/contas/:id/editar', component: AccountsEdit }


]

export default routes