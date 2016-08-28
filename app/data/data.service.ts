import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    private Curtains: boolean = false;
    private RGB: string;
    private Name: string;

    constructor() {}

    public setCurtainsState(state) {
        this.Curtains = state;
    }

    public getCurtainsState() {
        return this.Curtains;
    }

    public setLastRGB(value) {
        this.RGB = value;
    }

    public getLastRGB() {
        return this.RGB;
    }

    public SetName(name) {
        this.Name = name;
    }

    public GetName() {
        return this.Name;
    }
}