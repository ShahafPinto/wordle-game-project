
export async function getStartGameFromServer() {
    await fetch('/words')
    .then((response) => response.json())
}


export async function sendGuess(guess:string){
    console.log('check new guess')   
    const getResult = await fetch('http://localhost:3333/handle', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify({guess})
    })
        
    return await getResult.json()
}
