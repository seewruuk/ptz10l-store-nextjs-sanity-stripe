import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { client, urlFor } from '../lib/client';
import { useStateContext } from './../context/StateContext';
import { motion } from 'framer-motion'
import { useEffect } from 'react';
import Loader from '../components/Loader';


const Index = ({ products }) => {
  const { qty, descQty, incQty, onAdd, buyNowButton, loader, productId, toggleProductId } = useStateContext();
  const discount = products[productId].price < 39.99 ? true : false;
  const available = products[productId].available ? true : false;




  return (

    loader ? (
      <motion.div style={{
        height: "100vh",
      }}
        animate={{
          opacity: 0,
          transition: {
            delay: 3,
            duration: 2,
          }
        }}

      >
        <Loader />
      </motion.div>
    ) : (

      <>
        <motion.div className='switch-book-container' initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.5
            }
          }}
        >
          <button className='button-switch-book' onClick={() => toggleProductId()}>Zmień książkę</button>
        </motion.div>


        <motion.div className="home-page-container"
          initial={{
            opacity: 0,
            y: 100
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              duration: 1.6,
              ease: 'easeInOut',
              stiffness: 100,
              bounce: 0.25,
            }
          }}

        >


          <motion.div className="left"
            initial={{
              opacity: 0,
              y: 100
            }}

            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.6,
                ease: 'easeInOut',
                bounce: 0.25,

              }
            }}

          >
            <div className="details">

              <h3>{products[productId].author}</h3>
              <h1>
                {products[productId].name}
              </h1>
              <span className='price'>
                {
                  discount ? (
                    <>
                      <s className='prev-price'>39.99 zł</s>
                      <span className='new-price'>
                        {products[productId].price} zł
                      </span>
                    </>
                  ) : (
                    <span className='new-price'>
                      {products[productId].price} zł
                    </span>
                  )
                }
              </span>

              <div className='quantity-container'>
                <div className='qty-minus' onClick={descQty}>
                  <AiOutlineMinus />

                </div>
                <div className='qty-qty'>
                  {
                    qty
                  }
                </div>
                <div className='qty-plus' onClick={incQty}>
                  <AiOutlinePlus />
                </div>
              </div>


              <hr />

              <div className='button-section'>
                <button disabled={available ? false : true} type='button' className={`button-add-to-cart-${available ? "available" : "unavailable"}`}
                  onClick={() => onAdd(products[productId], qty)}
                >
                  Dodaj do koszyka
                </button>

                <button type='button' disabled={available ? false : true} className={`button-buy-now-${available ? "available" : "unavailable"}`}
                  onClick={() => buyNowButton(products[productId], qty)}
                >
                  Kup teraz
                </button>
              </div>
              <p className='unavailable'>
                {
                  available ? (
                    <span></span>
                  ) : (
                    <span className='product-unavailable'>Produkt chwilowo niedostępny</span>
                  )
                }
              </p>


            </div>

            <div className='desc'>
              <h3>Opis produktu:</h3>
              {

                productId == 1 ? (
                  <p>
                    Zastanawiasz się, jakie decyzje podejmiesz w przyszłości?<br />
                    <span style={{ fontWeight: 'bolder' }}>Ta książka jest właśnie dla Ciebie!</span><br /><br />

                    Zawiera ona szereg pytań dotyczących różnych obszarów Twojego <span style={{ fontWeight: 'bolder' }}>życia,</span> od <span style={{ fontWeight: 'bolder' }}>pracy</span> i <span style={{ fontWeight: 'bolder' }}>kariery</span> po <span style={{ fontWeight: 'bolder' }}>relacje</span> i <span style={{ fontWeight: 'bolder' }}>pasje.</span><br /><br />

                    <i>Co chcesz osiągnąć w życiu?<br /> Czy aktualnie robisz coś w tym kierunku?<br />
                      Z kim za 10 lat zniknie Ci kontakt?<br />
                      Co chcesz w sobie zmienić?<br /><br /></i>

                    A to tylko <span style={{ fontWeight: 'bolder' }}>przedsmak</span> tego co czeka na Ciebie w środku!

                    Pozwól sobie na chwilę refleksji i <span style={{ fontWeight: 'bolder' }}>odpowiedz na pytania szczerze. </span>
                    Za dziesięć lat będziesz mieć okazję sprawdzić, jak wiele Twoich odpowiedzi się zmieniło i jak wiele z nich spełniło się.
                    Ta książka to nie tylko zabawa, ale również <span style={{ fontWeight: 'bolder' }}>motywacja do realizacji swoich marzeń i celów.</span> Pozwól sobie na chwilę introspekcji
                    i przekonaj się, co przyniesie przyszłość.<br /><br />

                    Nie czekaj dłużej i rozpocznij swoją przygodę z książką <span style={{ fontWeight: 'bolder' }}>"Przeczytaj to za 10 lat".</span>
                  </p>
                ) : (
                  <p>
                    Książka <span style={{ fontWeight: 'bolder' }}>"Przeczytajcie to za 10 lat"</span> to idealna propozycja dla par, które chcą <span style={{ fontWeight: 'bolder' }}>wzmocnić swoją relację</span> i lepiej poznać swoje marzenia i plany na przyszłość. <br /><br />
                    <i>Kto zrobił pierwszy krok?<br />
                    Kto pierwszy się zauroczył?<br />
                    Co w sobie kochacie?<br />
                    Czego w sobie nie lubicie?</i>
                    <br /><br />Ta unikalna książka zawiera serię pytań, które skłonią was do refleksji nad tym, gdzie widzicie się za 10 lat i jakie cele chcecie osiągnąć razem.
                    <br /><br />Dzięki niej, <span style={{ fontWeight: 'bolder' }}>będziecie mogli lepiej poznać swoje pragnienia i wspólnie pracować nad ich realizacją.</span> Ciekawa i inspirująca, ta książka to doskonałe narzędzie dla par, które
                    chcą rozwijać swoją relację i razem budować lepszą przyszłość. Zachęcamy do zakupu i przeczytania jej razem za 10 lat!
                    <br/>&nbsp;
                    <br/>&nbsp;
                    <br/>&nbsp;

                    
                  </p>
                )
              }

            </div>
          </motion.div>

          <div className="right">
            <div style={{ height: "200%", width: "100%", overflow: 'hidden', display: "flex", alignItems: 'center', justifyContent: "center" }}>
              <motion.img src={urlFor(products[productId].image[0])}

                initial={{
                  scale: 0,
                  rotate: "150deg",
                }}
                animate={{
                  scale: 0.95,
                  rotate: 0,
                  transition: {
                    delay: 0.5,
                    type: 'spring',
                    duration: 1.6,
                    ease: 'easeInOut',
                  }
                }}
              />
            </div>
          </div>

        </motion.div >
      </>
    ))
}
export default Index

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);

  const socials = await client.fetch(`*[_type == "social"]`);
  return {
    props: {
      products,
      socials
    }
  }
}