import React, { useEffect, useState } from "react";
import "../styles/listproduct.css";
import Header from "../../src/components/layout/header.jsx";
import Footer from "../../src/components/layout/footer.jsx";
import Product from "../components/product.jsx";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function Listproduct(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const[search,setSearch]=useState("");

  const [productlist, setProductlist] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  //  console.log(product)
  /////useEffect
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productlist));
  }, [productlist]);

  function addProduct() {
    let product = { name: name, email: email, tel: tel };
    setProductlist([...productlist, product]);
    setName('')
    setEmail('')
    setTel('')
    
  }
  console.log(productlist);
  return (
    


    <div className="productdiv">
      <Header />
        <div className="produit">
          <h2>Add Produit form :</h2>
          <Form className="formulaire">
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label>Votre nom</Form.Label>
              <Form.Control type="name" placeholder="Enter Votre nom" value={name}  onChange={(e) => {  setName(e.target.value);  }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Votre Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter votre phone" value={tel}
                  onChange={(e) => {
                    setTel(e.target.value);
                  }} />
            </Form.Group>
            <Button className="boutonsubmit" variant="primary" onClick={() => addProduct()}>
              Add Produit
            </Button>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Recherche produit</Form.Label>
            <Form.Control  type="search"  placeholder='Rechercher Produit' value={search} onChange={(e) => { setSearch(e.target.value);  }}/>
            </Form.Group>
          </Form>
        </div>

     <div className="divflex">
       {/* <Product
          img={
            "https://i.pinimg.com/originals/b8/9b/b4/b89bb4007b0ad906b78b4887734c6152.jpg"
          }
          title={"Gucci"}
          parag={"120dt"}
        />
        <Product
          img={"https://img.giglio.com/images/prodZoom/305164.001_2.jpg"}
          title={"Ckone"}
          parag={"140dt"}
        />
        <Product
          img={
            "https://www.cdiscount.com/pdt2/0/9/3/1/300x300/mp59922093/rw/sweat-calvin-klein-pour-des-hommes-sweat-graphique.jpg"
          }
          title={"D&&g"}
          parag={"150dt"}
        />
      </div>
      <div className="divflex">
        <Product
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQI0wd0XvPiBQLxTotuh3Vatzakb-sW-ajA&usqp=CAU"
          }
          title={"Gucci"}
          parag={"120dt"}
        />
        <Product
          img={"https://img.giglio.com/images/prodZoom/C22104.005_4.jpg"}
          title={"Ckone"}
          parag={"140dt"}
        />
        <Product
          img={
            "https://www.cdiscount.com/pdt2/4/5/8/1/700x700/mp51011458/rw/calvin-klein-monogram-logo-crew-neck-sweatshirt-h.jpg "
          }
          title={"D&&g"}
          parag={"150dt"}
        /> */}
      
                  <div>
                    
                     
                      
                    {
                    productlist.length > 0 ? <div className="divaffichproduit">{productlist.filter(product => product.name.includes(search)).map((product,index)=> 
                      {
                    return <Product key={index} 
                                    img={product.name}
                                    title={product.email}
                                    parag={product.tel}>
                          </Product>
                    }
                    )}
                    </div>: <div><p>No Product</p></div>
                    }
              
                </div> 
                  </div>
                <Footer />
              </div>
  );
}
