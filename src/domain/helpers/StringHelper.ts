"use strict";
import * as _ from "underscore";

export class StringHelper {

    static extractTextInQuotes(str: string): Array<string> {
        return this.getArrayOfMatches(str, /"(.*?)"/g);                
    }
    
    static extractTextInGreaterThanLessThan(str: string) : Array<string> {
        return this.getArrayOfMatches(str, /\<(.*?)\>/g);        
    }
    
    private static getArrayOfMatches(str: string, exp: RegExp): Array<string>{
        var matches = new Array<string>();
        var match = exp.exec(str);
        while(match !== null){
            matches.push(match[1]);
            match = exp.exec(str);            
        }
        return matches;
    }
    
    static capitalizeFirstLetter(str: string) : string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
