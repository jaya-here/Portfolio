import { faTree } from "@fortawesome/free-solid-svg-icons"
import { faCookie } from "@fortawesome/free-solid-svg-icons"
import { faGift } from "@fortawesome/free-solid-svg-icons"
import { faSnowflake } from "@fortawesome/free-solid-svg-icons"

export const Products = [{
    newItem: true,
    image:faTree,
    name:'Christmas Tree Decoration',
    price:19.99,
    discount:false,
    discountPercent:0,
    id:0
},
{
    newItem: false,
    image:faGift,
    name:"Gift Box",
    price:9.99,
    discount:true,
    discountPercent:23,
    id:1
},
{
    newItem: false,
    image:faCookie,
    name:"Gingerbread Man Cookie",
    price:12.99,
    discount:false,
    discountPercent:0,
    id:2
},
{
    newItem: false,
    image:faSnowflake,
    name:"Snowflake Decoration",
    price:4.99,
    discount:false,
    discountPercent:0 
}]