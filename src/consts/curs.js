import  {sellPrice} from './sold.js';
import  {buyPrice} from './buy.js';

const curs ={
    ru:{
       today :"Курс на сегодня",
       egg: `Ико купить: ${buyPrice.egg} ед\\ продать: ${sellPrice.egg} ед`,
       milk:`Молоко купить: ${buyPrice.milk} ед\\ продать: ${sellPrice.milk} ед`,
       chicken : `Курочки купить: ${buyPrice.chicken} ед\\ продать: ${sellPrice.chicken} ед`,
       cow: `Коровка купить: ${buyPrice.cow} ед\\ продать: ${sellPrice.cow} ед`,
       land:`Земля купить: ${buyPrice.cell} ед\\ продать ${sellPrice.cell} ед`,
       rye:`Рош купить: ${buyPrice.rye} ед`
    }

}

export {curs}