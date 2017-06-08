/* This application does simple "event chat". Here, events are mouse clicks on a canvas. 
	We register for the following messages:
		init - sent by the server after the client connects. Data returned is an id that the server and other clients will use to recognizes messages from this client.
		mouseClick - sent when another chatroom member generates a mouse click. Data is x, y of their mouse position on their canvas.
*/

require.config({
	paths: {
	//	"jsaSound": ".."
	}
});
require(
	["require", "utils"],

	function (require, utils) {

        var myrequestAnimationFrame = utils.getRequestAnimationFrameFunc();
		myID=0;
		console.log("main is loaded");

	}
);