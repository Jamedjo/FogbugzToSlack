exports.eventSummary = function(task){
  return "Case " + task.casenumber + ' ' + task.eventtype.replace('Case', '') + ' by ' + task.personeditingname;
};

exports.fallbackDescription = function(task){
  return task.eventtype + ' ' + task.casenumber + ' - ' + task.title + ' (' + task.statusname +')';
};

exports.prettyTitle = function(task){
  return task.casenumber + ' - ' + task.title;
};

exports.color = function(task){
  var palette = ["#6B1515", "#5B2E48", "#ACB731", "#EDCD5A", "#ABB3C6", "#BECDD1", "#D7E2E5"];
  return palette[task.priorityid];
};

exports.fields = function(task){
  return [
    {title: 'Owner', value: task.assignedtoname, short: true},
    {title: 'Status', value: task.statusname, short: true},
    {title: 'Area', value: task.areaname, short: true},
    {title: 'Milestone', value: task.milestonename, short: true}
  ];
};

exports.slackMessage = function(task){
  return {
    text: exports.eventSummary(task),
    attachments: [{
      title: exports.prettyTitle(task),
      fallback: exports.fallbackDescription(task),
      color: exports.color(task),
      fields: exports.fields(task)
    }]
  };
};
