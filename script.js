const input=document.querySelector('input')
const btn= document.querySelector('button')

const dictionary = document.querySelector('.dictionary-app')
// https://api.dictionaryapi.dev/api/v2/entries/en/<word>
async function dictionaryFn(word) {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${ word}`)
.then((res) => res.json())
console.log(res)
}   
btn.addEventListener('click',fetchandCreateCard)

async function fetchandCreateCard(){
    const data = await dictionaryFn(input.value)


    console.log(data)



    let partOfSpeechArray=[]

for (let i=0; i<data[0].meanings.length-1;i++){
    partOfSpeechArray.push(data.meanings[i].partOfSpeech)

}

    dictionary.innerHTML=`
     <div class="card">
                <!--Word-->
                <div class="property">
                    <span>Word</span>
                    <span>${data.word}</span>
                </div>
                <!--Phonetic-->
                 <div class="property">
                    <span>Phonetic</span>
                    <span>${data.phonetic}</span>
                </div>
                <!--Definition-->
                 <div class="property">
                    <span>Definition</span>
                    <span>${data.meanings[0].definitions[0].definition}</span>
                </div>
                <!--Example-->
                 <div class="property">
                    <span>Example</span>
                    <span>${data.meanings[0].definitions[0].example || 'N/A'}</span>
                </div>
                <!--Parts of Speech-->
                 <div class="property">
                    <span>Parts of Speech</span>
                    <span>${partOfSpeechArray.join(', ')}</span>
                </div>
            </div>'

}


