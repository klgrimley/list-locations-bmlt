﻿function getListLocationsValueSelected() {
	var x = document.list_locations_options.service_body_dropdown.selectedIndex;
	var res = document.list_locations_options.service_body_dropdown.options[x].value.split(",");
	document.getElementById("txtSelectedValues1").innerHTML = '<b>Service Body ID:</b> <span class="bmlt_sb">' + res[1] + '</span>';
	document.getElementById("txtSelectedValues2").innerHTML = '<b>Service Body Parent:</b> <span class="bmlt_sb">' + res[3] + '</span>, <b>Service Body Parent ID:</b> <span class="bmlt_sb">' + res[2] + '</span>';
};

jQuery(document).ready(function($) {
	$("#list_locations_accordion").accordion({
		heightStyle: "content",
		active: false,
		collapsible: true
	});
	$(".list_locations_service_body_select").chosen({
		inherit_select_classes: true,
		width: "50%"
	});
});
