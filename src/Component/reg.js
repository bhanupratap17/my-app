// let reg =  /Bhanu/g;
//    reg =  /Bhanu/g;
//    reg =  /Bhanu/;

// let str = 'My name is Bhanu pratap bhana and bhanu';
// console.log(reg.source);

//  exec() function : return array if mathing is found otherwise return  nulll   

// let result = reg.exec(str);
// console.log(result);
// result = reg.exec(str);
// console.log(result);
// result = reg.exec(str);
// console.log(result);

//remove all the symbols
    let text = '#$%^&&**((my gmail id is bhanubhana02@gmail.com';
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        console.log(letters);
        const res1 = letters.join('');
        console.log(res1);
    