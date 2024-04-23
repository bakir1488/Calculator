let mycal=(n1:number,n2:number,s:string)=>{ //parameter
    if(s=="+"){
        console.log(n1+n2)
    }else if(s=="-"){
        console.log(n1-n2)
    }else if(s=="*"){
        console.log(n1*n2)
    }else if(s=="/"){
        console.log(n1/n2)
    }else{
        console.log("invalid sign")
    }

}
mycal(4345,554,"/") //argument