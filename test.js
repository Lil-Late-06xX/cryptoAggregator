
const ul = document.querySelector('.data')
const day = document.querySelector('.d')
const svday = document.querySelector('.sd')

const btn = document.querySelector('#btc')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')
let btn6 = document.querySelector('.btn6')
let btn7 = document.querySelector('.btn7')
let btn8 = document.querySelector('.btn8')
let btnsrc = document.querySelector('.contract')
let dltBtn = document.querySelector('.dellet')

let contenteOne = document.querySelector('.sectionOne')
let sec = document.querySelector('.secOne')

let contenteTwo = document.querySelector('.sectionTwo')
let sec2 = document.querySelector('.secTwo')

let contenteTree = document.querySelector('.sectionTree')
let sec3 = document.querySelector('.secTree')

let contenteFor = document.querySelector('.sectionFor')
let sec4 = document.querySelector('.secFor')


let contenteFive = document.querySelector('.sectionFive')
let sec5 = document.querySelector('.secFive')

let contenteSix = document.querySelector('.sectionSix')
let sec6 = document.querySelector('.secSix')

let contenteSev = document.querySelector('.sectionSev')
let sec7 = document.querySelector('.secSev')

let contenteEyt = document.querySelector('.sectionEyt')
let sec8 = document.querySelector('.secEyt')




let eventInput = document.querySelector('.AddInput')
let cInput = document.querySelector('.contractInput')
let Creator = document.querySelector('.contractMaker')
let walletadd = document.querySelector('.wallet')
let sCode = document.querySelector('.srcCode')

let divSrc = document.querySelector('.code')




let EthScanKei = 'DITRE32XMPXSYJQKIHT6PAYSNF1HTVNK6X'

let EthPlorerKei = 'EK-dMDZV-cJz55yh-ujQhq'



const newT = async () =>{
   


   const res = await fetch(`https://api.ethplorer.io/getTokensNew?apiKey=${EthPlorerKei}`)

   const data = await res.json()


   
     
   
       data.forEach(function(token){
   
   
         let names = token.name
   
         let TokenMintCount = token.issuancesCount
   
         let twitterAcc = token.twitter
   
         let website = token.website
   
         let symbol1 = token.symbol
   
         let dateMinted = token.added
   
         let address = token.address
   
         let holders = token .holdersCount
   
         let supply = token.totalSupply
   
         let price = token.price
   
         let TDrate = price.rate
   
         let dayDiff = price.diff
   
         let sevenDayDiff = price.diff7d
   
         let marketCap = price.marketCapUsd
   
         let volumeDay = price.volume24h
   
         let priceLastUpdate = price.ts
   
   
         const isssueDateUNIX = dateMinted*1000
         const lastPriceUpdateUNIX = priceLastUpdate*1000
   
         const issuedataObject = new Date(isssueDateUNIX)
         const lastUpdateObject = new Date(lastPriceUpdateUNIX)
   
   
         const ReadIssueDate = issuedataObject.toLocaleString()
         const ReadLastUpdate = lastUpdateObject.toLocaleString()
   
   
   
         
   
   
         let list = `
         
         
         <div class="list"  >
         
         <li style="font-size:4rem;color:#adb5bd;" >${names} </li>
   
         <li  style="background-color:#24252a;color:#caf0f8;">Date Launched: ${ReadIssueDate} </li>
   
         <li style="font-size:2rem" >$${symbol1} </li>
   
         <li class="addr" >${address} </li>
   
         <li>Holders: ${holders} </li>
   
         <li>Market Cap: ${marketCap} </li>
   
         <li class="price" >Price: ${TDrate} &nbsp$ </li>
   
         <li>Lat time Price Update: ${ReadLastUpdate} </li>
   
         <li>Times Token Minted: ${TokenMintCount} </li>
   
   
         <li>Tottal Supply: ${supply} </li>
   
   
         <li class="d" > 1Day %: 	&#11021; ${dayDiff}  </li>
         <li class="sd" >  7Day %: 	&#11021; ${sevenDayDiff}  </li>
       
   
         <li>Volume Today: ${volumeDay} </li>
   
         <li>Twitter Account: ${twitterAcc} &#10146; Link: <a href="https://twitter.com/${twitterAcc}" > Click </a> </li>
   
         <li>Website: ${website} &#10146; Link:  <a href="${website}" >  Website Link </a> </li>
   
   
   
         </div>
   
   
   
         <hr>
         
   `
         ul.innerHTML += list 

         return list
   
   
       })
   
      }
   
   



  const init = async ()=>{

  
  newT()
 
  
  
  }




  init()












