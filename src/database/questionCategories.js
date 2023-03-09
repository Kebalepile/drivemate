import {
  ROAD_RULES,
  ROAD_SURFACE_MARKINGS,
  WARNING_SIGNS,
  HEAVY_VEHICLE_CONTROLS,
  LIGHT_VEHICLE_CONTROLS,
} from "../context/Types";


/**
 * @description Containing Category as key and Array of
 * question Objects as Entires.
 * @returns Map
 */
//  /assets/quiz-images\hv.jpg
export default function categories() {
  return new Map([
    [
      HEAVY_VEHICLE_CONTROLS,
      [
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question: "Which control is used to assist driver change the gear",
          answers: ["8", "10", "7"],
          correct: "8",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question: "Which control is used to change direction of the car",
          answers: ["5", "4", "11"],
          correct: "4",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question:
            "Which control is used to ensure parked vehicle does not move",
          answers: ["7", "6", "9"],
          correct: "7",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question: "Which control is used to stop your vehicle",
          answers: ["8", "9", "7"],
          correct: "9",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question: "Which control is used to increase speed",
          answers: ["10", "8", "9"],
          correct: "10",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question:
            "Which control is used to alert other road users of your intentions to turn left/right",
          answers: ["5", "4", "3"],
          correct: "5",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question: "Which control is used when driving in rainy conditions",
          answers: ["2", "3", "4"],
          correct: "2",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question: "Which control is used to check the rear of your vehicle",
          answers: ["1", "3", "4"],
          correct: "1",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question: "Which Control combination used to change gears",
          answers: ["8 and 6", "9 and 10", "6 and 7"],
          correct: "8 and 6",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question: "To decrease speed you use ...",
          answers: ["8", "9", "10"],
          correct: "9",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question: "Distance it takes for a heavy vehicle to stop is...",
          answers: [
            "Longer if carrying a load or on wet surface than dry surface",
            "Longer when driving at a higher speed",
            "All of the above",
          ],
          correct: "All of the above",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question:
            "Which control is used to stop on a steep decline and prevent vehicle  from rolling backwards",
          answers: ["6", "7", "8"],
          correct: "7",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question:
            "Which controls are used to check sides of your vehicle and rear-side",
          answers: ["6 and 8", "1 and 3", "5 and 4"],
          correct: "1 and 3",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
        {
          category: HEAVY_VEHICLE_CONTROLS,
          question: "To turn a sharp curve you must use ...",
          answers: ["1,3,4,6,8,9 and 10", "1,3,4,6,8 only", "2,6,8 and 9"],
          correct: "1,3,4,6,8,9 and 10",
          imgSrc:"/assets/quiz-images/hv.jpg"
        },
      ],
    ],
    [
      LIGHT_VEHICLE_CONTROLS,
      [
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question: "Which control is used to assist driver change the gear",
          answers: ["8", "10", "7"],
          correct: "8",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question: "Which control is used to change direction of the car",
          answers: ["5", "4", "11"],
          correct: "4",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question:
            "Which control is used to ensure parked vehicle does not move",
          answers: ["7", "6", "9"],
          correct: "7",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question: "Which control is used to stop your vehicle",
          answers: ["8", "9", "7"],
          correct: "9",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question:
            "Which control helps you engage and disengage with the gear",
          answers: ["10", "8", "9"],
          correct: "8",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question: "Which control is used to increse speed",
          answers: ["10", "8", "9"],
          correct: "10",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question:
            "Which control is used to alert other road users of your intentions to turn left/right",
          answers: ["5", "4", "3"],
          correct: "5",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question: "Which control is used when driving in rainy conditions",
          answers: ["2", "3", "4"],
          correct: "2",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question: "Which control is used to check the rear of your vehicle",
          answers: ["1", "3", "4"],
          correct: "1",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question: "Which Control combination used to change gears",
          answers: ["8 and 6", "9 and 10", "6 and 7"],
          correct: "8 and 6",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question: "To decrease speed you use ...",
          answers: ["8", "9", "10"],
          correct: "9",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question:
            "Which control is used to avoid stalling before a compelete standstill.",
          answers: ["8", "9", "10"],
          correct: "8",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question: "Distance it takes for a light vehicle to stop is...",
          answers: [
            "Longer if carrying passengers or on wet surface than dry surface",
            "Longer when driving at a higher speed",
            "All of the above",
          ],
          correct: "All of the above",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question:
            "Which control is used to stop on a steep decline and prevent vehicle  from rolling backwards",
          answers: ["6", "7", "8"],
          correct: "7",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question:
            "Which controls are used to check sides of your vehicle and rear-side",
          answers: ["6 and 8", "1 and 3", "5 and 4"],
          correct: "1 and 3",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
        {
          category: LIGHT_VEHICLE_CONTROLS,
          question: "To turn a sharp curve you must use ...",
          answers: ["1,3,4,6,8,9 and 10", "1,3,4,6,8 only", "2,6,8 and 9"],
          correct: "1,3,4,6,8,9 and 10",
          imgSrc:"/assets/quiz-images/lv.jpg"
        },
      ],
    ],

    [
      WARNING_SIGNS,
      [
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Crossroad ahead",
            "Hospital up ahead",
            "None of the above",
          ],
          correct: "Crossroad ahead",
          imgSrc:"/assets/quiz-images/90.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: ["Dead end ahead", "T junction ahead", "Detour ahead"],
          correct: "T junction ahead",
          imgSrc:"/assets/quiz-images/91.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Gentle curve ahead",
            "Sharp curve ahead",
            "Dangerous curve ahead",
          ],
          correct: "Gentle curve ahead",
          imgSrc:"/assets/quiz-images/92.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Right turn only",
            "Sharp curve ahead to your left or your right",
            "No left turn",
          ],
          correct: "Sharp curve ahead to your left or your right",
          imgSrc:"/assets/quiz-images/93.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "U-turn allowed",
            "Hairpin bend ahead",
            "No U-turn allowed",
          ],
          correct: "Hairpin bend ahead",
          imgSrc:"/assets/quiz-images/94.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Winding roads ahead",
            "Lane runs to the right",
            "Slippery surface ahead",
          ],
          correct: "Winding roads ahead",
          imgSrc:"/assets/quiz-images/95.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Two way traffic ahead",
            "One way traffic",
            "You have priority",
          ],
          correct: "Two way traffic ahead",
          imgSrc:"/assets/quiz-images/96.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "End of freeway",
            "End of dual road",
            "Beginning of dual road",
          ],
          correct: "End of dual road",
          imgSrc:"/assets/quiz-images/97.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Beginning of dual road",
            "End of freeway",
            "End of dual road",
          ],
          correct: "Beginning of dual road",
          imgSrc:"/assets/quiz-images/98.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Road narrows from both sides",
            "Road narrows from left",
            "Road narrows from right",
          ],
          correct: "Road narrows from both sides",
          imgSrc:"/assets/quiz-images/99.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Blasting ahead",
            "Falling rocks ahead",
            "Steep cliff ahead",
          ],
          correct: "Falling rocks ahead",
          imgSrc:"/assets/quiz-images/100.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Workmen ahead",
            "Pedestrian crossing ahead",
            "Robots ahead",
          ],
          correct: "Robots ahead",
          imgSrc:"/assets/quiz-images/101.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Traffic flow in both directions",
            "The crossroads ahead carries two way traffic",
            "None of the above",
          ],
          correct: "The crossroads ahead carries two way traffic",
          imgSrc:"/assets/quiz-images/102.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: ["Left lane ends ahead", "Right lane ends ahead"],
          correct: "Left lane ends ahead",
          imgSrc:"/assets/quiz-images/103.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Weight bridge ahead",
            "Narrow tunnel ahead",
            "Only one vehicle width can pass through at any given time",
          ],
          correct: "Only one vehicle width can pass through at any given time",
          imgSrc:"/assets/quiz-images/104.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "No skidding allowed",
            "Slippery road ahead",
            "None of the above",
          ],
          correct: "Slippery road ahead",
          imgSrc:"/assets/quiz-images/105.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Tunnel ahead",
            "Switch on your lights",
            "Dual lanes ahead",
          ],
          correct: "Tunnel ahead",
          imgSrc:"/assets/quiz-images/106.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Pedestrian crossing ahead",
            "Children ahead",
            "No pedestrians allowed",
          ],
          correct: "Pedestrian crossing ahead",
          imgSrc:"/assets/quiz-images/107.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Pedestrians ahead",
            "Pedestrian corssing ahead",
            "No pedestrians allowed",
          ],
          correct: "Pedestrians ahead",
          imgSrc:"/assets/quiz-images/108.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Children ahead",
            "No pedestrians allowed",
            "Pedestrian crossing ahead",
          ],
          correct: "Children ahead",
          imgSrc:"/assets/quiz-images/109.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Hazard ahead, drive careful",
            "Robot ahead",
            "No traffic signal ahead",
          ],
          correct: "Hazard ahead, drive careful",
          imgSrc:"/assets/quiz-images/110.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Road leads to a river bank ahead",
            "Road ends ahead",
            "River ahead",
          ],
          correct: "Road leads to a river bank ahead",
          imgSrc:"/assets/quiz-images/111.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Airport ahead",
            "Cross winds ahead",
            "Windstock ahead to check the wind flow",
          ],
          correct: "Cross winds ahead",
          imgSrc:"/assets/quiz-images/112.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Motor gate ahead",
            "Boom gate ahead",
            "Railway crossing ahead",
          ],
          correct: "Motor gate ahead",
          imgSrc:"/assets/quiz-images/113.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: ["No smiling ahead", "Potholes ahead", "None of the above"],
          correct: "Potholes ahead",
          imgSrc:"/assets/quiz-images/114.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: ["Uneven road ahead", "River crossing", "Speed bumps ahead"],
          correct: "Uneven road ahead",
          imgSrc:"/assets/quiz-images/115.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: ["Hunting ahead", "Wild animals ahead", "Game park ahead"],
          correct: "Wild animals ahead",
          imgSrc:"/assets/quiz-images/117.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: ["Farm ahead", "Bed and Breakfast ahead", "Farm gate ahead"],
          correct: "Farm gate ahead",
          imgSrc:"/assets/quiz-images/118.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Sharp curve to the left",
            "Gentle curve to the left",
            "One way road to the left",
          ],
          correct: "Sharp curve to the left",
          imgSrc:"/assets/quiz-images/119.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Railway crossing ahead",
            "No entry ahead",
            "Motor gate ahead",
          ],
          correct: "Railway crossing ahead",
          imgSrc:"/assets/quiz-images/120.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: ["T-junction ahead", "Dead end ahead", "Detour ahead"],
          correct: "Dead end ahead",
          imgSrc:"/assets/quiz-images/121.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: ["Dead end ahead", "Traffic circle", "Freeway ahead"],
          correct: "Traffic circle",
          imgSrc:"/assets/quiz-images/122.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Speed bumps ahead",
            "Pedestrian crossing ahead",
            "None of the above",
          ],
          correct: "Speed bumps ahead",
          imgSrc:"/assets/quiz-images/116.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Stop control ahead due to scholar patrol",
            "Stop street ahead",
            "Stop control ahead due to road works",
          ],
          correct: "Stop control ahead due to scholar patrol",
          imgSrc:"/assets/quiz-images/123.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Maximum mass 4.42 kg on bridge",
            "Minimal speed 4.42 km/h",
            "Maximum Height restriction ahead",
          ],
          correct: "Maximum Height restriction ahead",
          imgSrc:"/assets/quiz-images/124.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Drift ahead",
            "Beware of puddles on the road",
            "Swimming pool ahead",
          ],
          correct: "Drift ahead",
          imgSrc:"/assets/quiz-images/125.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Road works ahead",
            "End of Gravel Road",
            "Uneven road ahead",
          ],
          correct: "End of Gravel Road",
          imgSrc:"/assets/quiz-images/126.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Airpot ahead",
            "Low flying aircraft ahead",
            "Air show ahead",
          ],
          correct: "Low flying aircraft ahead",
          imgSrc:"/assets/quiz-images/127.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Stop before the white line",
            "Stop on the white line",
            "Yield and proceed when it is safe to do so",
          ],
          correct: "Stop before the white line",
          imgSrc:"/assets/quiz-images/128.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Stop before the stop sign and wait for a policeman",
            "Stop only if you see a policeman",
            "None of the above",
          ],
          correct: "Stop before the stop sign and wait for a policeman",
          imgSrc:"/assets/quiz-images/129.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Pass by slowly",
            "You may proceed",
            "Stop and if safe you may proceed",
          ],
          correct: "You may proceed",
          imgSrc:"/assets/quiz-images/130.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Stop behind the dotted lines",
            "You have right of way",
            "Traffic in the road that you are entering have the right of way",
          ],
          correct:
            "Traffic in the road that you are entering have the right of way",
          imgSrc:"/assets/quiz-images/131.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Do not stop if turning left",
            "You have right of way to the left",
            "Slow down as traffic to the right has the right of way before U-turn left",
          ],
          correct:
            "Slow down as traffic to the right has the right of way before U-turn left",
          imgSrc:"/assets/quiz-images/132.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Be on the lokout for pedestrians",
            "Yield and stop for pedestrians",
            "Slow down and wave as you have right of way",
          ],
          correct: "Yield and stop for pedestrians",
          imgSrc:"/assets/quiz-images/133.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "You are not allowed to proceed pass this sign",
            "Road ahead is closed",
            "Slow down and beware of trucks",
          ],
          correct: "You are not allowed to proceed pass this sign",
          imgSrc:"/assets/quiz-images/134.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "When approaching circle you have right of way",
            "Slow down and approach with caution as traffic to your right has the right of way",
            "Slow down and approach with caution as traffic to your left has right of way",
          ],
          correct:
            "Slow down and approach with caution as traffic to your right has the right of way",
          imgSrc:"/assets/quiz-images/135.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Left turn up ahead",
            "Right turn up ahead",
            "Traffic in this one way must travel in the direction of the arrow",
          ],
          correct:
            "Traffic in this one way must travel in the direction of the arrow",
          imgSrc:"/assets/quiz-images/136.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Traffic in both directions",
            "Wait for the oncoming traffic to pass and proceed when it is safe to do so",
            "None of the above",
          ],
          correct:
            "Wait for the oncoming traffic to pass and proceed when it is safe to do so",
          imgSrc:"/assets/quiz-images/137.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "One way road ahead",
            "Detour ahead",
            "Drive to the left of the sign",
          ],
          correct: "Drive to the left of the sign",
          imgSrc:"/assets/quiz-images/138.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Vehicles with 10t or more must only use this lane",
            "Vehicles heavier than 10t may not proceed in this lane",
            "Other vehicles cannot use this portion of the road",
          ],
          correct: "Vehicles with 10t or more must only use this lane",
          imgSrc:"/assets/quiz-images/139.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Proceed in the direction of the arrow only",
            "Dead end",
            "One way traffic",
          ],
          correct: "Proceed in the direction of the arrow only",
          imgSrc:"/assets/quiz-images/140.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Sharp curves ahead to your left",
            "Turn left at the junction ahead",
            "Direction to traffic",
          ],
          correct: "Turn left at the junction ahead",
          imgSrc:"/assets/quiz-images/141.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Tunnel up ahead",
            "A pay toll up ahead",
            "Lane reserved for taxis",
          ],
          correct: "A pay toll up ahead",
          imgSrc:"/assets/quiz-images/142.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Switch off your headlights",
            "Switch on your headlights",
            "Non of the above",
          ],
          correct: "Switch on your headlights",
          imgSrc:"/assets/quiz-images/143.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "No hooting allowed for the next 100 meters",
            "No hooting allowed for the next 150 meters",
            "No hooting allowed for the next 250 meters",
          ],
          correct: "No hooting allowed for the next 100 meters",
          imgSrc:"/assets/quiz-images/144.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "No hitching allowed for the next 500 meters",
            "No hitching allowed for the next 440 meters",
            "No hitching allowed for the next 250 meters",
          ],
          correct: "No hitching allowed for the next 500 meters",
          imgSrc:"/assets/quiz-images/145.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "No unauthorized vehicles permitted",
            "No entry to all vehicles",
            "None of the above",
          ],
          correct: "No unauthorized vehicles permitted",
          imgSrc:"/assets/quiz-images/146.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "No left turn allowed",
            "No right turn allowed",
            "You amy proceed straight",
          ],
          correct: "No left turn allowed",
          imgSrc:"/assets/quiz-images/147.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Only busses allowed in this lane",
            "Reserved parking for busses",
            "Busses not allowed in this lane",
          ],
          correct: "Only busses allowed in this lane",
          imgSrc:"/assets/quiz-images/148.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Start of a lane reserved for busses only",
            "Only busses allowed",
            "Start of the rest areas for busses",
          ],
          correct: "Start of a lane reserved for busses only",
          imgSrc:"/assets/quiz-images/149.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Power line up ahead",
            "Beginning of Dual freeway",
            "End of dual carriage freeway",
          ],
          correct: "Beginning of Dual freeway",
          imgSrc:"/assets/quiz-images/151.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "No parking for busses",
            "Reserved parking for busses only",
            "None of the above",
          ],
          correct: "Reserved parking for busses only",
          imgSrc:"/assets/quiz-images/150.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "One way road",
            "Stop if turning right",
            "You are not allowed to turn to the Right",
          ],
          correct: "You are not allowed to turn to the Right",
          imgSrc:"/assets/quiz-images/152.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "You are not allowed to make a U-turn",
            "No hairpin bends up ahead",
            "Sharp curve up ahead",
          ],
          correct: "You are not allowed to make a U-turn",
          imgSrc:"/assets/quiz-images/153.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "No overtaking for the next 500 meters",
            "No overtaking for the next 600 meters",
            "No overtaking for the next 400 meters",
          ],
          correct: "No overtaking for the next 500 meters",
          imgSrc:"/assets/quiz-images/154.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "No pedestrians",
            "No parking",
            "No police station up ahead",
          ],
          correct: "No parking",
          imgSrc:"/assets/quiz-images/155.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "You may not exceed this speed indication in a rural area",
            "You may not exceed this speed indication on the freeway",
            "This is the minimum speed allowed",
          ],
          correct: "You may not exceed this speed indication in a rural area",
          imgSrc:"/assets/quiz-images/156.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Maximum speed for taxis",
            "Vehicles exceeding this mass may not proceed beyond this sign",
            "None of the above",
          ],
          correct:
            "Vehicles exceeding this mass may not proceed beyond this sign",
          imgSrc:"/assets/quiz-images/157.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "No speed limit",
            "No stopping allowed",
            "No shopping allowed",
          ],
          correct: "No stopping allowed",
          imgSrc:"/assets/quiz-images/158.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "No busses allowed",
            "Off load zone for busses",
            "Be on the lookout for busses",
          ],
          correct: "No busses allowed",
          imgSrc:"/assets/quiz-images/159.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "No loud noise",
            "Helmets to be worn at all times",
            "Motor Cycles Prohibited",
          ],
          correct: "Motor Cycles Prohibited",
          imgSrc:"/assets/quiz-images/160.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Motor Cars prohibited",
            "Motor Cars only",
            "None of the above",
          ],
          correct: "Motor Cars prohibited",
          imgSrc:"/assets/quiz-images/161.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Goods Vehicle prohibited",
            "Deliveries only",
            "Motor Cars only",
          ],
          correct: "Goods Vehicle prohibited",
          imgSrc:"/assets/quiz-images/162.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Maximum height for vehicles",
            "Goods vehicles & Goods vehicles over the indicated GVM prohibited",
            "Trucks only",
          ],
          correct:
            "Goods vehicles & Goods vehicles over the indicated GVM prohibited",
          imgSrc:"/assets/quiz-images/163.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Nothing important",
            "Overhead lane direction control arrows",
            "Neon Signage",
          ],
          correct: "Overhead lane direction control arrows",
          imgSrc:"/assets/quiz-images/164.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Warning - 60 zone",
            "Maximum speed is 60 during the day",
            "Minimum speed",
          ],
          correct: "Warning - 60 zone",
          imgSrc:"/assets/quiz-images/165.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Stop warning – railway",
            "Stop Robots up ahead",
            "Warning Robot Crossing ahead",
          ],
          correct: "Stop warning – railway",
          imgSrc:"/assets/quiz-images/166.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Stopping prohibited for vehicles carrying hazardous substances",
            "Truck Stop ahead",
            "Single Lane  for trucks only",
          ],
          correct:
            "Stopping prohibited for vehicles carrying hazardous substances",
          imgSrc:"/assets/quiz-images/167.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "U-turn permitted at night only",
            "No U-turn permitted at night",
            "Hairpin bend up ahead",
          ],
          correct: "No U-turn permitted at night",
          imgSrc:"/assets/quiz-images/168.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Authorised vehicles permitted during these hours only",
            "No Unauthorised vehicles permitted during these hours",
            "No Entry during these hours",
          ],
          correct: "Authorised vehicles permitted during these hours only",
          imgSrc:"/assets/quiz-images/169.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Motor racing allowed",
            "Use this lane to exit the road in the case of an emergency",
            "All of the above",
          ],
          correct: "Use this lane to exit the road in the case of an emergency",
          imgSrc:"/assets/quiz-images/170.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Do not drive slower than 80 km/h in the right lane",
            "Do not exceed 80 km/h in the right lane",
            "Do not exceed 80 km/h in the left lane",
          ],
          correct: "Do not drive slower than 80 km/h in the right lane",
          imgSrc:"/assets/quiz-images/171.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "You have the right of way",
            "Yield to traffic as they have the right of way",
            "Stop as the traffic ahead of you have the right of way",
          ],
          correct: "You have the right of way",
          imgSrc:"/assets/quiz-images/172.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "200m away to the freeway exit",
            "100m away to the freeway exit",
            "300m away to the freeway exit",
          ],
          correct: "200m away to the freeway exit",
          imgSrc:"/assets/quiz-images/173.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "The road ahead leads to the N1",
            "Cuire Ave is 706 km ahead",
            "None of the above",
          ],
          correct: "The road ahead leads to the N1",
          imgSrc:"/assets/quiz-images/175.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Cul de sac",
            "Lane reserved for taxis",
            "T junction up ahead",
          ],
          correct: "Cul de sac",
          imgSrc:"/assets/quiz-images/174.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "The right hand lane ends 500 m ahead",
            "Beware there is a  island 500 m ahead",
            "Beware the left hand lane ends 500 m ahead",
          ],
          correct: "The right hand lane ends 500 m ahead",
          imgSrc:"/assets/quiz-images/176.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Steep hill, heavy vehicles must change to a lower gear",
            "Steep hill, heavy vehicles must slow down",
            "Steep hill, heavy vehicles must stay in the left lane",
          ],
          correct: "Steep hill, heavy vehicles must change to a lower gear",
          imgSrc:"/assets/quiz-images/177.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Stop for a yield sign",
            "Stop for pedestrians crossing",
            "Stop as for a stop sign",
          ],
          correct: "Stop as for a stop sign",
          imgSrc:"/assets/quiz-images/178.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Lane reserved for on coming traffic",
            "Start of freeway",
            "Railway crossing ahead",
          ],
          correct: "Lane reserved for on coming traffic",
          imgSrc:"/assets/quiz-images/179.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Directional arrows",
            "Steep incline",
            "Lane safe to be used in the direction of the arrow",
          ],
          correct: "Lane safe to be used in the direction of the arrow",
          imgSrc:"/assets/quiz-images/180.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Flashing red light, Stop as for a yield sign",
            "Flashing red light, Stop as for a 4 way stop",
            "Flashing red light, Stop as for a pedestrian crossing",
          ],
          correct: "Flashing red light, Stop as for a 4 way stop",
          imgSrc:"/assets/quiz-images/181.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Proceed in the direction of the green arrow as you have the right of way",
            "Slow down",
            "Give way to oncoming traffic",
          ],
          correct:
            "Proceed in the direction of the green arrow as you have the right of way",
          imgSrc:"/assets/quiz-images/182.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Yield as there might be pedestrians crossing ahead",
            "A steady green lights means pedestrians has the right of way to cross",
            "None of the above",
          ],
          correct:
            "A steady green lights means pedestrians has the right of way to cross",
          imgSrc:"/assets/quiz-images/183.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Red flashing arrow, you have right of way",
            "Red flashing arrow, you may proceed",
            "Red flashing arrow, you must stop before the line",
          ],
          correct: "Red flashing arrow, you must stop before the line",
          imgSrc:"/assets/quiz-images/184.jpg"
        },
        {
          category: WARNING_SIGNS,
          question: "CHOOSE THE CORRECT SIGN DISPLAYED",
          answers: [
            "Yield oncoming traffic",
            "Temporary obstruction left of the road",
            "You can use a yield as a stop sign",
          ],
          correct: "Temporary obstruction left of the road",
          imgSrc:"/assets/quiz-images/tob.jpg"
        },
      ],
    ],

    [
      ROAD_RULES,
      [
        {
          category: ROAD_RULES,
          question: "If you are in car B, must you ...",
          answers: [
            "Reduce speed and drive on if it is safe to do so",
            "Stop before the Stop line after car A has left",
            "Drive overtake car A",
          ],
          correct: "Stop before the Stop line after car A has left",
          imgSrc:"/assets/quiz-images/sketch4.jpg"
        },
        {
          category: ROAD_RULES,
          question: "What is the speed limit in Urban areas?",
          answers: ["60km/h", "120km/h", "100km/h"],
          correct: "60km/h",
          imgSrc:"/assets/quiz-images/1-3.jpeg"
        },
        {
          category: ROAD_RULES,
          question: "What is the speed limit in Rural areas?",
          answers: ["60km/h", "120km/h", "100km/h"],
          correct: "100km/h",
          imgSrc:"/assets/quiz-images/1-3.jpeg"
        },
        {
          category: ROAD_RULES,
          question: "What is the speed limit in Freeway/National Roads?",
          answers: ["60km/h", "120km/h", "100km/h"],
          correct: "120km/h",
          imgSrc:"/assets/quiz-images/1-3.jpeg"
        },
        {
          category: ROAD_RULES,
          question: "what is the most importent rule to remember?",
          answers: [
            "Do not overtake on rural areas",
            "You alwas have right of way",
            "Keep left, Pass right",
          ],
          correct: "Keep left, Pass right",
          imgSrc: [
            "/assets/quiz-images/4.1.jpg",
            "/assets/quiz-images/4.2.jpg",
          ],
        },

        {
          category: ROAD_RULES,
          question: "Do not Overtake",
          answers: [
            "A vehicle slowing down",
            "A stationary bus at a bus stop",
            "When approaching a hill or blind rise",
          ],
          correct: "When approaching a hill or blind rise",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question: "You can over take on the left side of the road if",
          answers: [
            "You are overtaking a bus or tractor",
            "The car infront of you is turning right",
            "Overtaking is not prohibited",
          ],
          correct: "The car infront of you is turning right",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question: "When another vehicle is overtaking you, you must",
          answers: [
            "Keep as far left as possible",
            "Slow down so that vehicle may overtake you",
            "Drive on the shoulder of the road so that the other vehicle can pass",
          ],
          correct: "Keep as far left as possible",
          imgSrc:"/assets/quiz-images/5.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "When overtaking which of the following are you allowed to do?",
          answers: [
            "Exceed speed limit",
            "Overtake a vehicle that has stopped at a stop sign",
            "Pass on the left in a one way street that is wide enough for two vehicles to pass next to each other",
          ],
          correct:
            "Pass on the left in a one way street that is wide enough for two vehicles to pass next to each other",
          imgSrc:"/assets/quiz-images/6.jpg"
        },
        {
          category: ROAD_RULES,
          question: "Never overtake",
          answers: [
            "On a curve, except when the road is wide enough",
            "If overtaking can create a danger to any other vehicle on the road",
            "All of the above",
          ],
          correct:
            "If overtaking can create a danger to any other vehicle on the road",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question:
            "When driving on a road with traffic lanes, what should you not do",
          answers: [
            "Straddle from side to side",
            "Change lanes",
            "Keep in your designated lane",
          ],
          correct: "Straddle from side to side",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question: "At a stop sign you must",
          answers: [
            "Stop on the white line painted on the road",
            "Slow down and if it is safe you may proceed",
            "Bring your car to a complete stop and proceed only when it is safe to do so",
          ],
          correct:
            "Bring your car to a complete stop and proceed only when it is safe to do so",
          imgSrc:"/assets/quiz-images/8.jpg"
        },
        {
          category: ROAD_RULES,
          question: "Only change lanes when ...",
          answers: [
            "It is safe to do so",
            "You have given clear indication to warn other motorist of your intentions",
            "All of the above",
          ],
          correct: "It is safe to do so",
          imgSrc:"/assets/quiz-images/7.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "You have to obey the signals given by traffice officer or police man only",
          answers: [
            "Always",
            "Only at a road block",
            "Only at an accident scene",
          ],
          correct: "Always",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question: "At a yield sign you must",
          answers: [
            "Slow down and if it is safe you may proceed",
            "Bring you car to a complete stop and proceed only when safe to do so",
            "Stop at the white line painted on the road",
          ],
          correct: "Slow down and if it is safe you may proceed",
          imgSrc: [
            "/assets/quiz-images/11.1.jpg",
            "/assets/quiz-images/11.2.jpg",
          ],
        },
        {
          category: ROAD_RULES,
          question: "At a pedestrian crossing",
          answers: [
            "Pedestrians awalys have right of way",
            "Always stop for pedestrians and once they have crossed and it is safe to do so you may proceed",
            "Reduce speed and continue driving as you have right of way",
          ],
          correct:
            "Always stop for pedestrians and once they have crossed and it is safe to do so you may proceed",
          imgSrc:"/assets/quiz-images/13.jpg"
        },
        {
          category: ROAD_RULES,
          question: "Which of the following is a no stopping area?",
          answers: [
            "a demarcated loading zone",
            "Within a railway reserve at a level crossing",
            "On left hand side of the street",
          ],
          correct: "On left hand side of the street",
          imgSrc:"/assets/quiz-images/14.jpg"
        },
        {
          category: ROAD_RULES,
          question: "Which hand signals can you use on a freeway?",
          answers: [
            "Stop signal",
            "Turning left or right",
            "Hand signals are not allowed on a freeway",
          ],
          correct: "Hand signals are not allowed on a freeway",
          imgSrc:"/assets/quiz-images/15.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "Which of the following vehicles are not allowed on the freeway",
          answers: [
            "Construction vehicles",
            "Motorcycles under 50 cc",
            "Busses",
          ],
          correct: "Motorcycles under 50 cc",
          imgSrc:"/assets/quiz-images/16.jpg"
        },
        {
          category: ROAD_RULES,
          question: "When turning right",
          answers: [
            "Turn as wide as possible to your right",
            "Yield to oncoming traffic and move to the right hand side of the road",
            "Indicate your intentions once you have turned",
          ],
          correct:
            "Yield to oncoming traffic and move to the right hand side of the road",
          imgSrc:"/assets/quiz-images/17.jpg"
        },
        {
          category: ROAD_RULES,
          question: "You are not allowed to park...",
          answers: [
            "Within 1.5 meters from a fire hydrent",
            "Less then 5 meters from an intersaction",
            "All of the above",
          ],
          correct: "Within 1.5 meters from a fire hydrent",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question: "Emergency vehicle",
          answers: [
            "Always have the right of way when their alarms/sirens are activated",
            "Alaways ahve right of way",
            "Can drive as fast as they want",
          ],
          correct:
            "Always have the right of way when their alarms/sirens are activated",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question: "How close are you allowed to stop at a pedestrian stop?",
          answers: [
            "Not within 9 meters",
            "Not within 7 meters",
            "Not within 12 meters",
          ],
          correct: "Not within 9 meters",
          imgSrc:"/assets/quiz-images/22.jpg"
        },
        {
          category: ROAD_RULES,
          question: "A vehicle is assumed to be abandoned if ...",
          answers: [
            "Left for 7days or more in same place next to a public road",
            "No one is the vehicle",
            "Vehicle is parked in a loading zone",
          ],
          correct: "Left for 7days or more in same place next to a public road",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question: "Headlights must be switched on ...",
          answers: [
            "Between sunset and sunrise or whenever visibility is not clear",
            "Always",
            "Whenever visibility is not clear for more then 250 meters ahead",
          ],
          correct:
            "Between sunset and sunrise or whenever visibility is not clear",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question: "When towing distance between 2 vehicles must ...",
          answers: [
            "Not be greater then 3.5 meters",
            "Not be greater then 3 meters",
            "Not be greater then 4.5 meters",
          ],
          correct: "Not be greater then 3.5 meters",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question: "When are passenger allowed in a vehicle being towed ?",
          answers: [
            "If vehicle is towed with a solid tow bar",
            "If there is sufficient tow rope",
            "All of the above",
          ],
          correct: "if vehicle is towed with a solid tow bar",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question:
            "When is it allowed to have a persons body parts protruding from the vehicle ?",
          answers: [
            "Never",
            "When he is giving indication as to what he intends to do slow down, turn left etc...",
            "When the driver is greeting someone",
          ],
          correct:
            "When he is giving indication as to what he intends to do slow down, turn left etc...",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question: "What is the first thing one must do at collision?",
          answers: [
            "Stop your car immediately",
            "Call the police",
            "Continue driving report the matter later",
          ],
          correct: "Stop your car immediately",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question:
            "How long after a collision should you report the matter to the police?",
          answers: [
            "Imediately after you stop your car",
            "Within 24hours after the collision",
            "Within 72hours after the collision",
          ],
          correct: "Within 24hours after the collision",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question:
            "If someone is fatally injured in a collision, when can you move the vehicles",
          answers: [
            "Once you have taken down all relevant details",
            "Only if collision is an obstruction to flow of traffic",
            "Only if collision is obstructing flow of traffic and position of the vehicles has been clearly marked on the road",
          ],
          correct:
            "Only if collision is obstructing flow of traffic and position of the vehicles has been clearly marked on the road",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question: "When transporting goods on the roof of a vehicle",
          answers: [
            "maximum height is 2 meters",
            "maximum height is 3 meters",
            "maximum height is up to half of the vehicle height",
          ],
          correct: "maximum height is up to half of the vehicle height",
          imgSrc:"/assets/quiz-images/25.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "WHEN YOU COME TO AN INTERSECTION AND THE ROAD BEYOND IS CHOKED WITH VEHICLES GOING IN THE SAME DIRECTION, WHAT SHOULD YOU DO?",
          answers: [
            "Proceed if there is no traffic on your right",
            "Wait until there is room for you to completely cross the intersection",
            "Travel into the intersection and wait until traffic ahead moves",
          ],
          correct:
            "Wait until there is room for you to completely cross the intersection",
          imgSrc: [
            "/assets/quiz-images/26.jpg",
            "/assets/quiz-images/26.2.jpg",
          ],
        },
        {
          category: ROAD_RULES,
          question:
            "RIGHT-TURNS MUST BE MADE FROM WHICH LANES WHEN TRAVELLING ON A LANED ROADWAY?",
          answers: [
            "The far right-hand lane or any other lane having an arrow pointing right",
            "The lane carrying least traffic",
            "The far left lane",
          ],
          correct:
            "The far right-hand lane or any other lane having an arrow pointing right",
          imgSrc:"/assets/quiz-images/27.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "IN THIS DIAGRAM BOTH VEHICLES O AND P MUST PASS THROUGH YIELD SIGNS BEFORE ENTERING THE INTERSECTION . WHICH VEHICLE MUST DRIVES FIRST",
          answers: [
            "It depands on who moves on first",
            "Vehicle O goes first",
            "Vehicle P goes first",
          ],
          correct: "Vehicle O goes first",
          imgSrc:"/assets/quiz-images/28.jpg"
        },
        {
          category: ROAD_RULES,
          question: "VEHICLE O IS AT A STOP SIGN ",
          answers: [
            "Vehicle O must give way to vehicles P, Q and R",
            "Vehicle O must give right of way only to R",
            "All Vehicles must give way to vehicle O",
          ],
          correct: "Vehicle O must give way to vehicles P, Q and R",
          imgSrc:"/assets/quiz-images/29.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            'IF BOTH VEHICLES P AND O IN THE DIAGRAM ARE TURNING RIGHT, WHICH VEHICLE IS IN THE BEST POSITION TO TURN LEFT INTO THE STREET MARKED "X"?',
          answers: ["Vehicle P", "Neither vehicle", "Vehicle O"],
          correct: "Vehicle P",
          imgSrc:"/assets/quiz-images/30.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "THE DIAGRAM SHOWS A MARKED PEDESTRIAN CROSSING AT AN INTERSECTION. THERE IS ALSO A STOP SIGN AT THE INTERSECTION. YOU HAVE ALREADY STOPPED FOR A PEDESTRIAN. MUST YOU STOP AGAIN AT THE STOP LINE?",
          answers: [
            "Yes, at all times",
            "Yes, if there is traffic on your right only",
            "No, if the intersection is clear",
          ],
          correct: "Yes, at all times",
          imgSrc:"/assets/quiz-images/31.jpg"
        },
        {
          category: ROAD_RULES,
          question: "A YIELD SIGN AT AN INTERSECTION MEANS THAT YOU MUST ",
          answers: [
            "Stop completely at all times as you do not have right of way",
            "Be ready to stop and give way to all other traffic if there is danger of a collision",
            "Slow down and only give way to traffic on your right",
          ],
          correct:
            "Be ready to stop and give way to all other traffic if there is danger of a collision",
          imgSrc:"/assets/quiz-images/32.jpg"
        },
        {
          category: ROAD_RULES,
          question: "WHICH VEHICLE IN THE DIAGRAM MUST GIVE WAY?",
          answers: ["Vehicle K", "Vehicle J", "Vehicle L"],
          correct: "Vehicle J",
          imgSrc:"/assets/quiz-images/33.jpg"
        },
        {
          category: ROAD_RULES,
          question: "WHEN THESE LIGHTS ARE FLASHING IT MEANS ",
          answers: [
            "Pedestrians must not start to cross the intersection",
            "Pedestrians who have started crossing must go back to the footpath",
            "Pedestrians are not allowed in this area at this time",
          ],
          correct: "Pedestrians must not start to cross the intersection",
          imgSrc:"/assets/quiz-images/34.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "AT THE T-INTERSECTION SHOWN IN THE DIAGRAM WHICH VEHICLE SHOULD GIVE WAY?",
          answers: ["Vehicle R", "Vehicle Q", "Vehicle that got there last"],
          correct: "Vehicle R",
          imgSrc:"/assets/quiz-images/35.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "YOU WANT TO MAKE A RIGHT-HAND TURN FROM A ONE WAY STREET WITH NO ARROWS MARKED ON THE ROADWAY. YOU SHOULD POSITION YOUR VEHICLE ",
          answers: [
            "On the right-hand side of the street",
            "In the middle of the street",
            "On the left-hand side of the street",
          ],
          correct: "On the right-hand side of the street",
          imgSrc:"/assets/quiz-images/36.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "WHEN THERE ARE NO ARROWS MARKED ON THE ROAD, LEFT TURNS MUST BE MADE FROM ",
          answers: [
            "The far left-hand side of the road",
            "The middle of the road",
            "Either side of the road",
          ],
          correct: "The far left-hand side of the road",
          imgSrc:"/assets/quiz-images/37.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "WHAT SHOULD YOU DO ON APPROACHING A RAILWAY LEVEL CROSSING DISPLAYING A STOP SIGN?.",
          answers: [
            "Stop at all times and proceed when safe to do so",
            "Slow down to 10km/h, then proceed through the crossing",
            "Stop, only if a train is at the crossing",
          ],
          correct: "Stop at all times and proceed when safe to do so",
          imgSrc:"/assets/quiz-images/38.jpg"
        },
        {
          category: ROAD_RULES,
          question: "YOU ARE DRIVING THE CAR IN THE DIAGRAM. YOU MUST STOP",
          answers: [
            "Only if there is danger of a collision with another vehicle",
            "Only if there is a car on your right or left",
            "Even when there is no other traffic",
          ],
          correct: "Even when there is no other traffic",
          imgSrc:"/assets/quiz-images/39.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "THERE ARE NO TRAFFIC SIGNS OR SIGNALS AT AN INTERSECTION. IF YOU INTEND TO DRIVE THROUGH THE INTERSECTION, YOU MUST GIVE WAY TO ",
          answers: [
            "Vehicles on your right",
            "Vehicles on your left only",
            "An oncoming vehicle about to turn right.",
          ],
          correct: "Vehicles on your right",
          imgSrc:"/assets/quiz-images/40.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "WHEN MAKING A RIGHT-HAND TURN AT THE INTERSECTION SHOWN, YOU MUST GIVE WAY TO",
          answers: [
            "An oncoming vehicle going straight ahead or turning left, and any vehicle on your right",
            "A vehicle approaching from your left and intending to turn right",
            "Only pedestrians",
          ],
          correct:
            "An oncoming vehicle going straight ahead or turning left, and any vehicle on your right",
          imgSrc: [
            "/assets/quiz-images/41.1.jpg",
            "/assets/quiz-images/41.2.jpg",
          ],
        },
        {
          category: ROAD_RULES,
          question:
            "IF TURNING RIGHT AT A T-INTERSECTION (AS SHOWN) MUST YOU GIVE WAY TO VEHICLES APPROACHING FROM BOTH THE LEFT AND RIGHT?",
          answers: [
            "No, only the vehicle on the right",
            "No, you have right of way",
            "Yes, whether they are turning or not",
          ],
          correct: "Yes, whether they are turning or not",
          imgSrc: [
            "/assets/quiz-images/42.1.jpg",
            "/assets/quiz-images/42.2.jpg",
          ],
        },
        {
          category: ROAD_RULES,
          question:
            "IF A STOP OR YIELD SIGN HAS BEEN KNOCKED DOWN, FOR EXAMPLE, AS THE RESULT OF AN ACCIDENT, DOES THE LINE MARKED ACROSS THE ROAD HAVE ANY MEANING?",
          answers: [
            "Yes, it has the same meaning as the sign itself",
            "No, you only need to give way to the vehicle on your right",
            "None of the above",
          ],
          correct: "Yes, it has the same meaning as the sign itself",
          imgSrc:"/assets/quiz-images/43.1.1.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "IF TURNING AT AN INTERSECTION ARE YOU REQUIRED TO GIVE WAY TO PEDESTRIANS?",
          answers: [
            "Yes, only if turning right",
            "Yes, only if turning left",
            "Yes, a driver turning right or left must give way to pedestrians, if there is a danger of a collision",
          ],
          correct:
            "Yes, a driver turning right or left must give way to pedestrians, if there is a danger of a collision",
          imgSrc: [
            "/assets/quiz-images/43.1.jpg",
            "/assets/quiz-images/43.2.jpg",
          ],
        },
        {
          category: ROAD_RULES,
          question:
            "WHEN APPROACHING A RAILWAY LEVEL CROSSING DISPLAYING THIS SIGN, YOU MUST",
          answers: [
            "Increase your speed to avoid any approaching trains",
            "Slow down, look both ways for trains and be prepared to stop if necessary",
            "Continue across at normal speed, do not slow down",
          ],
          correct:
            "Slow down, look both ways for trains and be prepared to stop if necessary",
          imgSrc: [
            "/assets/quiz-images/44.1.jpg",
            "/assets/quiz-images/44.2.jpg",
          ],
        },
        {
          category: ROAD_RULES,
          question:
            "EVEN IF THE SIGNAL AT A RAILWAY LEVEL CROSSING DOES NOT INDICATE THAT A TRAIN IS COMING, YOU SHOULD.",
          answers: [
            "Slow down, be ready to stop and give way if there is danger of collision",
            "Speed up and cross the tracks quickly",
            "Stop completely at all times",
          ],
          correct:
            "Slow down, be ready to stop and give way if there is danger of collision",
          imgSrc: [
            "/assets/quiz-images/45.1.jpg",
            "/assets/quiz-images/45.2.jpg",
          ],
        },
        {
          category: ROAD_RULES,
          question:
            "YOU ARE IN THE CAR APPROACHING THE INTERSECTION SHOWN, YOU SHOULD ",
          answers: [
            "Come to a complete stop before you come to the intersection",
            "Drive carefully and approach at a speed which gives you good time to avoid traffic which might suddenly appear",
            "Flash your lights to let other vehicles know that you are coming",
          ],
          correct:
            "Drive carefully and approach at a speed which gives you good time to avoid traffic which might suddenly appear",
          imgSrc:"/assets/quiz-images/46.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "YOU APPROACH AN INTERSECTION IN BUSY TRAFFIC AND WANT TO GO STRAIGHT AHEAD. THE TRAFFIC LIGHTS TURN GREEN. WHEN ARE YOU PERMITTED TO ENTER THE INTERSECTION?",
          answers: [
            "Only when there is room for your vehicle on the other side",
            "Immediately after the traffic lights turn green",
            "When the vehicle behind signals you to go",
          ],
          correct: "Only when there is room for your vehicle on the other side",
          imgSrc:"/assets/quiz-images/47.jpg"
        },
        {
          category: ROAD_RULES,
          question: "WHICH STATEMENT IS CORRECT? ",
          answers: [
            "Red light cameras take photographs of vehicles that speed through intersections",
            "Red light cameras take photographs of vehicles that cross intersections when the lights are yellow",
            "Red light cameras take photographs of vehicles that enter intersections when the lights are red",
          ],
          correct:
            "Red light cameras take photographs of vehicles that enter intersections when the lights are red",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question:
            "AS YOU DRIVE INTO AN INTERSECTION, THE LIGHTS TURN TO YELLOW. YOU SHOULD",
          answers: [
            "Continue through the intersection",
            "Brake immediately to a stop",
            "Accelerate as hard as you can",
          ],
          correct: "Continue through the intersection",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question:
            "YOU DRIVE UP TO AN INTERSECTION WITH A STOP SIGN. THERE IS NO PAINTED STOP LINE. WHERE SHOULD YOU STOP?",
          answers: [
            "At least five metres before the intersection",
            "At the point where you can see clearly in both directions",
            "Before coming to and as near to the intersection as possible",
          ],
          correct:
            "Before coming to and as near to the intersection as possible",
          imgSrc: [
            "/assets/quiz-images/50.2.jpg",
            "/assets/quiz-images/50.1.jpg",
          ],
        },
        {
          category: ROAD_RULES,
          question:
            "WHEN POLICE OFFICERS ARE AT INTERSECTIONS GIVING DIRECTIONS YOU MUST",
          answers: [
            "Wait for the traffic lights to start working again",
            "Drive through the intersection as you normally would",
            "Always follow any instruction the traffic officer give you",
          ],
          correct: "Always follow any instruction the traffic officer give you",
          imgSrc: "not available",
        },
        {
          category: ROAD_RULES,
          question:
            "YOU WISH TO TURN LEFT AT THIS TRAFFIC CIRCLE. WHICH LANE MAY YOU USE?",
          answers: ["Right lane", "Either lane", "Left lane"],
          correct: "Left lane",
          imgSrc:"/assets/quiz-images/52.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "YOU ARE IN THE RIGHT HAND LANE AND ARE PLANNING TO GO STRAIGHT AHEAD THROUGH THE TRAFFIC CIRCLE. WHEN SHOULD YOU SIGNAL LEFT TO EXIT THE CIRCLE?",
          answers: ["After point M", "After point N", "After point O"],
          correct: "After point O",
          imgSrc:"/assets/quiz-images/53.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "WHEN YOU WISH TO TURN LEFT AT A TRAFFIC CIRCLE YOU MUST INDICATE",
          answers: [
            "Only if you think it necessary",
            "Left from start to finish",
            "Left only after you enter the roundabout ",
          ],
          correct: "Left from start to finish",
          imgSrc:"/assets/quiz-images/54.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "YOU WISH TO GO STRAIGHT AHEAD AT THIS TRAFFIC CIRCLE. WHICH STATEMENT IS TRUE?",
          answers: [
            "You must enter in the right lane and leave the left",
            "You must leave the roundabout in the same lane as you entered",
            "All of the above",
          ],
          correct:
            "You must leave the roundabout in the same lane as you entered",
          imgSrc:"/assets/quiz-images/55.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "YOU WISH TO GO STRAIGHT AHEAD ON THIS TRAFFIC CIRCLE WITH TWO LANES. WHICH LANE MAY YOU USE?",
          answers: ["Either lane", "Left lane only", "Right lane only"],
          correct: "Either lane",
          imgSrc:"/assets/quiz-images/56.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "THE MOTORCYCLIST WANTS TO TRAVEL STRAIGHT AHEAD THROUGH THIS TRAFFIC CIRCLE . THE RIDER SHOULD WATCH OUT FOR THE CAR MARKED A ,BECAUSE -",
          answers: [
            "May stop suddenly",
            "He may be leaving the roundabout",
            "Could be going too fast",
          ],
          correct: "He may be leaving the roundabout",
          imgSrc:"/assets/quiz-images/57.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "TO TURN BACK INTO THE SAME ROAD FROM WHICH YOU JOINED THIS TRAFFIC CIRCLE, YOU MUST",
          answers: [
            "Stay in the right lane all the way round",
            "Move into the left lane to leave the roundabout",
            "Use the left lane all the way round",
          ],
          correct: "Stay in the right lane all the way round",
          imgSrc:"/assets/quiz-images/58.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "THE RED CAR WANTS TO TURN RIGHT AND EXIT THE CIRCLE IN THE STREET INDICATED BY THE YELLOW ARROW. IS THE CAR POSITIONED IN THE CORRECT LANE TO DO THIS?",
          answers: [
            "No, the car should enter the roundabout only from the right hand lane",
            "Yes, the car can make the turn only from this lane",
            "Yes, the car can make the turn from either the left hand or the right hand lane",
          ],
          correct:
            "No, the car should enter the roundabout only from the right hand lane",
          imgSrc:"/assets/quiz-images/59.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "IF YOU ENTER AN INTERSECTION THAT IS UNDER THE CONTROL OF A TRAFFIC CONTROLLER",
          answers: [
            "Sound your horn at the traffic controller and hope they give you the right of way",
            "Follow the directions of the Traffic Controller",
            "Stop at the intersection and then proceed slowly",
          ],
          correct: "Follow the directions of the Traffic Controller",
          imgSrc:"/assets/quiz-images/60.jpg"
        },
        {
          category: ROAD_RULES,
          question:
            "YOU ARE AT AN INTERSECTION AND SEE PEDESTRIANS CROSSING THE ROAD INTO WHICH YOU ARE TURNING. YOU MUST ",
          answers: [
            "Give way to the pedestrian",
            "Sound your horn to warn the pedestrian to get out of the way",
            "Swerve around the pedestrian to avoid hitting them",
          ],
          correct: "Give way to the pedestrian",
          imgSrc:"/assets/quiz-images/61.jpg"
        },
      ],
    ],
    [
      ROAD_SURFACE_MARKINGS,
      [
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: ["Centre line", "Lane line", "Kerb marking"],
          correct: "Centre line",
          imgSrc:"/assets/quiz-images/62.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "No overtaking line",
            "Dividing line",
            "You may overtake on the right-hand side",
          ],
          correct: "No overtaking line",
          imgSrc:"/assets/quiz-images/63.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Double barrier line",
            "Overtake if it is safe to do so",
            "Traffic on the same side as the broken line may overtake ",
          ],
          correct: "Traffic on the same side as the broken line may overtake",
          imgSrc:"/assets/quiz-images/64.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Overtake only if it is safe to do so",
            "No traffic may cross the solid lines from either side",
            "Pedestrian crossing up ahead",
          ],
          correct: "No traffic may cross the solid lines from either side",
          imgSrc:"/assets/quiz-images/65.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: ["Double center lane", "Lane lines", "Don't change lanes"],
          correct: "Lane lines",
          imgSrc:"/assets/quiz-images/66.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Cycling lane",
            "You may change lanes",
            "Used to regulate the flow of traffic",
          ],
          correct: "Used to regulate the flow of traffic",
          imgSrc:"/assets/quiz-images/67.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Temporally sign",
            "Reserved for busses only",
            "You are allowed to park your cycle here",
          ],
          correct: "Reserved for busses only",
          imgSrc:"/assets/quiz-images/68.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "No overtaking on the left",
            "Parking is prohibited in demarcated area",
            "Reservation line",
          ],
          correct: "Parking is prohibited in demarcated area",
          imgSrc:"/assets/quiz-images/69.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Parking prohibited",
            "Loading zone",
            "Park more than 1m from the edge of the road",
          ],
          correct: "Parking prohibited",
          imgSrc:"/assets/quiz-images/70.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Bus stop ahead",
            "Indicates the right edge of the road",
            "All of the above",
          ],
          correct: "Indicates the right edge of the road",
          imgSrc:"/assets/quiz-images/71.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Pedestrian crossing lines",
            "Intersections lines",
            "Solid barrier lines",
          ],
          correct: "Pedestrian crossing lines",
          imgSrc:"/assets/quiz-images/72.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: ["Stop line", "Yield line", "Right angle line"],
          correct: "Stop line",
          imgSrc:"/assets/quiz-images/73.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Temprary stopping line",
            "No stopping line",
            "None of the above",
          ],
          correct: "No stopping line",
          imgSrc:"/assets/quiz-images/74.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Hazard markings",
            "One way streets",
            "Yellow arrows are compulsory and white arrows are for information",
          ],
          correct:
            "Yellow arrows are compulsory and white arrows are for information",
          imgSrc:"/assets/quiz-images/75.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: ["Barrier line", "Yield line", "Staggered line"],
          correct: "Yield line",
          imgSrc:"/assets/quiz-images/76.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Keep in the left line",
            "Barrier line ahead",
            "Road curves to the left",
          ],
          correct: "Barrier line ahead",
          imgSrc:"/assets/quiz-images/77.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "One way street",
            "Stay in your current line",
            "Indicates the flow of traffic",
          ],
          correct: "Indicates the flow of traffic",
          imgSrc:"/assets/quiz-images/78.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: ["Speed bump", "Railway crossing", "None of the above"],
          correct: "Speed bump",
          imgSrc:"/assets/quiz-images/79.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Railway crossing ahead",
            "No entry sign",
            "Speed bump ahead",
          ],
          correct: "Railway crossing ahead",
          imgSrc:"/assets/quiz-images/80.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Painted island. You may not drive over it",
            "Painted island you may drive over it",
            "You may stop here",
          ],
          correct: "Painted island. You may not drive over it",
          imgSrc:"/assets/quiz-images/81.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "You may park here for a maximum of 30 minutes",
            "Loading zone. Reserved for loading only",
            "Reserved for trucks only",
          ],
          correct: "Loading zone. Reserved for loading only",
          imgSrc:"/assets/quiz-images/82.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Park with all the wheels within the marking",
            "Two vehicles may park here",
            "No parking area",
          ],
          correct: "Park with all the wheels within the marking",
          imgSrc:"/assets/quiz-images/83.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Painted island",
            "Double railway crossing",
            "No stopping area, except to yield",
          ],
          correct: "No stopping area, except to yield",
          imgSrc:"/assets/quiz-images/84.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: [
            "Do not enter this area, unless you can pass through it without blocking any on coming traffic",
            "No stopping area",
            "Painted island",
          ],
          correct:
            "Do not enter this area, unless you can pass through it without blocking any on coming traffic",
          imgSrc:"/assets/quiz-images/85.jpg"
        },
        {
          category: ROAD_SURFACE_MARKINGS,
          question: "CHOOSE THE ROAD SURFACE MARKING DISPLAYED",
          answers: ["Yield sign ahead", "Stop sign ahead", "Right turn ahead"],
          correct: "Yield sign ahead",
          imgSrc:"/assets/quiz-images/86.jpg"
        },
      ],
    ],
  ]);
}
