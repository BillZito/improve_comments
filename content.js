//content.js
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResposne){
		//when the browser icon is clicked, check if the content includes a post relating to BLM or hate speech,
		//and replace it accordingly
		if(request.message === "clicked_browser_action") {

			$('._5pbx.userContent, .UFICommentBody, .mtm._5pco, .mbs._6m6._2cnj._5s6c, ._6m7._3bt9').each(function(i, item){
			/*
			for the facebook content itmes that may contain a reference to a shooting, remind the audience that it's important
			to practice self-care and remove the graphics/ underlying text items that might be harmful
			*/
				for (var a = 0; a < black_lives_keys.length; a++){
					if (item.innerHTML.toLowerCase().includes(black_lives_keys[a])){
						item.innerHTML = "it's importnat to practice self-care";
						$('a._4-eo').remove();
						$('._6l-.__c_').remove();
						$('._6m3._--6').remove();
						$('._ox1._1_d1').remove();
					}
				}
			});

			/*
			For hatespeech, replace it with "ignore me, I'm probably not worth reading"
			HN: .c00, youtube: .comment-renderer, facebook: ._5pbx, .ufi, .fwb
			*/
			$('.c00, .comment-renderer-text-content, ._5pbx.userContent, \
				.UFICommentBody, .fwb fcg').each(function(i, item){
					for (var x = 0; x < badKeys.length; x++){
						if (item.innerHTML.toLowerCase().includes(badKeys[x])){
							item.innerHTML = "ignore me, I'm probably not worth reading";
						}
					}
			});
		}
	}
);

var black_lives_matter = {
	philando: 1,
	castile: 1,
	alton: 1,
	sterling: 1, 
	police: 1,
	freddie: 1, 
	gray: 1
};

var black_lives_keys = Object.keys(black_lives_matter);

//list of badwords
var bad_words = {
"b!tch":1,
b17ch:1,
b1tch:1,
bastard:1,
beastial:1,
beastiality:1,
bellend:1,
bestial:1,
bestiality:1,
"bi+ch":1,
biatch:1,
bitch:1,
bitcher:1,
bitchers:1,
bitches:1,
bitchin:1,
bitching:1,
cawk:1,
chink:1,
cipa:1,
cnut:1,
coon:1,
cum:1,
cummer:1,
cumming:1,
cums:1,
cumshot:1,
cunilingus:1,
cunillingus:1,
cunnilingus:1,
cunt:1,
"cuntlick ":1,
"cuntlicker ":1,
"cuntlicking ":1,
cunts:1,
cyalis:1,
cyberfuc:1,
"cyberfuck ":1,
"cyberfucked ":1,
cyberfucker:1,
cyberfuckers:1,
"cyberfucking ":1,
d1ck:1,
dick:1,
dickhead:1,
dildo:1,
dildos:1,
dink:1,
dinks:1,
dlck:1,
"dog-fucker":1,
doggin:1,
dogging:1,
donkeyribber:1,
doosh:1,
duche:1,
dyke:1,
ejaculate:1,
ejaculated:1,
"ejaculates ":1,
"ejaculating ":1,
ejaculatings:1,
ejaculation:1,
ejakulate:1,
"f u c k":1,
"f u c k e r":1,
f4nny:1,
fag:1,
fagging:1,
faggitt:1,
faggot:1,
faggs:1,
fagot:1,
fagots:1,
fags:1,
fanny:1,
fannyflaps:1,
fannyfucker:1,
fanyy:1,
fatass:1,
fecker:1,
felching:1,
fellate:1,
fellatio:1,
"fingerfuck ":1,
"fingerfucked ":1,
"fingerfucker ":1,
fingerfuckers:1,
"fingerfucking ":1,
"fingerfucks ":1,
fistfuck:1,
"fistfucked ":1,
"fistfucker ":1,
"fistfuckers ":1,
"fistfucking ":1,
"fistfuckings ":1,
"fistfucks ":1,
flange:1,
fook:1,
fooker:1,
fuck:1,
fucka:1,
fucked:1,
fucker:1,
fuckers:1,
fuckhead:1,
fuckheads:1,
fuckin:1,
fucking:1,
fuckings:1,
fucks:1,
fuckwhit:1,
fuckwit:1,
"fudge packer":1,
fudgepacker:1,
fuk:1,
fuker:1,
fukker:1,
fukkin:1,
fuks:1,
fukwhit:1,
fukwit:1,
fux:1,
fux0r:1,
f_u_c_k:1,
gangbang:1,
"gangbanged ":1,
"gangbangs ":1,
gaylord:1,
gaysex:1,
goatse:1,
God:1,
"god-dam":1,
"god-damned":1,
goddamn:1,
goddamned:1,
"hardcoresex ":1,
heshe:1,
hoar:1,
hoare:1,
hoer:1,
homo:1,
hore:1,
horniest:1,
horny:1,
hotsex:1,
"jack-off ":1,
jackoff:1,
jap:1,
"jerk-off ":1,
jism:1,
"jiz ":1,
"jizm ":1,
jizz:1,
kawk:1,
knob:1,
knobead:1,
knobed:1,
knobend:1,
knobhead:1,
knobjocky:1,
knobjokey:1,
kock:1,
kondum:1,
kondums:1,
kum:1,
kummer:1,
kumming:1,
kums:1,
kunilingus:1,
"l3i+ch":1,
l3itch:1,
m0f0:1,
m0fo:1,
masochist:1,
"mo-fo":1,
mof0:1,
mofo:1,
mothafuck:1,
mothafucka:1,
mothafuckas:1,
mothafuckaz:1,
"mothafucked ":1,
mothafucker:1,
mothafuckers:1,
mothafuckin:1,
"mothafucking ":1,
mothafuckings:1,
mothafucks:1,
"mother fucker":1,
motherfuck:1,
motherfucked:1,
motherfucker:1,
motherfuckers:1,
motherfuckin:1,
motherfucking:1,
motherfuckings:1,
motherfuckka:1,
motherfucks:1,
muff:1,
mutha:1,
muthafecker:1,
muthafuckker:1,
muther:1,
mutherfucker:1,
n1gga:1,
n1gger:1,
nazi:1,
nigg3r:1,
nigg4h:1,
nigga:1,
niggah:1,
niggas:1,
niggaz:1,
nigger:1,
"niggers ":1,
nob:1,
"nob jokey":1,
nobhead:1,
nobjocky:1,
nobjokey:1,
numbnuts:1,
nutsack:1,
p0rn:1,
pawn:1,
pecker:1,
phonesex:1,
pimpis:1,
pusse:1,
pussi:1,
pussies:1,
pussy:1,
"pussys ":1,
rectum:1,
retard:1,
rimjaw:1,
rimming:1,
"s hit":1,
"s.o.b.":1,
sadist:1,
schlong:1,
screwing:1,
scroat:1,
scrote:1,
scrotum:1,
shag:1,
shagger:1,
shaggin:1,
shagging:1,
shemale:1,
"shi+":1,
skank:1,
slut:1,
sluts:1,
smegma:1,
smut:1,
snatch:1,
"son-of-a-bitch":1,
spac:1,
spunk:1,
tosser:1,
turd:1,
tw4t:1,
twat:1,
twathead:1,
twatty:1,
twunt:1,
twunter:1,
w00se:1,
wanker:1,
wanky:1,
whoar:1,
whore:1,
willies:1,
willy:1,
"foxnews":1,
"fox news":1
};

var badKeys = Object.keys(bad_words);
