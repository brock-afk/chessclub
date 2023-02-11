class Player {
    name = "NoName";
    elo = 1000;
    constructor (name, elo) {
        this.name = name;
        this.elo = elo;
    }
}

function a_expectation(player_a,player_b) {
    const diff = player_b.rating - player_a.rating;
    const div1 = diff / 400 ;
    const exp = 10 ** div1;
    const plusone = 1 + exp;
    return 1 / plusone
}

function b_expectation(player_a,player_b) {
    const diff = player_a.rating - player_b.rating;
    const div1 = diff / 400 ;
    const exp = 10 ** div1;
    const plusone = 1 + exp;
    return 1 / plusone;
}

const k = 100;
const one_half = 0.5;

function awin(a,b)
    {
        return 1 - a_expection(a,b);
    }

function alose(a,b)
    {
        return 0 - a_expection(a,b);
    }

function adraw(a,b)
    {
        return one_half - a_expection(a,b);
    }

function bwin(a,b)
    {
        return 1 - b_expection(a,b);
    }

function blose(a,b)
    {
        return 0 - b_expection(a,b);
    }

function bdraw(a,b)
    {
        return one_half - b_expection(a,b);
    }

// res = 0 a wins, 1 b wins, 2 draw
function a_prime(a,b,res) {
    if res = 0 then return ((k * awin(a,b)) + a.rating);
    if res = 1 then return ((k * alose(a,b)) + a.rating);
    if res = 2 then return ((k * adraw(a,b)) + a.rating);
}

function b_prime(a,b,res) {
    if res = 0 then return ((k * blose(a,b)) + b.rating);
    if res = 1 then return ((k * bwin(a,b)) + b.rating);
    if res = 2 then return ((k * bdraw(a,b)) + b.rating);
}

function play (a,b,res) {
    const a_new = a_prime(a,b,res);
    const b_new = b_prime(a,b,res);
    a.rating = a_new;
    b.rating = b_new;
}
