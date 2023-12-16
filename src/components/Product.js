import Oneproduct from './Oneproduct';
import { Manga } from '../data/datax';
const Products = () => {
    return (
        <main className="container">
            <div className="row mb-2">
                {Manga.map(prod => <Oneproduct title={prod.title} price={prod.price} thumbnail={prod.thumbnail} />)}
            </div>
        </main>
    );
}
export default Products