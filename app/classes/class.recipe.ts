export class ClassRecipe {
    id_recipe: number;
    Name: string;
    AirTemperature: number;
    WaterTemperature: number;
    Humidity: number;
    PH: number;
    Conductivity: number;
    RGB: string;
    Light: boolean;  
}

/* 3 post/put 
    1- modifica parametri (put): tempAria, umid, pH
    2- put: mpdofica rgb e luci
    3- put/post: tende
*/