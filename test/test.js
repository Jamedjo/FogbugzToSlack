var assert = require('assert');
var fogbugz = require('../fogbugz');

var case_event = {"eventtype":"CaseEdited","casenumber":"42","caseeventid":"826","personeditingid":"2","personeditingname":"James Edwards-Jones","title":"Fix the world","statusid":"28","statusname":"Active","projectid":"2","projectname":"Website","areaid":"17","areaname":"Security / Reliability","fixforid":"11","milestoneid":"11","fixforname":"Sprint 23: October#3","milestonename":"Sprint 23: October#3","category":"5","assignedtoid":"2","assignedtoname":"James Edwards-Jones","priorityid":"3","priorityname":"Necessary","duedate":"","currentestimate":"2","elapsedtime":"0","version":"","computer":"","releasenotes":"","customeremail":"","eventtime":"2015-10-29 00:40:00Z","eventtext":"","emailfrom":"","emailto":"","emailcc":"","emailbcc":"","emailreplyto":"","emailsubject":"","emaildate":"","emailbodytext":"","emailbodyhtml":""}

describe('Fogbugz', function() {
  describe('#parseCase()', function () {
    it('prints a pretty title', function () {
      assert.equal('42 - Fix the world (Active)', fogbugz.parseCase(case_event));
    });
  });
});
