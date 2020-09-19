// javascript code
//
// script_name: Variables
//
// author: brian
//
// description: Using variables to store clips and simplify edits
//
//
//

init();
setTempo(100);

//Music
// Try assigning different clips to "synth1" and "synth2" for a new sound.
var synth1 = HIPHOP_SYNTHPLUCKLEAD_005;
var synth2 = HIPHOP_SOLOMOOGLEAD_001;
var drums = HIPHOP_TRAPHOP_BEAT_008;

// fitMedia adds the clip "synth1" is holding to the DAW
fitMedia(synth1, 1, 1, 2);

// synth1 and synth2 are used many times
fitMedia(synth2, 1, 2, 3);
fitMedia(synth1, 1, 3, 4);
fitMedia(synth2, 1, 4, 5);
fitMedia(synth1, 1, 5, 6);
fitMedia(synth2, 1, 6, 7);
fitMedia(synth1, 1, 7, 8);
fitMedia(synth2, 1, 8, 9);

fitMedia(drums, 2, 1, 9);

//Finish
finish();