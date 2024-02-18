let sp;
let dp;
let pulse;

btnCalculate.addEventListener('click', calculatePressure);

function readValues(){
    sp = parseInt(inputSP.value);
    dp = parseInt(inputDP.value);
    pulse = parseInt(inputPulse.value);
}

function checkSPValue(){
    if (sp >= 90 && sp <= 120)
        console.log("SP: Normalan");
    else
        console.log("SP: Nije normalan");
}

function checkDPValue(){
    if (dp >= 60 && dp <= 80)
        console.log("DP: Normalan");
    else
        console.log("DP: Nije normalan");
}

function checkPulseValue(){
    if (pulse >= 55 && pulse <= 100)
        console.log("Puls: Normalan");
    else
        console.log("Puls: Nije normalan");
}

function calculatePressure()
{
    readValues();
    checkDPValue();
    checkSPValue();
    checkPulseValue();
}