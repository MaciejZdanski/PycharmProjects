var spawn = require('child_process').spawn;

function get_routs(app){
    app.get('/', function main_viev(req, res){
        res.sendFile('/index.html')
    } );
    app.get('/register', function register_viev(req, res){
        res.sendFile('/Users/Maciej/PycharmProjects/main/KONSOLA/App/Views/register.html')
    } );
    app.get('/games', function games_viev(req, res){
        res.sendFile('/Users/Maciej/PycharmProjects/main/KONSOLA/App/Views/games.html')
    } );
    app.get('/logout', function logout_viev(req, res){
        res.sendFile('/Users/Maciej/PycharmProjects/main/KONSOLA/App/Views/logout.html')
    } );

    app.get('/kolko', function kolko_viev(req, res){
        spawn('python', ['/Users/Maciej/PycharmProjects/main/KONSOLA/App/Kolko/Kolko-i-krzyzyk-1.py'])
    })
    app.get('/pacman', function pacman_viev(req, res){
        spawn('python', ['/Users/Maciej/PycharmProjects/main/KONSOLA/App/Pacman/main.py'])
    })
}


module.exports = get_routs;