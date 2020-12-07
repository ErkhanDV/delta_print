var d = new Date();

var month = new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");

document.write(d.getDate() + "&nbsp;" + month[d.getMonth()] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + d.getFullYear());
