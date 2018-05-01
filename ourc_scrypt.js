/* JavaScrypt file for Solution Design Question for the Open University TT284 Web technologies EMA
 Created by Leire Larrea Casado (E1662175)
 Version 1.0 (June 2017)
*/
var wordLen = 300; // Maximum word length
function checkWordLen(obj)
{
	var len = obj.value.split(/[\s]+/);
	if(len.length > wordLen)
	{
		alert("You've exceeded the "+wordLen+" word limit for the article!");
		obj.oldValue = obj.value!=obj.oldValue?obj.value:obj.oldValue;
		obj.value = obj.oldValue?obj.oldValue:"";
		return false;
	}
	return true;
}

