widgets["jira-issue-list"]={onError:function(e){$(e).find(".counter").html("N/A")},onData:function(e,t){var i=$(".table tbody",e).empty(),n=Handlebars.compile($(".issue-row-template",e).html());_.each(t.issues,function(e){i.append(n({issue:e}))})}};