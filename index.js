// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
//done

const mColor = [
    'Yellow',
    'Pink',
    'White',
    'Purple',
]

const wColor = [
    'Blue', 
    'Black', 
    'Grey'
]

const mFavResto = [
    'Bento', 
    'Sushi', 
    'Pancake', 
    'Eggy', 
    'Tempura', 
    'Bento', 
    'Eggy', 
    'Padang', 
    'Tteok', 
    'Sushi', 
    'Sushi'
]

const wFavResto = [
    'Tempura', 
    'Bento', 
    'Sushi', 
    'Pancake', 
    'Padang', 
    'Katsu', 
    'Geprek', 
    'Pancake', 
    'Eggy'
]

let mColorSet = new Set(mColor);
let wColorSet = new Set(wColor);
let mFavRestoSet = new Set(mFavResto);
let wFavRestoSet = new Set(wFavResto);

const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: [...mColorSet],
    isHavePet: true,
    education:{
        name: 'SD 01',
        city: 'Jakarta',
        graduate: 2016
    },
    favoriteRestaurant: [...mFavRestoSet]
};

const secondUser = {
    name: 'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    favoriteColor: [...wColorSet],
    isHavePet: false,
    education:{
        name: 'SD 02',
        city: 'Jakarta',
        graduate: 2010
    },
    favoriteRestaurant: [...wFavRestoSet]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
//done
const users = [];
users.push(firstUser);
users.push(secondUser);


// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};