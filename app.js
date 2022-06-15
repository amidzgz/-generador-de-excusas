let todoslosdominios = function(){
    var pronoun = ["the", "our"];
    var adj = ["great", "big"];
    var noun = ["jogger", "racoon"];
            for (let pro of pronoun) {
                for (let adj1 of adj) {
                    for (let nuon of noun) {
                        console.log(domainname(pro,adj1,nuon)); 
          }
        }
        
      }
    }
    let domainname = function(pronoun,adj,noun) {
        return `${pronoun}${adj}${noun}.com`; 
    }; 
    todoslosdominios();