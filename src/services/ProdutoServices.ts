import services from './Services';
import Produto from '../models/Produto';
import { AxiosResponse } from 'axios';

class ProdutoServices {

    async getProdutos(): Promise<AxiosResponse<any, any>> {
        return services.get('/produtos');
    }

    async getProdutoById(id: number): Promise<AxiosResponse<any, any>> {
        return services.get(`/produtos/${id}`);
    }

    async createProduto(produto: Produto): Promise<AxiosResponse<any, any>> {
        return services.post('/produtos', produto);
    }

    async updateProduto(produto: Produto): Promise<AxiosResponse<any, any>> {
        return services.put(`/produtos/${produto.id}`, produto);
    }

    async deleteProduto(id: number): Promise<AxiosResponse<any, any>> {
        return services.delete(`/produtos/${id}`);
    }

    
    async getCategorias(): Promise<AxiosResponse<any, any>> {
        return services.get('/categorias');
    }
}

export default new ProdutoServices();
