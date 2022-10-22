import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class freeApiService{

    constructor(private httpClient: HttpClient){}

    getproducts(): Observable<any> {
        return this.httpClient.get("https://fakestoreapi.com/products")
    }

    getAllMensProducts(): Observable<any> {
        return this.httpClient.get("https://fakestoreapi.com/products/category/men's%20clothing")
    }

    getAllElectronicsProducts(): Observable<any> {
        return this.httpClient.get("https://fakestoreapi.com/products/category/electronics")
    }
}