function singleTableController($scope, $http, $routeParams) {
	var ctrl = $scope;
	var masterView = {
		"full-view": "Full View",
		"quick-view" : "Quick View",
		"social-networks": "Social networks",
		"details": "Details",
		"incomplete-contacts": "Incomplete contacts",
		"empty-contacts" : "Empty contacts"
	}
	var view = 'quick-view';
	if ($routeParams.view)
		view = $routeParams.view;

	ctrl.header = masterView[view];
	ctrl.gridOptions = {
		enableSorting: true,
		enableFiltering: true,
		minimumColumnSize: 150
	};
	$http.get('/api/' + view)
		.then(function(response) {
			for (const key in response.data[0]) {
				if (response.data[0].hasOwnProperty(key)) {
					ctrl.gridOptions.columnDefs.push({
						field: key,
						cellTooltip: true
					})
				}
			}
			ctrl.gridOptions.data = response.data;
		}, function(response) {
			var data = response.data || 'Request failed';
			var status = response.status;
			console.log(status, data);
		});
}

angular.
	module("single-table").
	controller("singleTableController", singleTableController);