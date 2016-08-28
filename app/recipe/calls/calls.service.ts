import { Injectable }         from '@angular/core';
import { Http,
         Response,
         Headers,
         RequestOptions }     from '@angular/http';
import { Observable }         from 'rxjs/Rx';
import { ConnectionService }  from '../../connection/connection.service';
import { ClassRecipe }        from '../../classes/class.recipe';

@Injectable()
export class RecipeCallsService {
    private url: string;
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http, private connectionService: ConnectionService) {
        this.url = connectionService.ServerAddress;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

        this.options = new RequestOptions({ headers: this.headers });
    }

    public SetRecipe = (itemToUpdate: ClassRecipe): Observable<Response> => {
        return this.http.put(this.url + '/recipes/apply', JSON.stringify(itemToUpdate), this.options).catch(this.handleError);
    }

    public GetAllRecipes = (): Observable<Response> => {
        return this.http.get(this.url + '/recipes').catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}