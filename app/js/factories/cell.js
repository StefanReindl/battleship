
/*================================================================
=>                   Service = cell
==================================================================*/
/*global app*/

app.factory('Cell', function (){

	'use strict';
	console.log("calling Cell function")

	return {
		create: function(x, y) {
			var cell = {
			  x: x,
			  y: y,
			  fired: false, // cell was fired on
			  hit: false    // cell returned a hit
			  // board_type: board_type;
			}
			return cell;
		}
	}
});


/*-----  End of Service = cell  ------*/


// /*================================================================
// =>                   Factory = cell
// ==================================================================*/
// /*global app*/




/*-----  End of Factory = cell  ------*/