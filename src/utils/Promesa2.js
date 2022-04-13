import Product from "../components/Product";

export default function Promesa2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Product);
        }, 2000)
    })
}