document.addEventListener('DOMContentLoaded',function(){
    var checkboxThm = document.querySelector('.switch_2[type=checkbox]');

checkboxThm.addEventListener('change',SwitchTheme);

function SwitchTheme(){

        if(checkboxThm.checked){
            document.querySelector('.HomeDiv').style.backgroundColor='#f7cc00';
            document.querySelector('body').style.backgroundColor='#fff';
            document.querySelector('.SkillsDiv').style.color='#212121';
            document.querySelector('.ArticTitle').style.color='#212121';
            document.querySelector('.h1Gallery').style.color='#212121';
            document.querySelector('.ArcH1').style.color='#212121';
            document.querySelector('#contact').style.border='#f7cc00 solid 4em';

        console.log('thm checked');
        }else{
            document.querySelector('.HomeDiv').style.backgroundColor='#e68100';
            document.querySelector('body').style.backgroundColor='#0A0708';
            document.querySelector('.SkillsDiv').style.color='#fff';
            document.querySelector('.ArticTitle').style.color='#fff';
            document.querySelector('.h1Gallery').style.color='#fff';
            document.querySelector('.ArcH1').style.color='#fff';
            document.querySelector('#contact').style.border='#e68100 solid 4em';

        console.log('thm not checked');


        }
    };

});


document.addEventListener('DOMContentLoaded',function(){

var checkboxThmMobile = document.querySelector('.switch_1[type=checkbox]');

checkboxThmMobile.addEventListener('change',SwitchTheme);

function SwitchTheme(){

        if(checkboxThmMobile.checked){
            document.querySelector('.HomeDiv').style.backgroundColor='#f7cc00';
            document.querySelector('body').style.backgroundColor='#fff';
            document.querySelector('.SkillsDiv').style.color='#212121';
            document.querySelector('.ArticTitle').style.color='#212121';
            document.querySelector('.h1Gallery').style.color='#212121';
            document.querySelector('.ArcH1').style.color='#212121';
            document.querySelector('#contact').style.border='#f7cc00 solid 4em';

        console.log('thm checked');
        }else{
            document.querySelector('.HomeDiv').style.backgroundColor='#e68100';
            document.querySelector('body').style.backgroundColor='#0A0708';
            document.querySelector('.SkillsDiv').style.color='#fff';
            document.querySelector('.ArticTitle').style.color='#fff';
            document.querySelector('.h1Gallery').style.color='#fff';
            document.querySelector('.ArcH1').style.color='#fff';
            document.querySelector('#contact').style.border='#e68100 solid 4em';

        console.log('thm not checked');


        }
    };

});
