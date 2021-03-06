"use strict";
import chai = require("chai");
var expect = chai.expect;
import {ICodeGenerationStrategy} from "../ICodeGenerationStrategy";
import {JasmineExpectSelectionValueStrategy} from "./JasmineExpectSelectionValueStrategy";
import {JasmineExpectSelectionStrategy} from "./JasmineExpectSelectionStrategy";
import {Step} from "../Step";
import * as g from '../services/CucumberStepFunctionGenerator';

describe("when converting pepino-lang instructions to a jasmine-style expect selection label assertion", () => {

    var strategy = new JasmineExpectSelectionValueStrategy();

    describe("without variables", () => {
        var instructions = "Verify the value \"something\" is selected in <#results> element";

        it("should be able to generate instructions", () => {
            expect(strategy.canGenerate(instructions)).to.be.true;
        });

        it("should pass on unrecognized instructions", () => {
            expect(strategy.canGenerate("unrecognized instructions")).to.be.false;
        });

        it("should pass on instructions to verify option text without variables", () => {
            var similar_instructions = "Verify \"something\" is selected in <#results> element";
            expect(strategy.canGenerate(similar_instructions)).to.be.false;
        });

        it("should pass on instructions to verify option text with variable", () => {
            var similar_instructions = "Verify \"$elementValue\" is selected in <$selectElement>";
            expect(strategy.canGenerate(similar_instructions)).to.be.false;
        });

        it("should convert the assert to jasmine expect code", () => {
            expect(strategy.generate(instructions))
                .to.equal("expect(browser.getValue(\"#results option:checked\")).toContain(\"something\");");
        });
    });

    describe("with variable in the contents", () => {

        var instructions = "Verify value \"$something\" is selected in <#results> element";

        it("should convert the assert to jasmine expect code with correct variable contents", () => {
            expect(strategy.generate(instructions))
                .to.equal("expect(browser.getValue(\"#results option:checked\")).toContain(something);");
        });
    });

    describe("with variable in the element", () => {

        var instructions = "Verify value \"something\" is selected in <$results> element";

        it("should convert the assert to jasmine expect code with correct variable element", () => {
            expect(strategy.generate(instructions))
                .to.equal("expect(browser.getValue(results + \" option:checked\")).toContain(\"something\");");
        });
    });

    describe("with variables in the element and contents", () => {

        var instructions = "Verify value \"$elementValue\" is selected in <$selectElement>";

        it("should convert the assert to jasmine expect code with correct variable element", () => {
            expect(strategy.generate(instructions))
                .to.equal("expect(browser.getValue(selectElement + \" option:checked\")).toContain(elementValue);");
        });
    });

    describe("with variables in the element and contents but not with value", () => {

        var instructions = "Verify \"$elementValue\" is selected in <$selectElement>";

        it("should be able to generate for select element labels", () => {
            expect(strategy.canGenerate(instructions)).to.be.false;
        });
    });

});
