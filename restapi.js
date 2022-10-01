const getData = (data) => {
    for (i=0; i < data.length; i++) {
        if (data[i].content.rendered) {
            const header = document.createElement('h1');
            header.innerHTML = data[i].title.rendered;
            document.body.appendChild(header)

            const content = document.createElement('p');
            content.innerHTML = data[i].content.rendered;
            document.body.appendChild(content)
        }
    }

}

fetch('https://www.skolasiljegovac.org.rs/wp-json/wp/v2/pages')
    .then(res => res.json())
    .then(data => getData(data))