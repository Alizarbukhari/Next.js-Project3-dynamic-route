import Link from "next/link"
import Image from "next/image";
const banksData = [{
    id: 1,
    slug:"commercial-banks",
     discription: 
      <nav>
<h1><strong><a href="https://en.wikipedia.org/wiki/Commercial_bank">Commercial Banks</a> </strong></h1>
     <h2><a href="https://www.hbl.com/">HBL</a> </h2> <br/>
     <h2><a href="https://www.ubldigital.com/">UBL</a></h2> <br />
     <h2><a href="https://www.mcb.com.pk/">MCB</a></h2> <br/>
     <h2><a href="https://askaribank.a/">AKBL</a></h2>
     </nav>
         
  
        
},
{
    id: 2,
    slug: "islamic-banks",
    discription: <>
    <h1><strong><a href="https://cometinsure.com/blog/list-of-islamic-banks-in-pakistan/">Islamic Banks</a></strong></h1>
    <h2><a href="https://www.meezanbank.com/">Meezan Bank Limited:</a></h2> <br />
    <h2><a href="https://www.dibpak.com/">Dubai Islamic Bank</a> <br /></h2> <br />
    <h2><a href="https://bankislami.com.pk/">Bank Islamic Limited:</a></h2> <br />
    <h2><a href="https://www.faysalbank.com/en/islamic/">Faisal Bank</a></h2>
    </>
    
},{
    id:3,
    slug: "state-bodies",
    discription:
    <>
<h1><strong><p>State Own Banks</p></strong></h1><br />
<p>
National Bank of Pakistan <br />
The Bank of Punjab <br />
Sindh Bank <br />
Bank of Khyber <br />
First Women Bank <br />
</p>
    </>
},
{
id:4,
slug:"Overseas-Bank",
discription:
<>
<h1><strong><p>Foreign Banks</p></strong></h1><br />
<div>Citi Bank N.A <br />
Deutsche Bank AG <br /> 
Industrial and Commercial Bank of China Limited <br />
Standard Chartered Pakistan <br />
Bank of china</div> 
</>
}]
export default function Blogs({params}:{params: {slug:string};}){
   const selectBlog = banksData.filter((item)=>item.slug==params.slug)
    return(
        <div>{selectBlog[0]?.discription}</div>
    )
}   
