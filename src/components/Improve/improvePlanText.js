export const warmUpText = [

    { title: "Cardiovascular (5-10 minutes)", text: "Engage in moderate-intensity cardiovascular activity such as jogging in place, jumping rope, stationary cycling, or doing jumping jacks. The goal is to gradually elevate your heart rate and increase blood circulation throughout the body." },
    { title: "Joint Mobility (5 minutes)", text: "Spend a few minutes mobilizing the major joints of the body, such as the neck, shoulders, elbows, wrists, hips, knees, and ankles. Perform gentle and controlled movements in circles, side to side, and up and down to improve range of motion and prepare the joints for the upcoming work." },
    { title: "Dynamic Stretching (5 minutes):", text: "Perform a series of dynamic stretches focusing on the muscles and muscle groups you'll be working during your training session. This may include dynamic lunges, trunk rotations, arm and leg stretches, and spinal flexion and extension movements. Hold each stretch for 10-15 seconds and perform fluid, controlled movements." },
    { title: "Muscle Activation (5 minutes):", text: "Perform specific muscle activation exercises for the major muscle groups you'll be targeting during your training session. This may include resistance band exercises for glute activation, shoulder mobility exercises with resistance bands, or core activation exercises such as elbow planks or leg raises. Perform 8 to 12 repetitions of each exercise, focusing on feeling the mind-muscle connection." },
    { title: "", text: "By following this structured warm-up example, you'll adequately prepare your body for the physical work ahead, reducing the risk of injuries and optimizing your performance during the training session. Make sure to adapt the warm-up according to your individual needs and the type of training you'll be doing." },

]

export const coolDownText = [

    { title: "Static Stretching (5-10 minutes)", text: "Perform a series of static stretches for the major muscle groups you've worked during your training session. Hold each stretch for at least 20-30 seconds, breathing deeply and relaxing the stretched muscle. This will help improve flexibility, reduce muscle tension, and prevent stiffness." },
    { title: "Foam Rolling (5 minutes)", text: "Use a foam roller to perform self-myofascial release on specific areas of the body that may be tight or sore. Focus on the muscles worked during the training session, gently rolling over them to release tension and improve blood circulation." },
    { title: "Breathing and Relaxation (2-5 minutes)", text: "Dedicate a few minutes at the end of your workout to practice deep breathing and relaxation exercises. Sit or lie down in a comfortable position, close your eyes, and focus on breathing slowly and deeply, inhaling through the nose and exhaling through the mouth. This will help reduce stress, calm the mind, and promote an overall sense of well-being." },
    { title: "", text: "By incorporating these habits at the end of each workout, you'll facilitate your body's recovery, reduce the risk of injuries, and prepare yourself for your future training sessions. Remember to listen to your body and adapt these practices according to your individual needs and the type of training you've completed." },

]

export const improvePlanText = [

    { frecuency: "1", program: [{ title: "", exercises: [fullBody] }] },
    { frecuency: "2", program: [{ title: "", exercises: [upperBody, lowerBody] }] },
    { frecuency: "3", program: [{ title: "", exercises: [upperBody, lowerBody, cardioAndCore] }] },
    { frecuency: "4", program: [{ title: "", exercises: [upperBody, lowerBody, recoveryExercise, cardioAndCore] }] },
    { frecuency: "5", program: [{ title: "", exercises: [upperBody, lowerBody, cardioAndCore, upperBody, lowerBody] }] },
    { frecuency: "6", program: [{ title: "", exercises: [upperBody, lowerBody, recoveryExercise, upperBody, lowerBody, cardioAndCore] }] },
    { frecuency: "7", program: [{ title: "", exercises: [upperBody, lowerBody, cardioAndCore, upperBody, lowerBody, cardioAndCore, recoveryExercise] }] },

]

const fullBody = ["Bench Press: 3 sets of 8-12 repetitions.", "Squats: 3 sets of 8-12 repetitions.", "Pull-ups (or Lat Pulldowns): 3 sets of 8-12 repetitions.", "Deadlifts: 3 sets of 8-12 repetitions.", "Planks: 3 sets of 30-60 seconds."];
const upperBody = ["Bench Press: 3 sets of 8-12 repetitions.", "Pull-ups (or Lat Pulldowns): 3 sets of 8-12 repetitions.", "Shoulder Press: 3 sets of 8-12 repetitions.", "Barbell Bicep Curls: 3 sets of 10-15 repetitions.", "Dumbbell Tricep Extensions: 3 sets of 10-15 repetitions.", "High Cable Tricep Extensions: 3 sets of 10-15 repetitions."];
const lowerBody = ["Squats: 3 sets of 8-12 repetitions.", "Deadlifts: 3 sets of 8-12 repetitions.", "Lunges: 3 sets of 10 repetitions per leg.", "Calf Raises: 3 sets of 12-15 repetitions."];
const cardioAndCore = ["Running or Stationary Bike: 20-30 minutes.", "Planks: 3 sets of 30-60 seconds.", "Crunches: 3 sets of 15-20 repetitions.", "Hanging Leg Raises: 3 sets of 10-15 repetitions."];
const recoveryExercise = ["Engage in low-intensity activity such as walking, swimming, or yoga for 30-45 minutes."]