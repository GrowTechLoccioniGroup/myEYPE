import { Injectable }         from '@angular/core';
import { Http,
         Response,
         Headers,
         RequestOptions }     from '@angular/http';
import { Observable }         from 'rxjs/Rx';
import { ConnectionService }  from '../../connection/connection.service';
import { ClassParameters }       from '../../classes/class.parameters';

@Injectable()
export class ControlCallsService {
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

    public SetParameters = (body: ClassParameters): Observable<Response> => {
        return this.http.put(this.url + '/values/setparameters', JSON.stringify(body), this.options).catch(this.handleError);
    }

    public SetCurtainsDown = (setCurtains: boolean): Observable<Response> => {
        return this.http.put(this.url + '/values/setcurtains/0', JSON.stringify(setCurtains), this.options).catch(this.handleError);
    }

    public SetCurtainsUp = (setCurtains: boolean): Observable<Response> => {
        return this.http.put(this.url + '/values/setcurtains/1', JSON.stringify(setCurtains), this.options).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}