const bookDetails = (book) => { //använder titlerna som finns inom API:et samt fixar utssende för pop up rutan med hjälp av Tailwind 
    let html = `
    <div id="bookDetail" class="book__details absolute inset-y right-12 rounded-lg bg-purple-100 p-4 w-1/5 top-20 ml-5 mx-auto 
    flex flex-row text-center text-purple-400 font-semibold">
        <img src="${book.coverImage}" alt="bild saknas för denna bok"width="100" height="60" >
        
        <div class="border"></div>  
        <div class="detail__list">
            <ul class="list">
                <li>Title: ${book.title}</li>
                <li>Author: ${book.author}</li>
                <li>Pages: ${book.pages}</li>
                <li>Release date: ${book.releaseDate}</li>
            </ul>
        </div> 
    </div>
    `;

    return html;
};