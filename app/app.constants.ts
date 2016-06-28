import { Injectable } from '@angular/core'

@Injectable()
export class Config {
    public ServerWithApiUrl = "http://localhost:9000/api";
}
/*
    + setparamiters -> in put solo i 3
    + setoptions -> in put rgb e luci
    + setcurtains -> in put tenda alzata o meno
    + getparamiters -> in get ogni 30 min chiedo tutto
    + getoptions -> in get valori rgb e valori luce on/off

    2 classi una parametri una opzioni

*/