var con=angular.module("teamstatus.integrations",[]).factory("widgets",[function(){return[{name:"Clock",id:"clock",description:"Add a clock",widgetSettings:{title:"Clock"}},{name:"STFU",id:"stfu",description:"Tell your team to be quiet",configurable:!0,widgetSettings:{title:"Shhh..."}},{name:"Bamboo Builds",id:"bamboo-builds",description:"Get Bamboo Builds status",configurable:!0,widgetSettings:{title:"Builds"}},{name:"JIRA Counter",id:"jira-simple-counter",description:"Display number of issues in JIRA",configurable:!0,widgetSettings:{title:"Issues"}},{name:"JIRA Issues",id:"jira-issue-list",description:"Display list of issues from JIRA",configurable:!0,widgetSettings:{title:"Issues"}},{name:"Static HTML",id:"static-html",description:"Display static HTML",configurable:!0,widgetSettings:{title:"HTML"}},{name:"Days until",id:"countdown",description:"Display number of days to a given date",configurable:!0,widgetSettings:{title:"Days until"}},{name:"Crucible Reviews",id:"crucible-reviews",description:"Display number of open reviews for each team member",configurable:!0,widgetSettings:{title:"Open reviews"}},{name:"PostgreSQL table",id:"postgresql-list",description:"Display results of PostgreSQL query",configurable:!0,widgetSettings:{title:"PostgreSQL"}}]}]),BambooBuildsCtrl=["$scope",function(){}],JiraSimpleCounterCtrl=["$scope",function(){}],JiraSimpleCounterCtrl=["$scope",function(){}],StaticHtmlCtrl=["$scope",function(){}],StfuCtrl=["$scope",function(t){t.addTimeSpan=function(){var e={start:new Date,end:new Date};e.start.setHours(10),e.start.setMinutes(0),e.end.setHours(11),e.end.setMinutes(0),t.settings.timeSpans.push(e)},t.removeTimeSpan=function(e){t.settings.timeSpans.splice(e,1)},void 0===t.settings.timeSpans&&(t.settings.timeSpans=[],t.addTimeSpan())}],CountdownCtrl=["$scope",function(t){t.today=new Date,t.open=function(e){e.preventDefault(),e.stopPropagation(),t.opened=!0},void 0===t.settings.targetDate&&(t.settings.targetDate=new Date)}],CrucibleReviewsCtrl=["$scope",function(){}],PostgreSqlListCtrl=["$scope",function(){}],con=angular.module("teamstatus.console",["ngRoute","angular-underscore","frapontillo.ex.filters","ui.bootstrap"]).constant("path",angular.element('meta[name="ts.console.basePath"]').attr("content")+"").constant("partials",angular.element('meta[name="ts.console.basePath"]').attr("content")+"/partials");angular.module("teamstatus.console.widget",["teamstatus.console","teamstatus.integrations"]).directive("bsHolder",function(){return{link:function(t,e){Holder.run({images:e.get(0)})}}}).factory("board",["$document",function(){return{editUrl:angular.element('meta[name="ts.board.editUrl"]').attr("content"),publicId:angular.element('meta[name="ts.board.publicId"]').attr("content"),boardId:angular.element('meta[name="ts.board.id"]').attr("content")}}]),angular.module("teamstatus.console.widget.add",["teamstatus.console.widget"]).config(["$routeProvider","partials",function(t,e){t.when("/welcome",{templateUrl:e+"/new_widget_welcome"}).when("/:id",{templateUrl:e+"/new_widget_form",controller:"WidgetCtrl"}).otherwise({redirectTo:"/welcome"})}]),angular.module("teamstatus.console.widget.edit",["teamstatus.console.widget"]).config(["$routeProvider","partials",function(t,e){t.when("/:id",{templateUrl:e+"/new_widget_form",controller:"WidgetCtrl"})}]);var WidgetsCtrl=["$scope","$routeParams","$log","$http","$window","partials","widgets","board",function(t,e,i,n,s,o,a,r){function d(){var i=t.widgets,n=e.id;_.each(i,function(e){e.active=!!e.id&&e.id===n,e.active&&(t.currentWidget=e,t.$broadcast("currentWidgetChanged",t.currentWidget))})}t.widgets=a,t.board=r,t.$on("$routeChangeSuccess",d),d()}],EditWidgetsCtrl=["$scope","$routeParams","$log","$http","$window","path","widgets","board",function(t,e,i,n,s,o,a,r){function d(){var i=e.id;_.each(t.boardWidgets,function(e){e.active=!!e._id&&e._id===i,e.active&&(t.currentWidget=_.extend(_.clone(t.widgetsMap[e.jobId]),e),t.$broadcast("currentWidgetChanged",t.currentWidget))})}t.editing=!0,t.widgetsMap=_.indexBy(a,"id"),t.board=r,t.$on("$routeChangeSuccess",d),n.get(o+"/boards/"+r.boardId+"/jobs.json").success(function(e){t.boardWidgets=e,d()})}],WidgetCtrl=["$scope","$http","$compile","$window","partials","widgets","board","path",function(t,e,i,n,s,o,a,r){function d(n){t.settings=n.settings||{},t.widgetSettings=n.widgetSettings||{title:"Widget"},n.configurable&&e.get(s+"/integrations/"+n.id).success(function(e){t.settings=n.settings||{},angular.element(".settings").html(i(e)(t))})}t.$on("currentWidgetChanged",function(t,e){d(e)}),void 0!==t.currentWidget&&d(t.currentWidget),t.addWidget=function(){t.editing?e.put(r+"/boards/"+t.board.boardId+"/jobs/"+t.currentWidget._id+".json",{settings:t.settings,widgetSettings:t.widgetSettings}).success(function(e){e.error||(n.location.href=t.board.editUrl)}):e.post(r+"/boards/"+t.board.boardId+"/jobs.json",{jobId:t.currentWidget.id,settings:t.settings,widgetSettings:t.widgetSettings}).success(function(e){e.error||(n.location.href=t.board.editUrl)})}}];