btn1.addEventListener('click', ()=>{

   let input1 = eventInput.value

   
   fetch(`https://api.etherscan.io/api?module=account&action=tokentx&address=${input1}&page=1&offset=100&startblock=0&endblock=27025780&sort=desc&apikey=${EthScanKei}`).then(res => {return res.json()}).then((data)=>{




      console.log(data);

      let dataArray1 = data.result


      
      dataArray1.forEach(function(y){


         let sender = y.from
         let contractAdd = y.contractAddress
         let reciever = y.to
         let token = y.tokenName
         let symbol= y.tokenSymbol
         let value = y.value







   let laiha = `
   
<ul>


         <h2> History Log==> </h2>

   <li>Sender : ${sender} </li>
   <li> Contract : ${contractAdd}  </li>
   <li> Receiver : ${reciever} </li>
   <li> Token : ${token} </li>
   <li> Symbol : ${symbol}  </li>
   <li> Amount : ${value}  </li>




</ul>    
<div>
<hr><hr>
</div>
   
   `
contenteOne.style.visibility="hidden"
contenteOne.style.height='0px'
sec.style.height= "500px"
sec.innerHTML+=laiha



        



      })


   









   })




})








btn2.addEventListener('click', ()=>{
  

   let contractInput = cInput.value

   fetch(`https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${contractInput}&page=1&offset=100&startblock=0&endblock=27025780&sort=desc&apikey=${EthScanKei}`).then(res => {return res.json()}).then(data=>{

   console.log(data);  
   
   let dataArray2 = data.result

      dataArray2.forEach(function(y){


         let sender = y.from
         let contractAdd = y.contractAddress
         let reciever = y.to
         let token = y.tokenName
         let symbol= y.tokenSymbol
         let value = y.value







   let laiha2 = `

   
<ul>


        

   <li>Sender : ${sender} </li>
   <li> Contract : ${contractAdd}  </li>
   <li> Receiver : ${reciever} </li>
   <li> Token : ${token} </li>
   <li> Symbol : ${symbol}  </li>
   <li> Amount : ${value}  </li>




</ul>    
<div>
<hr><hr>
</div>
   
   `
contenteTwo.style.visibility="hidden"
contenteTwo.style.height='0px'
sec2.style.height= "500px"
sec2.innerHTML+=laiha2



        



      })
      










   })



   
})








btn3.addEventListener('click', ()=>{

   let maker = Creator.value
  

   fetch(`https://api.etherscan.io/api?module=contract&action=getcontractcreation&contractaddresses=${maker}&apikey=${EthScanKei}`).then(res => {return res.json()}).then(data=>{

   console.log(data);

   let dataArray3 = data.result


      dataArray3.forEach(function(y){


        
         let molchi = y.contractCreator
         let reci = y.txHash
       






   let laiha3 = `

   
<ul>


        

   <li>Creator : ${molchi} </li>
   <li  >TxHash : ${reci}  </li>

 



</ul>    
<div>
<hr><hr>
</div>
   
   `
   contenteTree.style.visibility="hidden"
   contenteTree.style.height='0px'

sec3.innerHTML+=laiha3

     

    })

   











   })


})
   









