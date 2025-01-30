import axios, { AxiosResponse } from 'axios';
import Categoria from '../models/Categoria';

class CategoriaServices {
    async getCategorias(): Promise<AxiosResponse<any, any>> {
        return axios.get('/categorias');
    }

    async getCategoriaById(id: number): Promise<AxiosResponse<any, any>> {
        return axios.get(`/categorias/${id}`);
    }

    async createCategoria(categoria: Categoria): Promise<AxiosResponse<any, any>> {
        return axios.post('/categorias', categoria);
    }

    async updateCategoria(categoria: Categoria): Promise<AxiosResponse<any, any>> {
        return axios.put(`/categorias/${categoria.id}`, categoria);
    }

    async deleteCategoria(id: number): Promise<AxiosResponse<any, any>> {
        return axios.delete(`/categorias/${id}`);
    }
}

export default new CategoriaServices();
