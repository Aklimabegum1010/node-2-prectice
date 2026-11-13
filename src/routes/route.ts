import {  IncomingMessage, ServerResponse } from "http";
import productHandler from "../controllers/product.controller";

const routeHandler =(req: IncomingMessage, res: ServerResponse) => {
    //   console.log("Request : ", req);

    const url = req.url;
    const method = req.method
    
    if (url === "/" && method === "GET") {
    // console.log("This is root route");

    res.writeHead(200, { "Content-Type":"application/json"})
    res.end(JSON.stringify({message: "This is root route"}))  

  } else if (url?.startsWith("/products")) {
     
     productHandler(req, res);

  }
  else{
    // console.log("This route is not defined");
    res.writeHead(404, { "Content-Type":"application/json"})
    res.end(JSON.stringify({message: "Route not found"}))  
  }
}


export default routeHandler;
