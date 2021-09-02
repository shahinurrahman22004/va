const searchBook =  () => {
    const searchField = document.getElementById('search-area');
    const searchText = searchField.value;

    // clear data 
    searchField.value = '';

    // if(searchText === ''){
    //     const error = document.getElementById('error');
    //     error.innerText = 'please write something';
    // }
    // else{
       
    // }
     // load data 
     const url = `https://openlibrary.org/search.json?q=${searchText}`;
     // console.log(url);
     fetch(url)
     .then(res => res.json())
     .then(data => displaySearchResult(data));
}
const displaySearchResult =  books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // console.log(books);

    for(const book in books){
        console.log(book);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadBookDetail(${book.docs})" class="card h-100">
                <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6>${book.docs.text}</h6>
                <p>${book.numFound} ${book.numFound}</p>
                <p>publisher: ${book.numFound}</p>
                <p class="card-text">${book.numFound}</p>
            </div>
    </div>
        `;
        searchResult.appendChild(div);
    }
}

/* 
<div onclick="loadBookDetail(${book.docs})" class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h5>${book.author_name}</h5>
                <p>${book.publish_date} ${book.publish_year}</p>
                <p>publisher: ${book.publisher}</p>
                <p class="card-text">${book.text}</p>
            </div>
        </div>
     */
    // books.forEach(book => {
    //     console.log(book);
    //     const div = document.createElement('div');
    //     div.classList.add('col');
    //     div.innerHTML = `
    //     <div onclick="loadBookDetail(${book.numFound})" class="card h-100">

    //         <div class="card-body">
    //             <h5 class="card-title">${book.title}</h5>
    //             <h5>${book.author_name}</h5>
    //             <p>${book.publish_date} ${book.publish_year}</p>
    //             <p>publisher: ${book.publisher}</p>
    //             <p class="card-text">${book.text}</p>
    //         </div>
    //     </div>
    //     `;
    //     searchResult.appendChild(div);
    // });

