//jshint esversion:6

exports.getText = function (text) {
    
    if (text.length > 100) {
        return (text.substring(0, 100) + "...");
    }
    else {
        return text;
    }
       
}