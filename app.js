const { encryption, anonymization, validation, compliance } = require('./index.js');


// Encrypt and Decrypt Example

const key = 'mysecretkey';
const data = `The principal basis for restricting cell phone use in the classroom is that phones can act as a distraction. Not only do students and teachers become diverted, but this has an analogous impact on someone glancing at their device during a movie screening - even if it's silent, the illuminated display will still divert one's focus away from what matters most
When debating mobile phone regulations in the classroom, safety is typically brought to the forefront. Emergencies may happen at any time and students should have their phones with them for peace of mind. Parents' needs come into play too; if a student has children, they could need access to call someone during medical emergencies. Furthermore, if an individual is on standby for work-related matters then having a cell phone accessible would be useful as well - there are endless plausible scenarios that make it difficult not to provide exceptions from these rules!
To ensure all students have an opportunity to learn without distraction, the optimal choice is to establish and enforce mobile phone usage rules. With these guidelines in place, pupils should be able to carry their devices with them as long as they remain on silent during class hours. This way, phones are easily accessible for any necessary use but don't interfere with anyone's learning experience. Vibrate settings can be allowed if the instructor feels comfortable with it, as the buzz may not be heard in a crowded classroom. In an emergency situation, students can quickly step out of class to answer their phones. This will create a more relaxed environment for both instructors and students alike.
Cell phone restrictions in the classroom should be enforced with clear and specific disciplinary measures for violations. For instance, if a student is caught using their cell phone during class, they can be excused from that day's classes. Professors should avoid seizing control of the device out of consideration for potential liability issues. It's safer to request students leave the classroom than take away their phones, as any damages incurred while in a professor's possession could result in liability for repairs on behalf of the school or instructor.
Word count for 500-word Body paragraph: 354 words`
const cipherText = encryption.encrypt(data, key);

console.log('Encrypted:', cipherText);
console.log('Decrypted:', encryption.decrypt(cipherText, key));

// Anonymization Example
const sensitiveData = '1234567890123456';
console.log('Masked Data:', anonymization.maskData(sensitiveData));
const token = anonymization.tokenize(sensitiveData);
console.log('Token:', token);



// Validation Example
const userInput = 'userInput123';
console.log('Is input valid?', validation.validateInput(userInput));

// Compliance Example
const report = compliance.generateComplianceReport([data]);
console.log('Compliance Report:', report);


