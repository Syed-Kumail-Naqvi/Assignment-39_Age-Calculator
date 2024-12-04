function ageCalculator() {

    var result = document.getElementById('result');
    var DOB = document.getElementById('birthdate').value;
    
    var age = new Date().getTime() - new Date(DOB).getTime();
    var ageYears = Math.floor(age / (1000 * 60 * 60 * 24 * 365)); 
    var ageMonths = Math.floor((age / (1000 * 60 * 60 * 24 * 30.4167) - (ageYears * 12))); 
    console.log(ageMonths);
    var ageDays = Math.floor(((age / (1000 * 60 * 60 * 24) ) - ((ageYears * 365) + (ageMonths * 30.4167)))); 
    
    result.innerHTML = 'Your Age is : \n' + ageYears + ' years ' + ageMonths + ' months ' + ageDays + ' days';
    
    
    }