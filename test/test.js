var assert = require('assert');
var fogbugz = require('../fogbugz');

var case_event = {"eventtype":"CaseEdited","casenumber":"42","caseeventid":"826","personeditingid":"2","personeditingname":"James Edwards-Jones","title":"Fix the world","statusid":"28","statusname":"Active","projectid":"2","projectname":"Website","areaid":"17","areaname":"Reality","fixforid":"11","milestoneid":"11","fixforname":"Sprint 23: October#3","milestonename":"Lambda","category":"5","assignedtoid":"2","assignedtoname":"James Edwards-Jones","priorityid":"3","priorityname":"Necessary","duedate":"","currentestimate":"2","elapsedtime":"0","eventtime":"2015-10-29 00:40:00Z"}

describe('Fogbugz', function(){
  describe('#prettyTitle', function(){
    it('prints a pretty title', function(){
      assert.equal('42 - Fix the world', fogbugz.prettyTitle(case_event));
    });
  });
  describe('#eventSummary', function(){
    it('describes what happened', function(){
      assert.equal('Case 42 Edited by James Edwards-Jones', fogbugz.eventSummary(case_event));
    });
  });
  describe('#fields', function(){
    var lookup = function(title){
      return fogbugz.fields(case_event).filter(function(f){
        return f.title == title;
      })[0].value;
    };

    it('includes milestone', function(){
      assert.equal(lookup('Milestone'), 'Lambda')
    });
    it('includes area', function(){
      assert.equal(lookup('Area'), 'Reality')
    });
    it('includes owner', function(){
      assert.equal(lookup('Owner'), 'James Edwards-Jones')
    });
    it('includes status', function(){
      assert.equal(lookup('Status'), 'Active')
    });
  });

  describe('#color', function(){
    it('urgent is red', function(){
      assert.equal(fogbugz.color({priorityid: '0'}), '#6B1515')
    });
    it("isn't red unless urgent", function(){
      assert.notEqual(fogbugz.color({priorityid: '4'}), '#6B1515')
    });
  });

  describe('#slackMessage', function(){
    it('nests fields under attachments', function(){
      assert(fogbugz.slackMessage(case_event).attachments[0].fields)
    });
  });
});
