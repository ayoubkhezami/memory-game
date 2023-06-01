const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ] 

  cardArray.sort(()=> 0.5- Math.random())
  console.log(cardArray)
  const gridDisplay =document.querySelector('#grid') 
  let cardChosen = []
  let cardChosenIds =[] 
  const cardsWon =[]
  const resultDisplay=document.querySelector('#result')

  function createBoard (){
    for(let i=0; i<cardArray.length;i++){
        const card=document.createElement('img') 
        card.setAttribute('src' , 'images/blank.png') 
        card.setAttribute('data-id', i ) 
        card.addEventListener('click', turnImg)
        gridDisplay.appendChild(card)   
        

    }
  } 
  createBoard()  

  function check(){
    console.log('check for match')   
    
    const optionsIdOne=cardChosenIds[0]
    const optionsIdTwo=cardChosenIds[1]
    const cards= document.querySelectorAll('img')  
    if(optionsIdOne==optionsIdTwo) 
    {
        cards[optionsIdOne].setAttribute('src','images/blank.png')
        cards[optionsIdOne].setAttribute('src','images/blank.png') 
        alert('you clicked at the same images')
    }
    if(cardChosen[0]==cardChosen[1]){
        alert('you find a match') 
        cards[optionsIdOne].setAttribute('src','images/white.png')
        cards[optionsIdTwo].setAttribute('src','images/white.png') 
        cards[optionsIdOne].removeEventListener('click' , turnImg)
        cards[optionsIdTwo].removeEventListener('click' , turnImg) 
        cardsWon.push(cardChosen)
    }  
    else {
        cards[optionsIdOne].setAttribute('src', 'images/blank.png')
        cards[optionsIdTwo].setAttribute('src', 'images/blank.png') 
            alert('sorry try again <3 ')
    } 
    resultDisplay.textContent=cardsWon.length
    cardChosen =[] 
    cardChosenIds =[] 
    if(cardsWon.length== (cardArray.length/2))  {
    resultDisplay.textContent ='congratulation you found them  all' }
  }
  function turnImg(){ 
    const cardId=this.getAttribute('data-id')

    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    console.log(cardChosen)
    
     this.setAttribute('src', cardArray[cardId].img) 
     if (cardChosen.length===2) {
        setTimeout(check , 500)

        
     }
  }