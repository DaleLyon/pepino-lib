"use strict";
var _ = require('underscore');
var StringHelper_1 = require("../../domain/helpers/StringHelper");
var Pepino;
(function (Pepino) {
    class CriteriaSegmentMatcher {
        get(segmentText, features) {
            var segments = new Array();
            _.each(features, (f) => {
                _.each(f.scenarios, (s) => {
                    _.each(s.segments, (seg) => {
                        if (this.withoutQuotedStrings(segmentText) === this.withoutQuotedStrings(seg.text)) {
                            segments.push(seg);
                        }
                    });
                });
            });
            return segments;
        }
        withoutQuotedStrings(text) {
            var quotedStrings = StringHelper_1.StringHelper.extractTextInQuotes(text);
            quotedStrings.forEach((s) => {
                text = text.replace(s, "");
            });
            return text;
        }
    }
    Pepino.CriteriaSegmentMatcher = CriteriaSegmentMatcher;
})(Pepino = exports.Pepino || (exports.Pepino = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9zZXJ2aWNlcy9Dcml0ZXJpYVNlZ21lbnRNYXRjaGVyLnRzIl0sIm5hbWVzIjpbIlBlcGlubyIsIlBlcGluby5Dcml0ZXJpYVNlZ21lbnRNYXRjaGVyIiwiUGVwaW5vLkNyaXRlcmlhU2VnbWVudE1hdGNoZXIuZ2V0IiwiUGVwaW5vLkNyaXRlcmlhU2VnbWVudE1hdGNoZXIud2l0aG91dFF1b3RlZFN0cmluZ3MiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUdiLElBQVksQ0FBQyxXQUFNLFlBQVksQ0FBQyxDQUFBO0FBQ2hDLDZCQUEyQixtQ0FBbUMsQ0FBQyxDQUFBO0FBRS9ELElBQWMsTUFBTSxDQThCbkI7QUE5QkQsV0FBYyxNQUFNLEVBQUMsQ0FBQztJQU1sQkE7UUFDSUMsR0FBR0EsQ0FBQ0EsV0FBbUJBLEVBQUVBLFFBQXdCQTtZQUU3Q0MsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsS0FBS0EsRUFBbUJBLENBQUNBO1lBQzVDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDZkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2xCQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxHQUFHQTt3QkFDbkJBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBR0EsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFBQSxDQUFDQTs0QkFDN0VBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUN2QkEsQ0FBQ0E7b0JBQ0xBLENBQUNBLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNQQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNIQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUNwQkEsQ0FBQ0E7UUFFT0Qsb0JBQW9CQSxDQUFDQSxJQUFZQTtZQUNyQ0UsSUFBSUEsYUFBYUEsR0FBR0EsMkJBQVlBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDM0RBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO2dCQUNwQkEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLENBQUNBLENBQUNBLENBQUNBO1lBQ0hBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2hCQSxDQUFDQTtJQUNMRixDQUFDQTtJQXZCWUQsNkJBQXNCQSx5QkF1QmxDQSxDQUFBQTtBQUNMQSxDQUFDQSxFQTlCYSxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUE4Qm5CIiwiZmlsZSI6ImRvbWFpbi9zZXJ2aWNlcy9Dcml0ZXJpYVNlZ21lbnRNYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
