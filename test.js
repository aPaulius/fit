'use strict';

var path = require ('path');
var fs = require ('fs');
var fit = require ('fit');
var colors = require ('colors');
var clear = require ('clear');

clear ();

var filepath = path.resolve(__dirname, 'Garmin/SPORTS/0RRUN.FIT');
console.log('\nFIT file > '.cyan + filepath.green + '\n');

