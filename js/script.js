function capitalizeSentence(sentence) {
  var arr = []
  var words=sentence.split(" ")
  for(var i=0;i<words.length;i++){
    arr.push(words[i].charAt(0).toUpperCase()+words[i].slice(1));
    var result=arr.join(" ")
  }
  return result
}
var inp=prompt("Pleae enter the sentence")
alert(capitalizeSentence(inp));

