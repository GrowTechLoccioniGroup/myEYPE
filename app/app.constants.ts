import { Injectable } from '@angular/core'

@Injectable()
export class Config {
   public ServerWithApiUrl = "http://DESKTOP-80MK0K7:9000/api";
   //public ServerWithApiUrl = "http://172.17.83.99:9000/api";

}
/*
    + setparamiters -> in put solo i 3
    + setoptions -> in put rgb e luci
    + setcurtains -> in put tenda alzata o meno
    + getparamiters -> in get ogni 30 min chiedo tutto
    + getoptions -> in get valori rgb e valori luce on/off

    2 classi una parametri una opzioni

*/