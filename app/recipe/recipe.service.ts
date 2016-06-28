import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Config } from '../app.constants';
import { ClassOptions } from '../classes/class.options';
import { ClassParameters } from '../classes/class.parameters';
import { ClassRecipe } from '../classes/class.recipe';

@Injectable()
export class RecipeService {
    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _config: Config) {
        this.actionUrl = _config.ServerWithApiUrl;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getParameters = (): Observable<Response> => {
        return this._http.get(this.actionUrl + "/values/getparameters");
    }

    public getOptions = (): Observable<Response> => {
        return this._http.get(this.actionUrl + "/values/getoptions");
    }

    public getRecipes = (): Observable<Response> => {
        return this._http.get(this.actionUrl + "/recipes");
    }

    /*public getSingle = (id: number): Observable<Response> => {
        return this._http.get(this.actionUrl + id);
    }*/
    
    // add
    /*public post = (itemName: string): Observable<Response> => {
        var toAdd = JSON.stringify({ ItemName: itemName });

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers });
    }*/

    // update
    public setParameters = (itemToUpdate: ClassParameters): Observable<Response> => {
        return this._http.put(this.actionUrl + "/values/setparameters", JSON.stringify(itemToUpdate), { headers: this.headers });
    }

    public setOptions = (itemToUpdate: ClassOptions): Observable<Response> => {
        return this._http.put(this.actionUrl + "/values/setoptions", JSON.stringify(itemToUpdate), { headers: this.headers });
    }

    public setCurtainsDown = (setCurtains: boolean): Observable<Response> => {
        return this._http.put(this.actionUrl + "/values/setcurtains/0", JSON.stringify(setCurtains), { headers: this.headers });
    }

    public setCurtainsUp = (setCurtains: boolean): Observable<Response> => {
        return this._http.put(this.actionUrl + "/values/setcurtains/1", JSON.stringify(setCurtains), { headers: this.headers });
    }

    public setRecipe = (itemToUpdate: ClassRecipe): Observable<Response> => {
        return this._http.put(this.actionUrl + "/recipesapply", JSON.stringify(itemToUpdate), { headers: this.headers });
    }
    /*
    public delete = (id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl + id);
    }
    */

}


