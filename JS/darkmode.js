document.addEventListener('DOMContentLoaded',function(){
    var checkboxThm = document.querySelector('.switch_2[type=checkbox]');

checkboxThm.addEventListener('change',SwitchTheme);

function SwitchTheme(){

        if(checkboxThm.checked){
            document.querySelector('.HomeDiv').style.backgroundColor='#f7cc00';
            document.querySelector('body').style.backgroundColor='#fff';
            document.querySelector('.SkillsDiv').style.color='#212121';
            document.querySelector('.ArticTitle').style.color='#212121';
            document.querySelector('#contact').style.border='#f7cc00 solid 4em';

        console.log('thm checked');
        }else{
            document.querySelector('.HomeDiv').style.backgroundColor='#7A3803';
            document.querySelector('body').style.backgroundColor='#0A0708';
            document.querySelector('.SkillsDiv').style.color='#fff';
            document.querySelector('.ArticTitle').style.color='#fff';
            document.querySelector('#contact').style.border='#7A3803 solid 4em';

        console.log('thm not checked');


        }
    };

});