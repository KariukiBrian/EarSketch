// javascript code
//
// script_name: Delay Effect
//
// author: The EarSketch Team
//
// description: Adding delay to a track
//
//
//

//Setup
init()
setTempo(120)

//Music
var lead1 = EIGHT_BIT_ATARI_SYNTH_001;
var lead2 = EIGHT_BIT_ATARI_SYNTH_002;
var pad1 = EIGHT_BIT_ATARI_PAD_002;
var pad2 = EIGHT_BIT_ATARI_PAD_003;
var drums1 = EIGHT_BIT_ANALOG_DRUM_LOOP_004;
var drums2 = EIGHT_BIT_ANALOG_DRUM_LOOP_003;

fitMedia(lead1, 1, 1, 7);
fitMedia(lead2, 1, 7, 9);
fitMedia(pad1, 2, 1, 3);
fitMedia(pad2, 2, 3, 5);
fitMedia(pad1, 2, 5, 7);
fitMedia(pad2, 2, 7, 9);
fitMedia(drums1, 3, 3, 5);
fitMedia(drums2, 3, 5, 9);

//Effects

//setEffect(1, DELAY, DELAY_TIME, 500); // Adds a delay (echo) effect, at intervals of 500ms
//setEffect(1, DELAY, DELAY_FEEDBACK, -20.0); // Lowers the relative amount of repeats (default is -3.0)

//Finish
finish()