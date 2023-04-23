var colors = [];

colors['Erika'] = '#FF00FF';
colors['Greg'] = '#68FFA0';
colors['Fabio'] = '#8472FF';
colors['Henrique'] = '#191970';
colors['Markonds'] = '#F0E68C';
colors['Vanessa'] = '#FF0980';
colors['Waldemir'] = '#F79646';
colors['Jamile'] = '#32CD99';
colors['Hiulli'] = '#667C00';
colors['Marcelo'] = '#DDEEEE';
colors['Fernando'] = '#FF261B';
colors['Mario'] = '#BB2412';
colors['Thiago'] = '#84180F';
colors['Rafael'] = '#FFD700';
colors['Felipe'] = '#7A5B53';
colors['Diogo'] = '#F0E68C';
colors['Gabriel'] = '#000080';


var textcolors = [];


function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getTextColor(hexColor)
{
	//brightness 1 =  (0.299*R + 0.587*G + 0.114*B)
	//brightness 2 =  sqrt( .241 R2 + .691 G2 + .068 B2 )
    //Color textColor = Brightness(backgroundColor) < 130 ? Colors.White : Colors.Black;
	var rgb = hexToRgb(hexColor);
	var brightness = (0.299*rgb.r + 0.587*rgb.g + 0.114*rgb.b);
	//var brightness = Math.sqrt( Math.pow(0.241*rgb.r, 2) + Math.pow(0.691*rgb.g, 2) + Math.pow(0.068*rgb.b, 2) );
	return brightness < 130 ? "#FFF" : "#000";
}

for (let idx in colors)
{
	textcolors[colors[idx]] = getTextColor(colors[idx]);
}