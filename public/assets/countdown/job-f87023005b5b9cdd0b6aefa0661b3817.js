module.exports=function(e,l,a){var n=l.moment(),o=l.moment(e.targetDate),t=o.diff(n,"days")+1;if(0>t&&(t=0),e.excludeWeekends&&0!==t){var d=0,m=n.clone();for(i=0;t>i;i++)0!==m.day()&&6!==m.day()&&d++,m.add(1,"day");a(null,{count:d,label:e.milestoneName})}else a(null,{count:t,label:e.milestoneName})};