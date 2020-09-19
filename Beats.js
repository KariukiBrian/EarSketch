// javascript code
//
// script_name: Beats
//
// author: brian
//
// description: Counting beats and sub-beats in a measure.
//
//
//

//Setup

init();
setTempo(120);

//Music Section
// Each kick drum hit lasts a quarter note: 1/4 of a measure.
fitMedia(TECHNO_LOOP_PART_002, 1, 1, 2);

// Each cymbal hit lasts a 16th note: 1/16 of a measure.
fitMedia(TECHNO_LOOP_PART_031, 2, 1, 2);

//Finish Section
finish();