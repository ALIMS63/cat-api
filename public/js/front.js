document.addEventListener('click', async e => {
  e.preventDefault();

  if (e.target.className === 'btn btn-info btn-block') {
    console.log('Yeah');
    // https://api.thecatapi.com/v1/images/search
    const template = await fetch('https://api.thecatapi.com/v1/images/search');


    const fromAPI = await template.json();
    console.log(fromAPI[0].url);

    const toHbs = await fetch('/hbs/forPhoto.hbs');
    const fromHbs = await toHbs.text();

    console.log(fromHbs);
    const func = Handlebars.compile(fromHbs)
    const html = func(fromAPI[0]);
    console.log(html);

    let div = document.getElementById('forImg');
    div.innerHTML = html;
    // let inputValue = document.getElementById('myInput').value;
    // document.getElementById('myInput').value = ''

    // const template = await fetch('/posts', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ content: inputValue })
    // });
    // const fromBack = await template.json();


    // const toHbs = await fetch('/hbs/li.hbs');
    // const fromHbs = await toHbs.text();

    // const func = Handlebars.compile(fromHbs)
    // const html = func(fromBack);

    // let UL = document.getElementById('myUL');
    // UL.innerHTML += html;

  };
})
