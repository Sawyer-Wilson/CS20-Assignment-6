// Checks if two form submitted numbers are amicable and displays results
function amicableNumbers () {
    // Get user submitted numbers
    x = $('#number1').val();
    y = $('#number2').val();
    
    // Generate and display factors for each number
    xFactors = findFactors(x);
    yFactors = findFactors(y);
    $('#number1-factors').html("Factors of " + x + " are [" + 
                                xFactors.join(', ') + "]")
    $('#number2-factors').html("Factors of " + y + " are [" + 
                                yFactors.join(', ') + "]")


    // Calculate total sum of each numbers factors
    xSum = arraySum(xFactors);
    ySum = arraySum(yFactors);

    // Check and display if sums of arrays are equal
    if ((x == ySum) && (y == xSum)) {
        $('#result').html("The numbers: " + x + " and " + y + " are amicable")
    } else {
        $('#result').html("The numbers: " + x + " and " + y + " are not amicable")
    }
}

// Returns the sum of all elements of an array containing numbers
function arraySum (array) {
    sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Returns an array of all the factors of a number x (excluding x)
function findFactors (x) {
    factors = [];
    for (i = 1; i <= (x / 2); i++) {
        if (isAFactor(i, x)) {
            factors.push(i);
        }
    }
    return factors;
}

// Returns true if x is a factor of y (x divides evenly into y) 
function isAFactor (x, y) {
    return ((y % x) == 0);
}
