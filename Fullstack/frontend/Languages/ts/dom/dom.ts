async function myfun() {
    var apiData=fetch('https://fakestoreapi.com/products')
    apiData= await(await apiData).json()
    console.log(apiData)
    // ecommerce(apiData[0].title, apiData[0].image,apiData[0].description)
    apiData.map((a)=>{
       ecommerce( a.title,a.image,a.description)
    })
    }
    myfun()
    
    function ecommerce(heading:string,imageAddress:string,Description:string){
        var h1=document.createElement('h1')
        h1.innerHTML=heading
        var image=document.createElement('img')
        image.width=200
        image.height=200
        image.src=imageAddress
        var p=document.createElement('p')
        p.innerHTML=Description
        var div=document.getElementById('root') as HTMLDivElement
        div.appendChild(image)
        div.appendChild(h1)
        div.appendChild(p)

    }
   