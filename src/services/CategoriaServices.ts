import services from './Services'; 
import Categoria from '../models/Categoria';
import { AxiosResponse } from 'axios';

class CategoriaServices {
    async getCategorias(): Promise<AxiosResponse<any, any>> {
        return services.get('/categorias'); 
    }

    async getCategoriaById(id: number): Promise<AxiosResponse<any, any>> {
        return services.get(`/categorias/${id}`);
    }

    async createCategoria(categoria: Categoria): Promise<AxiosResponse<any, any>> {
        return services.post('/categorias', categoria);
    }

    async updateCategoria(categoria: Categoria): Promise<AxiosResponse<any, any>> {
        return services.put(`/categorias/${categoria.id}`, categoria);
    }

    async deleteCategoria(id: number): Promise<AxiosResponse<any, any>> {
        return services.delete(`/categorias/${id}`);
    }
}

export default new CategoriaServices();
