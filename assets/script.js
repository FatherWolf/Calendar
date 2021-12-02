var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


// set item method 
// give it a name and item 

// localStorage.setItem("name", "austin engle"); 

// localStorage.getItem("name ")

// .val is pulling value of what user input
// function getLocalStorage(){
//     var v = localStorage.getItem(entryTime)
//     console.log(v)
// }




    function save() {
    $("#btn1").on("click", function (){
        var entry = $("#time9").val();
        
        localStorage.setItem("9oclock", JSON.stringify(entry))

    })}

    function getLocalStorage(){
        var v = JSON.parse(localStorage.getItem("9oclock"))
        console.log(v)
        if (v !== null) {
            $("#time9").html(v);
            } 
    }
    save()
    getLocalStorage()


    function save1() {
        $("#btn2").on("click", function (){
            var entry = $("#time10").val();
            
            localStorage.setItem("10oclock", JSON.stringify(entry))
    
        })}
    
        function getLocalStorage1(){
            var v = JSON.parse(localStorage.getItem("10oclock"))
            console.log(v)
            if (v !== null) {
                $("#time10").html(v);
                } 
        }
        save1()
        getLocalStorage1()

    


    // $("#btn2").on("click", function (){
    //     var entry = $("#time10").val();
    //     var entryTime = JSON.stringify(10)
    //     localStorage.setItem(entryTime, entry)
        
    // })
    

    // $("#btn3").on("click", function (){
    //     var entry = $("#time11").val();
    //     var entryTime = JSON.stringify(11)
    //     localStorage.setItem(entryTime, entry)
    // })


    // $("#btn4").on("click", function (){
    //     var entry = $("#time12").val();
    //     var entryTime = JSON.stringify(12)
    //     localStorage.setItem(entryTime, entry)
    // })


    // $("#btn5").on("click", function (){
    //     var entry = $("#time13").val();
    //     var entryTime = JSON.stringify(1)
    //     localStorage.setItem(entryTime, entry)
    // })


    // $("#btn6").on("click", function (){
    //     var entry = $("#time14").val();
    //     var entryTime = JSON.stringify(2)
    //     localStorage.setItem(entryTime, entry)
    // })


    // $("#btn7").on("click", function (){
    //     var entry = $("#time15").val();
    //     var entryTime = JSON.stringify(3)
    //     localStorage.setItem(entryTime, entry)
    // })


    // $("#btn8").on("click", function (){
    //     var entry = $("#time16").val();
    //     var entryTime = JSON.stringify(4)
    //     localStorage.setItem(entryTime, entry)
    // })


    // $("#btn9").on("click", function (){
    //     var entry = $("#time17").val();
    //     var entryTime = JSON.stringify(5)
    //     localStorage.setItem(entryTime, entry)
    // })

