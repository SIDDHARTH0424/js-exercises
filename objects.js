// 4. Build a summary from an object (destructuring)
const person = { name: "Siddharth", age: 21, skills: ["Python", "JS"] };
const { name, age, skills } = person;
console.log(`${name} is ${age} and knows ${skills.join(", ")}`);

// 5. Count how many times each word appears
const countWords = (text) => {
  const counts = {};
  for (const word of text.toLowerCase().split(" ")) {
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
};
console.log(countWords("the cat and the hat")); // { the: 2, cat: 1, and: 1, hat: 1 }