$(document).ready(()=>{

    var total = "0.00"
    var people = 1
    var tipPerc = 0.00

    $("#tip-display").html(total)
    $("#total-display").html(total)

    function resetActive() {
        $(".reset-btn").prop("disabled",false)
    }

    function calculation(){

        $(".invalid").hide()
        $(".people-input").removeClass("invalid-people")

        var totalAmount = parseFloat((total/people).toFixed(2))
        var tipTot = parseFloat((total*tipPerc).toFixed(2))
        var tipPerPerson = parseFloat((tipTot/people).toFixed(2))
        totalAmount = (totalAmount+tipPerPerson).toFixed(2)

        $("#tip-display").html(tipPerPerson)
        $("#total-display").html(totalAmount)
    }


    $(".bill-input").on('propertychange input',function(){
        total = parseFloat($(".bill-input").val())
        calculation();
        resetActive();
    })

    $(".people-input").on('propertychange input',function(){
        people = parseFloat($(".people-input").val())
        total = parseFloat($(".bill-input").val()).toFixed(2)
        if(people==0){
            $(".invalid").show()
            $(".people-input").addClass("invalid-people")
            resetActive();
        }else{
            resetActive();
            calculation();
        }
    })



    $(".result-btn-div").click(()=>{
        $(".people-input").val('')
        $(".bill-input").val('')
        $("#tip-display").html('0.00')
        $("#total-display").html('0.00')
        $(".tip-selected").removeClass("tip-selected")
        $(".shareinput").val('')
        $(".reset-btn").prop("disabled",true)
    })


    $(".share").click(function(){
        $(this).addClass("tip-selected").siblings().removeClass("tip-selected")
        tipPerc = parseFloat(($(".tip-selected").val()/100).toFixed(2))
        calculation();
        resetActive();
    })

    $(".shareinput").change(function(){
        $(this).addClass("tip-selected").siblings().removeClass("tip-selected")
    })

})