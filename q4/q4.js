function ingExtraction(str){
    let words= str.split(' ')
    let ingWords=[]
    for(let value of words){
              if(value.endsWith('ing')&&syllabic(value)>1){
                ingWords.push(value)
              }
    }
    return ingWords
}
function ingExtraction1(str){
          let words= str.split(' ')
          let ingWords=[]
          let ing = /ing$/
          for(let value of words){
                    if(value.match(ing)&&syllabic(value)>1){
                      ingWords.push(value)
                    }
          }
          return ingWords
}
function syllabic(word) {
          word = word.toLowerCase();//word.downcase
          if(word.length <= 3) { 
                    return 1; 
          }//return 1 if word.length <= 3
            if((word.endsWith('ing'))){
                    word = word.replace('ing',' ')
                    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
                    word = word.replace(/^y/, '');//word.sub!(/^y/, '')
                    if(word.match(/[aeiouy]{1,2}/g)){
                       return word.match(/[aeiouy]{1,2}/g).length +1; //word.scan(/[aeiouy]{1,2}/).size
                    }
                   else{
                        return 1;
                    }                                
            } 
            else{
                    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
                    word = word.replace(/^y/, '');//word.sub!(/^y/, '')  
                    return word.match(/[aeiouy]{1,2}/g).length; //word.scan(/[aeiouy]{1,2}/).size

            }
                   
}
console.log(ingExtraction('comming bringing Letting sing'))
console.log(ingExtraction('going ping , king sHrink dOing'))
console.log(ingExtraction('zing went ring, ding wing SINK'))
console.log("________________________________")
console.log(ingExtraction1('comming bringing Letting sing'))
console.log(ingExtraction1('going ping , king sHrink dOing'))
console.log(ingExtraction1('zing went ring, ding wing SINK'))