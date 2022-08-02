import { useParams } from 'react-router-dom';
import { Table} from "react-bootstrap";
import cart from "../delete.png";

const ItemListContainer = () => {
    return (
        <div className="App">
          <main>
                <section id="products">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 pb-3">
                                <h2>Bienvenidos al Carrito de Compras</h2>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12">
                                <Table striped>
                                    <thead>
                                        <tr>
                                        <th></th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td width="5%"><button className='btn-primary'><img src={cart} className="img-fluid" alt="logo" /></button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ItemListContainer;