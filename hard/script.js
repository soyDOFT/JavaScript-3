function outer() {
    const PII = {
        name: "Dante",
        SSN: 1234567890
    }

    PII.getName = function() { 
        return "Dante"
    }

    function inner() {

    }

    inner();
}