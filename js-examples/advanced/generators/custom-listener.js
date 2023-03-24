function* listener() {
    console.log('listening....');
    while(true){
        let msg = yield;
        console.log('heard:', msg)
    }
}

let custom = listener(true);
custom.next('...')
custom.next('agora é sério...')
custom.next('hablas español?')
