module.exports=function(e,t,n){var r=function(e){var t=new Date,n=t.getHours(),r=t.getMinutes();if(e&&e.length)for(var u=0;u<e.length;u++){var s=new Date(e[u].start),g=new Date(e[u].end);if(s>g&&(g=[s,s=g][0]),(s.getHours()<n||s.getHours()==n&&s.getMinutes()<r)&&(n<g.getHours()||n==g.getHours()&&r<g.getMinutes()))return!0}return!1};n(null,{isStfu:r(e.timeSpans)})};