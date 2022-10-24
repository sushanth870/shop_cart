import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import {map} from 'rxjs/operators';
@Injectable()
export class freeApiService{

    constructor(private httpClient: HttpClient){}

    getproducts(): Observable<any> {
        return this.httpClient.get("https://fakestoreapi.com/products").pipe(map((res:any)=>{
            return res;
        }))
    }

    getAllMensProducts(): Observable<any> {
        return this.httpClient.get("https://fakestoreapi.com/products/category/men's%20clothing")
    }

    getAllElectronicsProducts(): Observable<any> {
        return this.httpClient.get("https://fakestoreapi.com/products/category/electronics")
    }

    getProductDetails(id:number): Observable<any> {
        
        return this.httpClient.get("https://fakestoreapi.com/products/"+id);
    } 
}