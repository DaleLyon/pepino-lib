"use strict";
import chai = require("chai");
var expect = chai.expect;
import {ICodeGenerationStrategy} from "../ICodeGenerationStrategy";
import {JasmineExpectStrategy} from "./JasmineExpectStrategy";

describe("when converting pepino-lang instructions to a jasmine-style expect assertion", () => {
    
    describe("without variables", () => {
        var strategy = new JasmineExpectStrategy();
        var instructions = "Verify \"something\" is in <#results> element";
        
        it("should be able to generate typing instructions", () => {
            expect(strategy.canGenerate(instructions)).to.be.true;    
        });
        
        it("should pass on unrecognized instructions", () => {
            expect(strategy.canGenerate("unrecognized instructions")).to.be.false;    
        });
        
        it("should pass on unrecognized instructions", () => {
            var similar_instructions = "Verify \"something\" is not in <#results> element";    
            expect(strategy.canGenerate(similar_instructions)).to.be.false;    
        });
        
        it("should convert the assert to jasmine expect code", () => {
            expect(strategy.generate(instructions))
                .to.equal("expect(browser.getText(\"#results\").join()).toContain(\"something\");");
        });  
    });
    
    describe("with variables", () => {
        var strategy = new JasmineExpectStrategy();
        var instructions = "Verify \"$someString\" is in <#results> element";
        
        it("should convert the assert to jasmine expect code with correct variable name", () => {
            expect(strategy.generate(instructions))
                .to.equal("expect(browser.getText(\"#results\").join()).toContain(someString);");
        });  
    });             
});
