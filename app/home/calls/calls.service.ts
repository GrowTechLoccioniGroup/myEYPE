import { Injectable }         from '@angular/core';
import { Http,
         Response,
         Headers,
         RequestOptions }     from '@angular/http';
import { Observable }         from 'rxjs/Rx';
import { ConnectionService }  from '../../connection/connection.service';
import { ClassParameters }    from '../../classes/class.parameters';
import { ClassOptions }       from '../../classes/class.options';

@Injectable()
export class HomeCallsService {
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

    public GetAllParameters = (): Observable<Response> => {
        return this.http.get(this.url + '/values/getparameters').catch(this.handleError);
    }

    public GetAllOptions = (): Observable<Response> => {
        return this.http.get(this.url + '/values/getoptions').catch(this.handleError);
    }
    public SetOptions = (body: ClassOptions): Observable<Response> => {
        return this.http.put(this.url + '/values/setoptions', JSON.stringify(body), this.options).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}