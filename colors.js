var colors = [];

colors['Alessandra'] = '#FF00FF';
colors['Brasil'] = '#68FFA0';
colors['Cadu'] = '#8472FF';
colors['Caio'] = '#191970';
colors['Cesar'] = '#F0E68C';
colors['Diego'] = '#FF0980';
colors['Diogo A'] = '#F79646';
colors['Diogo H'] = '#32CD99';
colors['Erika'] = '#667C00';
colors['Fabiano Loures'] = '#DDEEEE';
colors['Fabio'] = '#FF261B';
colors['Felipe'] = '#BB2412';
colors['Fernando Conde'] = '#84180F';
colors['Fernando R'] = '#FFD700';
colors['Greg'] = '#7A5B53';
colors['Gustavo'] = '#F0E68C';
colors['Henrique C'] = '#000080';
colors['Hercules'] = '#00FF00';
colors['Kleber'] = '#00B0F0';
colors['Marcelo H'] = '#31869B';
colors['Marcelo A'] = '#66CDAA';
colors['Marcio H'] = '#5188FF';
colors['Mario'] = '#F0E68C';
colors['Natalia'] = '#A020F0';
colors['Navarro'] = '#000080';
colors['Patricia'] = '#808000';
colors['Pedro'] = '#00FFFF';
colors['Rafael'] = '#667C82';
colors['Romulo'] = '#BB2412';
colors['Ronaldo'] = '#000000';
colors['Sirlane'] = '#F0E68C';
colors['Thiago Cola'] = '#FF6961';
colors['Vanessa'] = '#FFFF00';
colors['Vinicius'] = '#0000FF';
colors['Waldemir'] = '#FF7F50';
colors['Markonds'] = '#EEDDEE';
colors['Marcus V.'] = '#5188FF';
colors['Joao'] = '#00B0F0';
colors['Raul'] = '#FF5733';
colors['Gabriel'] = '#2C8DF5';
colors['Julio'] = '#11EE11';

//terceiros
colors['Jamile'] = '#8C8F8F';
colors['Iata'] = '#AC8F8F';
colors['Alex'] = '#BC8F8F';
colors['Marcio S'] = '#CC8F8F';
colors['Hiulli'] = '#DC8F8F';
colors['Leonardo'] = '#EC8F8F';
colors['Rafael M'] = '#FC8F8F';

//não trabalham mais aqui
//colors['Gabriel'] = '#EEEEEE';
//colors['Thiago'] = '#EEEEEE';
//colors['Welington'] = '#EEEEEE';
//colors['Rodrigo'] = '#EEEEEE';
//colors['Andre'] = '#EEEEEE';
//colors['Arthur'] = '#EEEEEE';


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