const scrollLinks = document.querySelectorAll(
    'a[href^="#"]:not(a[href="#"])');
    
    for(let mark of scrollLinks) {
        mark.addEventListener('click', (e) =>{
            e.preventDefault(); //отмена стандартной реакции
            // извлекаем из закладки id элемента, к которому нужно прокрутить страницу
            let id = mark.getAttribute('href'); 
            id = id.substring(1);
            // получаем доступ к элементу, к которому нужно прокрутить страницу
            let scrollBlock = document.getElementById(id)
            // вызываем метод плавной прокрутки
            scrollBlock.scrollIntoView({
                behavior: 'smooth'
            })
            
            console.log(scrollBlock);
        })
    }