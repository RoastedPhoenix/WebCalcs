/**
 * Created by josh on 3/16/15.
 */

function slopecalculate()
{
    var y = parseFloat($('#y1').val()) - parseFloat($('#y2').val());
    var x = parseFloat($('#x1').val()) - parseFloat($('#x2').val());
    var slope = parseFloat(y) / parseFloat(x);
    if(slope == Infinity){
        $('#slopecalc_output').html('Undefined');}
    else{
        $('#slopecalc_output').html(slope);}



}

$('#slopecalc').click(slopecalculate);

function pythagcalculateC() {
    var a = parseFloat($('#A').val());
    var b = parseFloat($('#B').val());
    var c = parseFloat($('#C').val());

    var asquared = parseFloat(a) * parseFloat(a);
    var bsquared = parseFloat(b) * parseFloat(b);
    var csquared = parseFloat(asquared) + parseFloat(bsquared);
    var pythagoutput = Math.sqrt(parseFloat(csquared));
    if (pythagoutput != parseInt(pythagoutput)){
        $('#pythagcalc_output').html('Side C is √' + csquared);
    }
    else {
        $('#pythagcalc_output').html('Side C is ' + pythagoutput);
    }}
function pythagcalculateA() {
    var a = parseFloat($('#A').val());
    var b = parseFloat($('#B').val());
    var c = parseFloat($('#C').val());

    var csquared = parseFloat(c) * parseFloat(c);
    var bsquared = parseFloat(b) * parseFloat(b);
    var asquared = parseFloat(csquared) - parseFloat(bsquared);
    var pythagoutput = Math.sqrt(parseFloat(asquared));
    if (pythagoutput != parseInt(pythagoutput)){
        $('#pythagcalc_output').html('Side A is √' + asquared);
    }
    else {
        $('#pythagcalc_output').html('Side A is ' + pythagoutput);
    }
}
function pythagcalculateB() {
    var a = parseFloat($('#A').val());
    var b = parseFloat($('#B').val());
    var c = parseFloat($('#C').val());
    var csquared = parseFloat(c) * parseFloat(c);
    var asquared = parseFloat(a) * parseFloat(a);
    var bsquared = parseFloat(csquared) - parseFloat(asquared);
    var pythagoutput = Math.sqrt(parseFloat(bsquared));
    if (pythagoutput != parseInt(pythagoutput)){
        $('#pythagcalc_output').html('Side B is √' + bsquared);
    }
    else {
        $('#pythagcalc_output').html('Side B is ' + pythagoutput);
    }
}



$('#pythagcalcC').click(pythagcalculateC);
$('#pythagcalcA').click(pythagcalculateA);
$('#pythagcalcB').click(pythagcalculateB);

function factorialcalculate()
{

    var numbers = [];
    var original_number = parseFloat($('#factorialcalc_input').val());
    var a = original_number;
    var factorial = original_number;

    while(a > 1)
    {
        a = a-1 ;
        factorial = factorial * a;
    }

    $('#factorialcalc_output').html(factorial);


}






$('#Factorialbutton').click(factorialcalculate);
