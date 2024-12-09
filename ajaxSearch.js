const context = window.location.origin;

document.querySelector("#search-input").addEventListener("keyup", function () {
    let textValue = document.querySelector("#search-input").value;
    if (textValue.length > 2)
        search(textValue);
})

function search(value) {
    let url = context + "/item/search?q=" + value;
    let options = {method: "GET"};

    fetch(url, options).then(function (response) {
        return response.json();
    }).then(function (items) {
        let container = document.querySelector("#mainContainerID");

        let articles = '';

        /*for (let i = 0; i < items.length; i++) {
            let date = new Date(items[i].date);
            let dateFormatted = date.getDate() + '.' + (date.getMonth() + 1) + "." + date.getFullYear();
            let type = items[i].type === "Domanda" ? "Compra" : "Vendo";

            articles += '<article class="col-md-3 col-lg-2">\n' +
                '                <div class="card mb-2 shadow-sm">\n' +
                '                    <a href="' + context + 'item/' + items[i].id + '"><img class="bd-placeholder-img card-img-top" src="' + context + '/item/' + items[i].id + '/image" class="img-fluid""/></a>\n' +
                '                    <div class="card-body">\n' +
                '                        <p style="color:grey"><span style="color:#600">' + type + '</span> | <span class="category">' + items[i].category + '</span> | <span>' + dateFormatted + '</span> by <a href="#">' + items[i].author + '</a></p>\n' +
                '                        <p><span>' + items[i].title + '</span></p>\n' +
                '                        <div class="d-flex justify-content-between align-items-center">\n' +
                '                            <div class="btn-group">\n' +
                '                                <a class="btn btn-sm btn-outline-secondary" href="' + context + '/item/' + items[i].id + '">View</a>\n' +
                '                                \n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '            </article>\n';
        }*/
        /*for (let i = 0; i < items.length; i++) {

            articles += '<article class="col-md-3 col-lg-2">\n' +
                '                <div class="card mb-2 shadow-sm">\n' +
                '                    <a href="' + context + 'item/' + items[i].id + '"><img class="bd-placeholder-img card-img-top" src="' + context + '/item/' + items[i].id + '/image" class="img-fluid""/></a>\n' +
                '                    <div class="card-body">\n' +
                '                        <p style="color:grey"><span style="color:#600"></span> <span class="category">' + items[i].category + '</span>' +
                '                        <span>|' + items[i].title + '</span></p>\n' +
                '                        <div class="d-flex justify-content-between align-items-center">\n' +
                '                            <div class="btn-group">\n' +
                '                                <a class="btn btn-sm btn-outline-secondary" href="' + context + '/item/' + items[i].id + '"><i class="fas fa-eye fa-2x" style="color: #20B2AA;"></i></a>\n' +
                '                                \n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '            </article>\n';
        }*/

        for (let i = 0; i < items.length; i++) {
            /*console.log(items[i].imageAjaxLink);
            let imageUrl = 'https://' + items[i].imageAjaxLink;
            console.log(imageUrl);*/
            articles += '<article class="col-6 col-md-3 col-lg-2">\n' +
                '                <div class="card mb-2 shadow-sm">\n' +
                '                    <a href="' + context + '/item/' + items[i].id + '">\n' +
                '                        <img class="bd-placeholder-img card-img-top" src="https://' + items[i].imageAjaxLink + '" class="img-fluid" />\n' +
                '                    </a>\n' +
                '                    <div class="card-body">\n' +
                '                        <p style="color:grey"><span style="color:#600"></span> <span class="category">' + items[i].category + '|</span>' +
                '                        <span>' + items[i].title + '</span></p>\n' +
                '                        <div class="d-flex justify-content-between align-items-center">\n' +
                '                            <div class="btn-group">\n' +
                '                                <a class="btn btn-sm btn-outline-secondary" href="' + context + '/item/' + items[i].id + '">\n' +
                '                                    <i class="fas fa-eye fa-2x" style="color: #20B2AA;"></i>\n' +
                '                                </a>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </article>\n';
        }






        /*if (items.length === 0) {
            articles = '<article class="col-md-4"><p>Nessun annuncio <tror></tror>to</p></article>';
        }*/
        if (items.length === 0) {
            articles = '<article class="col-md-4"><p><i class="fas fa-eye-slash fa-2x" style="color: #20B2AA;"></i> <span style="color: #20B2AA; font-size: 1.2em;"></span></p></article>';
        }



        /*container.innerHTML = '<h2>Risultati ricerca: ' + value + ' <a class="btn btn-sm btn-danger" href="' + window.location.href + '">chiudi</a></h2>' +
            '<section class="row">\n' +
            '        \n' +
            articles +
            '            \n' +
            '        \n' +
            '    </section>';*/
        container.innerHTML = '<h2><i class="fas fa-crown" style="color: #20B2AA;"></i> ' + value +
            ' <a class="btn btn-sm btn-danger" href="' + window.location.href + '" style="width: 50px; display: inline-block; text-align: center;">' +
            '<i class="fas fa-times"></i></a></h2>' +
            '<section class="row">\n' +
            articles +
            '</section>';



    });
}
