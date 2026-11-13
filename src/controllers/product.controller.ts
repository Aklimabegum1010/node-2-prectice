import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productHandler = (req: IncomingMessage, res: ServerResponse) => {

    const url = req.url;
    const method = req.method

    if(url === "/products" && method === "GET"){

  const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100
    },
    {
        id: 2,
        name: "Product 2",
        price: 200
    }
    
]
productService()
        
        res.writeHead(200, { "Content-Type":"application/json"})
        res.end(JSON.stringify({
        message: "Products retrieved successfully",
        data:products
    }))
    }
 
}


export default productHandler;