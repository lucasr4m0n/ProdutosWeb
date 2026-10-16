import { Routes } from '@angular/router';
import { CadastroProdutos } from './components/pages/cadastro-produtos/cadastro-produtos';
import { ConsultaProdutos } from './components/pages/consulta-produtos/consulta-produtos';
import { EdicaoProdutos } from './components/pages/edicao-produtos/edicao-produtos';

export const routes: Routes = [
    {
        path: 'pages/cadastro-produtos', //caminho da rota
        component: CadastroProdutos //componente
    },
    {
        path: 'pages/consulta-produtos', //caminho da rota
        component: ConsultaProdutos //componente
    },
    {
        path: 'pages/edicao-produtos', //caminho da rota
        component: EdicaoProdutos //componente
    },
    {
        path: '', pathMatch: 'full', //rota inicial do projeto
        redirectTo: '/pages/consulta-produtos' //redirecionando
    }
];
