

const socketController = ( socket ) => {

    socket.on( 'disconnect', () => {

        // console.log( 'client disconnect');

    });

    socket.on( 'send-message', ( payload, callback ) => {

        const id = 123456;

        callback( id );

        // console.log( payload );

        socket.broadcast.emit( 'send-message', payload )                

    });

}


module.exports = {

    socketController

}