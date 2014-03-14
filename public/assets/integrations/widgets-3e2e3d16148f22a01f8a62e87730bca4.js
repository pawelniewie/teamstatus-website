var widgets={};widgets["bamboo-builds"]={onData:function(e,a){function n(e){var a=0,n=$("<div/>").addClass("responsibles");return e.responsible.forEach(function(e){e.avatar&&(a++,$(n).append($("<img/>").attr({src:e.avatar,title:e.name})))}),{assigneeCount:a,responsiblesDiv:n}}function t(e){var a=$("<div/>").addClass("build").addClass("build-status").addClass(e.success);e.progress&&$(a).prepend($('<div class="build-progress"></div>').width(e.progress));var t=$("<div/>").addClass("build-info");if(e.down)t.append($("<div/>").addClass("plan-name").addClass("down").text(e.planName+" could not be accessed"));else{if(t.append($("<div/>").addClass("plan-name").append($("<a/>").attr("href",e.link).text(e.planName))),"failed"===e.success){var s=$("<div/>").addClass("fail-details"),i=e.failedTestCount>0?e.failedTestCount:"?";s.append($("<span/>").addClass("failed-tests-summary").text(i)),t.append(s)}if(e.isRefreshing){var d=$("<span/>").addClass("time-remaining"),l=e.timeRemaining||"";l.indexOf("slower than usual")>0&&(l="- "+l.replace("slower than usual",""),d.addClass("slower-than-usual")),d.text(l),t.append(d)}if("failed"===e.success){var r=n(e);1!=r.assigneeCount&&a.addClass("unassigned"),$(t).append(r.responsiblesDiv)}}return a.append(t),a}$(".build-overview-always-show",e).empty();var s=0,i=0,d=0;a.showBuilds.forEach(function(a){a.down?i++:"failed"===a.success?s++:d++,$(".build-overview-always-show",e).append(t(a))}),$(".build-breakers",e).empty(),a.failBuilds.forEach(function(n){var l=function(e){return e.planName===n.planName};n.down?_.find(a.showBuilds,l)||i++:"failed"===n.success?(_.find(a.showBuilds,l)||s++,$(".build-breakers",e).append(t(n))):_.find(a.showBuilds,function(e){return e.planName===n.planName})||d++});var l=_.uniq(a.failBuilds.concat(a.showBuilds),!1,function(e){return e.planKey}).length,r=l===i,o=parseInt(s/l*100,10);r&&(o=100),$(".fail-bar",e).width(o+"%"),r?$(".build-breakers",e).append($("<div/>").addClass("all-builds-down-message uppercase").append("ALL BAMBOO PLANS ARE DOWN")):0===s&&$(".build-breakers",e).append($("<div/>").addClass("no-broken-builds-message uppercase").append("NO BROKEN BUILDS"));var u="";u=s>0?s+"/"+l+" RED":l-i+" BUILDS GREEN",i>0&&(u+=" ("+i+" DOWN)"),$(".failed-report",e).html(u)}},widgets.clock={onData:function(e,a){function n(){if(void 0!==a&&void 0!==a.hour){var n=new Date,t="time-colon time-colon-"+n.getSeconds()%2,s='<span class="'+t+'">:</span>';$(".content > .clock-time",e).html(a.hour+s+a.minutes),$(".content > .clock-date").html(a.dateStr)}}n(),void 0!==this.prevInterval&&clearInterval(this.prevInterval),this.prevInterval=setInterval(n,1e3)}},widgets["crucible-reviews"]={onData:function(e,a){a.reviews.sort(function(e,a){return e.username>a.username});var n=0===$(".content .user",e).length;a.reviews.forEach(function(t){if(n){var s=$("<div class='user'></div>"),i=a.baseUrl+"/avatar/"+t.username+"?s=60&redirect=false&"+(new Date).getTime(),d=new Image;d.src=i,d.alt=t.username,s.append(d),s.append("<div class='count' data-username='"+t.username+"'></div"),$(".content",e).append(s)}$(".content .user .count[data-username="+t.username+"]",e).text(t.openReviews)}),$(".content",e).boxfit()}},widgets["display-number"]={onError:function(e){$(e).find(".counter").html("N/A")},onData:function(e,a){a.count==a.maxResults?"+":"";a.url?$(e).find(".counter").html($("<a/>").attr("href",a.url).text(a.count)):$(e).find(".counter").html(a.count),a.label?$(e).find(".label").html(a.label).show():$(e).find(".label").hide(),$(".content > .counter",e).boxfit()}},widgets["postgresql-number"]=widgets["jira-simple-counter"]=widgets["display-number"],widgets["display-table"]={onData:function(e,a){var n=$(".table tbody",e).empty(),t=Handlebars.compile($(".row-template",e).html());_.each(a.rows,function(e){n.append(t({row:e}))})}},widgets["postgresql-list"]=widgets["display-table"],widgets["jira-issue-list"]={onError:function(e){$(e).find(".counter").html("N/A")},onData:function(e,a){var n=$(".table tbody",e).empty(),t=Handlebars.compile($(".issue-row-template",e).html());_.each(a.issues,function(e){n.append(t({issue:e}))})}},widgets.mailchimp={onData:function(e,a){a.title&&$("h2",e).text(a.title),$(".content",e).empty(),a.sections.forEach(function(a){a.title&&$(".content",e).append($("<h3>"+a.title+"</h3>")),a.counts.sort(function(e,a){return e.count<a.count});var n=$("<div class='counts'></div>");$(".content",e).append(n),a.counts.forEach(function(e){if(e.count){var a=200==e.count?"200+":e.count,t=$("<div class='result'><a href=\""+e.url+'">'+a+"</a></div>");e.count>0&&t.addClass("pending");var s=$("<div class='label'><a href=\""+e.url+'">'+e.label+"</a></div>"),i=$("<div class='count'></div>");i.append(t),i.append(s),n.append(i)}}),n.children().size()||n.append("<div class='count'><span class='result'>0</span>Open Issues</div>")});var n,t=60,s=$(".content",e),i=$(e).parent().height()-$("h2",e).outerHeight(!0);do s.css("font-size",t),n=s.outerHeight(!0),t-=1;while(n>i&&t>3)}},widgets["static-html"]={onInit:function(e,a){var a=a||{html:""};$(e).parent().children(".error").hide(),$(e).parent().children(".spinner").hide(),$(".content",e).html(a.html)}},widgets.stfu={onData:function(e,a){function n(){$(".stfu-off",e).fadeOut(i),$(".stfu-on",e).fadeIn(i)}function t(){$(".stfu-on",e).fadeOut(i),$(".stfu-off",e).fadeIn(i)}function s(){a.isStfu?n():t()}var i={duration:3e3,easing:"linear"};s()}};