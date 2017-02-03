var tcc = require('to-capital-case');

document
    .getElementsByTagName('span')[0]
        .innerText = tcc('i want to be capital case!');

