import { useEffect, useState } from "react";
import Card from "./Card";
import ItemCard from "../ItemCard/ItemCard";



const ProductsCards = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://e-commerce-server-shanto001971.vercel.app/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    // console.log(product)

    const oil = product.filter(item=>item.category==="Oil")
    const meat = product.filter(item=>item.category==="meat")

    return (
        <div className="lg:mt-5 lg:mb-10">
            <h1 className="text-2xl font-bold ml-5 uppercase">Trending Now</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-5">
            {
                oil.map(soyabinOil=><Card key={soyabinOil._id} soyabinOil={soyabinOil}/>)
            }
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-10">
            {
                meat.map(beef=><ItemCard key={beef._id} beef={beef}/>)
            }
            </div>
        </div>
    );
};

export default ProductsCards;