function renderTemplate1() {
  var source = document.getElementById('template1').innerHTML;
  var template = Handlebars.compile(source);
  var html = template({
    heading: '3. Now, Your Turn',
    paragraph1: 'When you clicked the button in step 2, it called a function \
                in your JS file called "renderTemplate1". That function used \
                a library called Handlebars to create some HTML and insert it \
                right here...',
    paragraph2: 'Your job: create a template with the id "template2" which \
                 creates a new entry like this one. The heading  should be \
                 "4. My Favorite GIF" and there should be a paragraph with an \
                 animated GIF of your choosing inside it. The heading and the \
                 URL for the GIF should both be template variables, NOT part \
                 of the template itself. Insert this entry below this one.',
    buttonText: 'Click me!',
  });

  document.querySelector('section').insertAdjacentHTML('beforeend', html);
  document.getElementById('button1').setAttribute('disabled', true);
}

document.getElementById('button1').addEventListener('click', renderTemplate1);
