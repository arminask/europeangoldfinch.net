var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var entry = new Array(16)

function showTopic(x) { 
	hideTopics("topics");
	var sdiv = document.getElementById(x).style;
	sdiv.display = "block";
} 

function hideTopics(x) {
	var hdiv = document.getElementById(x).style;
	hdiv.display = "none";
}

function resetTopic() { 
	for (i=0; i<entry.length; i++) {
		var z = "blog" + i;
		hideTopics(z);
	}
	showTopic("topics");
} 

}