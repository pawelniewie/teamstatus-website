widget={onData:function(t,a){var e=$(".table tbody",t).empty(),o=Handlebars.compile($(".row-template",t).html());_.each(a.rows,function(t){e.append(o({row:t}))})}};