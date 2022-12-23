import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { client, urlFor } from '../lib/client';
import { useStateContext } from './../context/StateContext';
import { motion } from 'framer-motion'
import { useEffect } from 'react';
import Loader from '../components/Loader';
const Index = ({ products }) => {

  const discount = products[0].price < 39.99 ? true : false;
  const available = products[0].available ? true : false;

  const { qty, descQty, incQty, onAdd, buyNowButton, loader, setLoader } = useStateContext();



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
            <h3>{products[0].author}</h3>
            <h1>
              {products[0].name}
            </h1>
            <span className='price'>
              {
                discount ? (
                  <>
                    <s className='prev-price'>39.99 zł</s>
                    <span className='new-price'>
                      {products[0].price} zł
                    </span>
                  </>
                ) : (
                  <span className='new-price'>
                    {products[0].price} zł
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
                onClick={() => onAdd(products[0], qty)}
              >
                Dodaj do koszyka
              </button>

              <button type='button' disabled={available ? false : true} className={`button-buy-now-${available ? "available" : "unavailable"}`}
                onClick={() => buyNowButton(products[0], qty)}
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
            <p>
              Zastanawiasz się, jakie decyzje podejmiesz w przyszłości?
              Ta książka jest właśnie dla Ciebie!<br /><br />

              Zawiera ona szereg pytań dotyczących różnych obszarów Twojego życia, od pracy i kariery po relacje i pasje.<br /><br />

              Co chcesz osiągnąć w życiu? Czy aktualnie robisz coś w tym kierunku?<br /><br />
              Z kim za 10 lat zniknie Ci kontakt?
              Co chcesz w sobie zmienić?<br /><br />

              A to tylko przedsmak tego co czeka na Ciebie w środku!

              Pozwól sobie na chwilę refleksji i odpowiedz na pytania szczerze.
              Za dziesięć lat będziesz mieć okazję sprawdzić, jak wiele Twoich odpowiedzi się zmieniło i jak wiele z nich spełniło się. Ta książka to nie tylko zabawa, ale również motywacja do realizacji swoich marzeń i celów. Pozwól sobie na chwilę introspekcji i przekonaj się, co przyniesie przyszłość.<br /><br />

              Nie czekaj dłużej i rozpocznij swoją przygodę z książką "Przeczytaj to za 10 lat".
            </p>
          </div>
        </motion.div>

        <div className="right">
          <div style={{ height: "100%", width: "100%", overflow: 'hidden', display: "flex", alignItems: 'center', justifyContent: "center" }}>
            <motion.img src={urlFor(products[0].image[0])}

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