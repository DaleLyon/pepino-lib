"use strict";
import {ICodeGenerationStrategy} from "../ICodeGenerationStrategy";
import {StringHelper} from "../helpers/StringHelper";
import {VariableHelper} from "../helpers/VariableHelper";

export class JasmineExpectStrategy implements ICodeGenerationStrategy {

    canGenerate(text: string): boolean {
        var lowercase = text.toLowerCase();
        var hasNegator = lowercase.indexOf(" not ") > -1;
        return lowercase.startsWith("verify ") && !hasNegator;
    }

    generate(text: string): string {
        var element = VariableHelper.getString(StringHelper.extractTextInGreaterThanLessThan(text)[0]);        
        var contents = VariableHelper.getString(StringHelper.extractTextInQuotes(text)[0]);        
        return "expect(browser.getText(" + element + ").join()).toContain(" + contents + ");";
    }
}
