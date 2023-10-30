# Hypertension Vitals & Warning System

This system aims to provide immediate feedback based on the given Systolic and Diastolic blood pressure readings. It categorizes the input into various classes of hypertension, hypotension, and provides appropriate guidance and advice to the user.

## Features:

1. **Instant Feedback**: Get immediate health warnings based on your blood pressure reading.
2. **Guided Messages**: Depending on the severity of the reading, receive clear instructions or advice.
3. **Symptomatic Checks**: For borderline conditions, the system can take an additional input to provide more specific guidance.

## How it works:

Based on the provided Systolic and Diastolic blood pressure readings, the system classifies the result into one of the following categories:

- Hypertensive Urgency or Emergency
- Hypotension
- Borderline Hypotension
- Uncontrolled Hypertension
- Poorly Controlled Hypertension
- Partially Controlled Hypertension
- Well Controlled Hypertension

## Usage:

1. Instantiate the class:
    ```typescript
    let htnWarning = new Hypertension_Vital_Warning();
    ```

2. Call the method with Systolic and Diastolic readings:
    ```typescript
    let message = htnWarning.HTN_Vitals_Display_Message(145, 88);
    console.log(message);
    ```

## Testing:

The testing suite provides an array of various blood pressure readings to validate the correctness of the system. By running the test suite, you will receive expected messages for each reading.

## Note:

Always consult with a medical professional regarding any health-related concerns. This system provides generalized advice and should not replace a medical professional's guidance.
