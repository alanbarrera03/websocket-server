//Reference to HTML
const lblOnline  = document.querySelector( '#lblOnline' );
const lblOffline = document.querySelector( '#lblOffline' );
const txtMessage = document.querySelector( '#txtMessage' );
const btnSend    = document.querySelector( '#btnSend' );

const socket = io();


socket.on( 'connect', () => {

    // console.log( 'Connected' );

    lblOnline.style.display  = ''
    lblOffline.style.display = 'none'

});

socket.on( 'disconnect', () => {

    // console.log( 'Server Disonnected' );

    lblOnline.style.display  = 'none'
    lblOffline.style.display = ''

});

socket.on( 'send-message', ( payload ) => {

    console.log( 'Aqui!' );

} )

btnSend.addEventListener( 'click', () => {

    const message = txtMessage.value;
    const payload = {

        message,
        id:'ABC123',
        date: new Date().getTime()

    }

    // console.log( message );

    socket.emit( 'send-message', message, ( id ) => {

        console.log( 'Desde el server', id );

    } );

});