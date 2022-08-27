function explores(){
    let inputx=document.getElementById("text").style.width='500px'
}
function explore(){
    let x=document.getElementsByClassName("exploreitems")
    let button=document.getElementById("style")
    let one=document.getElementById("one")
    let two=document.getElementById("two")
    let three=document.getElementById("three")
    let four=document.getElementById("four")
    let five=document.getElementById("five")
    let six=document.getElementById("six")
    let seven=document.getElementById("seven")
    let eight=document.getElementById("eight")
    let text=document.getElementById("text").value
    let texts=document.getElementById("text")
    let ones=document.querySelector(".one")
    let twos=document.querySelector(".two")
    let threes=document.querySelector(".three")
    let fours=document.querySelector(".four")
    let fives=document.querySelector(".five")
    let sixs=document.querySelector(".six")
    let sevens=document.querySelector(".seven")
    let eights=document.querySelector(".eight")
    texts.style.width="200px"
    if(text==="123EXP")
    {
        button.style.backgroundColor='green'
        function executeOutter(callback){
            setTimeout(function (){
                ones.style.opacity='1'
                one.style.backgroundColor='yellow'
                setTimeout(function(){
                    twos.style.opacity='1'
                    two.style.backgroundColor='yellow'
                    setTimeout(function(){
                        threes.style.opacity='1'
                        three.style.backgroundColor='yellow'
                        setTimeout(function(){
                            fours.style.opacity='1'
                            four.style.backgroundColor='yellow'
                            setTimeout(function(){
                                fives.style.opacity='1'
                                five.style.backgroundColor='yellow'
                                setTimeout(function(){
                                    sixs.style.opacity='1'
                                    six.style.backgroundColor='yellow'
                                    setTimeout(function(){
                                        sevens.style.opacity='1'
                                       seven.style.backgroundColor='yellow'
                                       setTimeout(function(){
                                        eights.style.opacity='1'
                                        eight.style.backgroundColor='yellow'
                                        callback()
                                       },1000)
                                    },3000)
                                },5000)
                            },5000)
                        },5000)
                    },8000)
                },2000)
            },3000)
        }
        executeOutter()

    }
    else{
        alert("Please Enter The Valid Order Id")
    }
    
}