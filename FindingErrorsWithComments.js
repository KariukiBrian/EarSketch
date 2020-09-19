// javascript code
//
// script_name: Finding Errors With Comments
//
// author: The EarSketch Team
//
// editor: Brian
//
// description: This script causes an error. Fix the error by
//              commenting out blocks
//
//

//Setup

//Missing semi-colons
init();
setTempo(130);

//Music

var claps = HOUSE_BREAKBEAT_006;
var singleClap = OS_CLAP03;
var hiHat = HOUSE_BREAKBEAT_012;
var kick = HOUSE_BREAKBEAT_023;
var chords = RD_EDM_ANALOGPLUCK_2;
var lead1 = RD_EDM_ANALOGPLUCK_1;
var lead2 = RD_TRAP_ARPBLEEPLEAD_5;
var lead3 = HOUSE_DEEP_ARPLEAD_001;
var bass1 = ELECTRO_ANALOGUE_BASS_013;
var bass2 = ELECTRO_ANALOGUE_BASS_008;
var noiseSweep = TECHNO_WHITENOISESFX_001;

//Leads
fitMedia(lead1, 3, 17, 24);
fitMedia(lead2, 8, 17, 25);
fitMedia(lead2, 8, 9, 10);
fitMedia(lead2, 8, 11, 12);
fitMedia(lead2, 8, 13, 14);
fitMedia(lead2, 8, 15, 17);
fitMedia(lead3, 4, 5, 24);

//Beat
fitMedia(kick, 1, 1, 24);
fitMedia(claps, 2, 5, 16);
fitMedia(claps, 2, 17, 24);
fitMedia(singleClap, 9, 16.75, 16.875);
fitMedia(singleClap, 9, 16.875, 17);
fitMedia(hiHat, 7, 17, 24); //Missing closing parentheses and semicolon

//Auxiliary
fitMedia(chords, 3, 1, 17);
fitMedia(noiseSweep, 6, 15, 17);
fitMedia(bass2, 5, 9, 17);
fitMedia(bass1, 5, 17, 24);

//Finish
finish();