btn4.addEventListener('click', ()=>{
  

   fetch(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${EthScanKei}`).then(res => {return res.json()}).then(data=>{


   console.log(data);

      let dataArray4 = data.result


    

      let fastGas = dataArray4.FastGasPrice
      let Gas = dataArray4.ProposeGasPrice
      let minGas = dataArray4.SafeGasPrice
      let block = dataArray4.LastBlock

      fetch(`https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=${Gas}&apikey=${EthScanKei}`).then(res=>{return res.json()}).then(data=>{

         console.log(data);

      let confirmation = data.result










      let laiha4 = `

   
      <ul>
      
      
      <li>Last Block Mined <br><hr> ${block} </li>
      
         <li>Fast<br><hr> ${fastGas} </li>
      
         <li>Average<br><hr> ${Gas}  </li>
      
         <li>Slow<br><hr> ${minGas}  </li>

         <li> Estimation of Confirmation Time <br><hr> ${confirmation} seconds </li>
      
       
      
      
      
      </ul>    
      <div>
      <hr><hr>
      </div>
         
         `
         contenteFor.style.visibility="hidden"
         contenteFor.style.height='0px'
      
      sec4.innerHTML+=laiha4


























      })






   })








   
})










btn5.addEventListener('click', ()=>{
  


   fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${EthScanKei}`).then(res => {return res.json()}).then(data=>{

   console.log(data);

      let array = data.result

      let ethPrice = array.ethusd

      let time = array.ethusd_timestamp


      const timeUnix = time*1000

      const update = new Date(timeUnix)
    


      const EthUpdate = update.toLocaleString()
    





      contenteFive.style.visibility="hidden"
         contenteFive.style.height='0px'
      
      sec5.innerHTML= `<h1>Eth Price: ${ethPrice} $ </h1>
      
                           <h2> Updated ${EthUpdate}</h2>
      
      `



      










   })


   
})








btn6.addEventListener('click', ()=>{
  

   let wallet = walletadd.value

   fetch(`https://api.ethplorer.io/getAddressInfo/${wallet}?apiKey=${EthPlorerKei}`).then(res => {return res.json()}).then(data=>{


   console.log(data);


         let eth = data.ETH

         let ethBalance = eth.balance

         let tokens = data.tokens

         
         contenteSix.style.visibility="hidden"
         contenteSix.style.height='0px'


         sec6.innerHTML+=`<h1 >${ethBalance.toFixed(3)} Eth </h1>`


         tokens.forEach(x=>{


            let y = x.tokenInfo

            let name= y.name
            let address = y.address
            let symbol = y.symbol
            let site = y.website
      


            


         
            let laiha6 = `



            
   
            <ul>
            
            
                    
            
               
              <div><br><hr><hr><br></div>
               <li > Token: ${name} </li>
               <li > Adress: ${address} </li>
               <li > Symbol: ${symbol} </li>
               <li >Click: &#8618; <a href="${site}"> ${site} </a>   </li>

            
             
            
            
            
            </ul>    
            <div>
            <hr><hr>
            </div>
               
               `
               
            sec6.style.height= "500px"
            sec6.innerHTML+=laiha6 














           

         })


      










   })


   
})







btn7.addEventListener('click', ()=>{
  
         contenteSev.style.visibility="hidden"
         contenteSev.style.height='0px'


         sec7.innerHTML+=`<h1> Dextools Charts <a href=""> click </a> </h1>`




   
})






btn8.addEventListener('click', ()=>{
  

   let sourceCode = sCode.value


            fetch(`https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${sourceCode}&apikey=${EthScanKei}`).then(res => {return res.json()}).then(data=>{

               console.log(data);

               let dataR = data.result[0].SourceCode



               let p = `<p>
               
               
               ${dataR}
               
               
               </p>`

               contenteEyt.style.visibility="hidden"
         contenteEyt.style.height='0px'
         sec8.style.height= "500px"
         sec8.style.width= "630px"
         sec8.innerHTML+=p



        


         





            })
 
          


         })









dltBtn.addEventListener('click',()=>{

   p=''

         
   
})

