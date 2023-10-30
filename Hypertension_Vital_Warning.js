"use strict";
// MAIN HYPERTENSION VITALS & WARNING SYSTEM
// -----------------------------------------
class Hypertension_Vital_Warning {
    // [1] GENERAL FUNCTION
    // --------------------
    HTN_Vitals_Display_Message(Systolic, Diastolic) {
        // In Case of Blood Pressure is Hypertensive Urgent
        // ********** The App will Display High-Risk Warning Message to Call 911 **********
        // --------------------------------------------------------------------------------
        if (Systolic >= 180 || Diastolic >= 110)
            return "You have Hypertensive Urgency or Emergency.";
        // In Case of Blood Pressure is Hypotension
        // ********** The App will Display High-Risk Warning Message to Call 911 **********
        // --------------------------------------------------------------------------------
        else if (Systolic < 90 || Diastolic < 60)
            return "You have Hypotension.";
        // In Case of Blood Pressure is Borderline Hypotension
        // ******** WILL DISPLAY A QUESTION ********
        // -----------------------------------------
        else if (Systolic < 110 || Diastolic < 70)
            return this.Borderline_Hypotension_Question_Result(1);
        // In Case of Blood Pressure is Uncontrolled Hypertension
        // ******** URGENT VISIT WILL BE RECOMMENDED ********
        // --------------------------------------------------
        else if (Systolic >= 160 || Diastolic >= 100) {
            const text_3 = "ou have Uncontrolled Hypertension & Your medications may need ajustment.\n";
            const text_4 = "Do you want to schedule an urgent Tele visit with your PCP?";
            return text_3 + text_4;
        }
        // In Case of Blood Pressure is Poorly Controlled Hypertension
        // ********** Advice Message Will Be Displayed **********
        // ------------------------------------------------------
        else if (Systolic >= 140 || Diastolic >= 90) {
            const text_5 = "You have Poorly Controlled Hypertension that may progress to Uncontrolled Hypertension.\n";
            const text_6 = "Please watch your diet and take your medications as prescribed";
            return text_5 + text_6;
        }
        // In Case of Blood Pressure is Partially Controlled Hypertension
        // ********** Advice Message Will Be Displayed **********
        // ------------------------------------------------------
        else if (Systolic >= 130 || Diastolic >= 80) {
            const text_7 = "You have Partially Controlled Hypertension.\n";
            const text_8 = "With diet control, you will be able to get your Hypertension Well Controlled.";
            return text_7 + text_8;
        }
        // In Case of Blood Pressure is Well Controlled Hypertension
        else if (Systolic < 130 || Diastolic < 80) {
            const text_9 = "You have Well Controlled Hypertension.\n";
            const text_10 = "Please continue your great job";
            return text_9 + text_10;
        }
        // In Case of Occurance of an ERROR !!!
        // ******** ERROR MESSAGE ********
        // -------------------------------
        else
            return "Displaying Message FAILED !!!";
    }
    // BORDERLINE HYPOTENSION QUESTION
    // --------------------------------
    Borderline_Hypotension_Question_Result(Borderline_Hyptension_Question_Answer) {
        // In Case of Sympototic Borderline
        // ******** URGENT VISIT WILL BE RECOMMENDED ********
        // --------------------------------------------------
        if (Borderline_Hyptension_Question_Answer == 1)
            return "Do you want to schedule an urgent Tele visit with your PCP?";
        // In Case of Non-Symptotic Borderline
        // ********** Advice Message Will Be Displayed **********
        // ------------------------------------------------------
        else if (Borderline_Hyptension_Question_Answer == 0) {
            const text_1 = "You BP is borderline low. If you develop any of these symptoms, ";
            const text_2 = "you need to contact your doctor office to schedule an appointment.";
            return text_1 + text_2;
        }
        // In Case of Function Failure
        else
            return "Error in Borderline Hypotension Question Result";
    }
}
// TESTING
// *******
// instantiate the class
let htnWarning = new Hypertension_Vital_Warning();
// various blood pressure readings to test
let testValues = [
    { Systolic: 190, Diastolic: 100 },
    { Systolic: 80, Diastolic: 75 },
    { Systolic: 105, Diastolic: 85 },
    { Systolic: 165, Diastolic: 95 },
    { Systolic: 145, Diastolic: 88 },
    { Systolic: 135, Diastolic: 82 },
    { Systolic: 125, Diastolic: 75 } // Expected: Well Controlled Hypertension.
];
// testing the function for various readings
console.log("\n\n\n");
testValues.forEach(value => {
    let message = htnWarning.HTN_Vitals_Display_Message(value.Systolic, value.Diastolic);
    console.log(`For Systolic: ${value.Systolic}, Diastolic: ${value.Diastolic}\nMessage: ${message}\n\n`);
});
