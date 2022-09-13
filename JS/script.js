document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


  console.log('salut les good guys !');

// Get Menu Button
const button = document.getElementById('menu-burger');

// Get Nav
const nav = document.getElementById('nav');


// Listen to click event
button.addEventListener('click', () => {

	// If nav Closed
	if(nav.classList.contains('nav-open'))
	{
		nav.classList.toggle('nav-closed');
		nav.classList.remove('nav-open');
		
	}
	// If Nav opend
	else
	{
		nav.classList.toggle('nav-open');
		nav.classList.remove('nav-closed');
	
	}
});