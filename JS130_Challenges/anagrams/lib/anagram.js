// PEDAC
// understand the problem
// -> a program to takes a word and a list of possible anagrams 
// return a list of the correct sublist that conatians the anagarms of the word
// What is an anagram?
// -> It is a word formed by rearranging the letters of a another word
// -> so it is a word formed by the exactly same letters of another word but in different order

// examples /test cases
// word : 'listen'
// list of possible anagrams : ["enlists", "google", "inlets", and "banana"]
// the returned list : ["inlets"]
// If there is no match -> return empty array
// "enlists" is not anagram of "listen" -> there are double 's'
// identical word is not anagram "corn" -> "corn" "not anagram"-> "cron" "is anagram" 
// anagram are case-Insensitive "corn" => "Corn" is anagram

// Data structure
// object to represent the anagaram word
// array to represent the list of possible anagram
// another array to represent the list of the correct anagram


// Algorithm
// constructor for anagaram object
// -> word
// match method
// -> takes a list (array of words) as an argument
// -> declare a result variable and assigne to it an empty array (to hold the correct sublist)
// -> select the correct word(s) that contains anagram for the word
//    -> loop over the input array 
//       -> for each element check if:
//           -> isAnagram if the current element and the word have:
//             -> the same number of letters and the same letters 
//             -> and same letter cases(lower, upper)
//           -> if it is added to the result array
// -> return the result array



// code

class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  isAnagram(word1, word2) {
    if(word1.length !== word2.length || word1 === word2) return false;
    else {
      word1 = word1.split('').sort().join();
      word2 = word2.split('').sort().join();

      return word1 === word2;
    }
  }

  match(list) {
    
    return list.filter(currentWord => {
     return this.isAnagram(currentWord.toLowerCase(), this.word)
      });
  }
}

module.exports = Anagram;














