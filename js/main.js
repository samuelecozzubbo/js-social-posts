const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
// Milestone 1 - Leggiamo per bene il nostro array di oggetti che rappresentano ciascun post, così da capire bene i dati come sono strutturati;
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

//Richiamo il container
const postContainer = document.getElementById("container");
posts.forEach(createPost);

// Array per tracciare gli ID dei post con like
let likedPostId = []



//FUNZIONI*****************

function createPost(post){
    postContainer.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${post.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
    // Milestone 3 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
    //GESTIONE CLICK SUI MI PIACE
    //RIchiamo il pulsante "Mi Piace"
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            console.log(`Hai cliccato sul pulsante Mi Piace del post ${index + 1}`);
            //gestisco la classe liked
            button.classList.toggle("like-button--liked");
            // Incremento o decremento il contatore dei likes
            if (button.classList.contains('like-button--liked')) {
                posts[index].likes++;
                likedPostId.push(index + 1);
            } else {
                posts[index].likes--;
            }
            //Aggiorno il valore
            const likeCounter = document.querySelectorAll(".js-likes-counter");
            likeCounter.forEach((counter,index) => {
                counter.innerHTML = posts[index].likes;
            })
            console.log(likedPostId);
        });
    });

};



// **BONUS
// Formattare le date in formato italiano (gg/mm/aaaa)
// Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
// Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone
