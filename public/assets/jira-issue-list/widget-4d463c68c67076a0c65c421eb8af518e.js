widget={onError:function(e){$(e).find(".counter").html("N/A")},onData:function(e,t){var n=$(".table tbody",e).empty(),o=Handlebars.compile($(".issue-row-template",e).html());_.each(t.issues,function(e){n.append(o({issue:e}))})}};